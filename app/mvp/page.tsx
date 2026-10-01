'use client'

import { useMemo, useState, useEffect, useRef } from 'react'
import { CheckCircle2, ChevronDown, Loader2, RefreshCcw } from 'lucide-react'
import { RoughNotation } from 'react-rough-notation'
import { FieldBackground } from '@/components/draw/FieldBackground'
import { PlayerCard } from '@/components/draw/PlayerCard'
import { players, Player } from '../team-draw/data'
import { MATCH_ID } from '../team-draw/data'


const title = `VOTACIÓN MVP * ${MATCH_ID}`

type Step = 'voter' | 'mvp' | 'sending' | 'done'

interface RankedPlayer {
  playerId: number
  playerName: string
  votes: number
}

export default function MvpPage() {
  const [step, setStep] = useState<Step>('voter')
  const [voter, setVoter] = useState<Player | null>(null)
  const [mvp, setMvp] = useState<Player | null>(null)
  const [error, setError] = useState('')
  const [show, setShow] = useState(true)
  const [loadingLeader, setLoadingLeader] = useState(false)
  const [leader, setLeader] = useState<RankedPlayer | null>(null)
  const [topPlayers, setTopPlayers] = useState<RankedPlayer[]>([])
  const [showTopDropdown, setShowTopDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => setShow(true), 100); // reinicia
    }, 4000); // cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadLeader()
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowTopDropdown(false)
      }
    }
    if (showTopDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [showTopDropdown])

  function resetVoting() {
    setVoter(null)
    setMvp(null)
    setError('')
    setStep('voter')
  }

  useEffect(() => {
    if (step === 'done') {
      const timer = setTimeout(() => {
        resetVoting()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [step])



  const teamWhite = useMemo(
    () => players.filter(player => player.equipo === 'blanco'),
    []
  )

  const teamBlack = useMemo(
    () => players.filter(player => player.equipo === 'negro'),
    []
  )

  async function saveVote(voter: Player, mvp: Player) {
    const response = await fetch('/api/mvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voterId: voter.id,
        voterName: voter.nombre,
        mvpId: mvp.id,
        mvpName: mvp.nombre,
        matchId: MATCH_ID,
      }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => null)
      throw new Error(data?.message || 'Error al guardar el voto')
    }
  }

  async function handlePlayerClick(player: Player) {
    if (step === 'sending') return

    if (step === 'done') {
      setError('')
      setMvp(null)
      setVoter(player)
      setStep('mvp')
      return
    }

    if (step === 'voter') {
      setVoter(player)
      setStep('mvp')
      return
    }

    if (step === 'mvp') {
      if (player.id === voter?.id) return

      setMvp(player)
      setStep('sending')
      setError('')

      try {
        await saveVote(voter!, player)
        setStep('done')
      } catch (err: unknown) {
        console.error(err)
        const msg = err instanceof Error ? err.message : 'Ocurrió un error registrando tu voto.'
        setError(msg)
        setStep('voter')
        setVoter(null)
        setMvp(null)
      } finally {
        await loadLeader()
      }
    }
  }

  async function loadLeader() {
    try {
      setLoadingLeader(true)

      const response = await fetch(`/api/mvp?matchId=${MATCH_ID}`)

      if (!response.ok) {
        throw new Error()
      }

      const ranking: RankedPlayer[] = await response.json()

      setLeader(ranking.length ? ranking[0] : null)
      setTopPlayers(ranking.slice(0, 3))

    } catch (error) {
      console.error(error)
    } finally {
      setLoadingLeader(false)
    }
  }

  return (
    <main
      className="relative overflow-hidden bg-[#0b1c13] sm:bg-[#07140d] text-white"
      style={{
        height: 'calc(100dvh - 57px)',
      }}
    >
      <div className="relative mx-auto h-full w-full sm:max-w-3xl">
        <FieldBackground />

        <div className="relative z-10 flex h-full flex-col px-3 pt-0 sm:pt-1">

          <h1 className="bg-linear-to-b from-white to-white/40 bg-clip-text text-[17px] sm:text-2xl font-black uppercase tracking-[0.15em] text-transparent text-center">
            {title}
          </h1>

          {/* Mvp */}
          <div className="flex justify-center gap-3 items-center">

            {leader ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    if (topPlayers.length > 1) {
                      setShowTopDropdown(prev => !prev)
                    }
                  }}
                  className={`rounded-full bg-white/10 px-3 py-0.5 text-sm flex items-center transition select-none ${
                    topPlayers.length > 1
                      ? 'cursor-pointer hover:bg-white/20 active:scale-95'
                      : 'cursor-default'
                  }`}
                  aria-expanded={showTopDropdown}
                  aria-haspopup={topPlayers.length > 1}
                >
                  <span>🔥 {leader.playerName}</span>
                  <span className="ml-2 text-yellow-400 font-bold">
                    {leader.votes} {leader.votes === 1 ? 'Voto' : 'Votos'}
                  </span>
                  {topPlayers.length > 1 && (
                    <ChevronDown
                      className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                        showTopDropdown ? 'rotate-180 text-yellow-400' : 'text-white/70'
                      }`}
                    />
                  )}
                </button>

                {topPlayers.length > 1 && showTopDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-xl border border-white/20 bg-[#07170e]/95 backdrop-blur-md shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-2 py-1 text-[11px] font-semibold tracking-wider uppercase text-white/50 border-b border-white/10 mb-1 flex items-center justify-between">
                      <span>Top 3 Más Votados</span>
                      <span className="text-[10px] text-white/40">MVP</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      {topPlayers.map((player, index) => {
                        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'
                        const isFirst = index === 0
                        return (
                          <div
                            key={player.playerId}
                            className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs ${
                              isFirst
                                ? 'bg-white/15 text-white font-medium shadow-xs'
                                : 'bg-white/5 text-white/90'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-sm shrink-0">{medal}</span>
                              <span className="truncate">{player.playerName}</span>
                            </div>
                            <span className="text-yellow-400 font-bold ml-2 shrink-0">
                              {player.votes} {player.votes === 1 ? 'Voto' : 'Votos'}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}

            <button
              onClick={loadLeader}
              disabled={loadingLeader}
              className="rounded-full bg-white/10 px-3 py-0.5 hover:bg-white/20 transition border-2 animate-pulse"
              title="Recargar líder"
            >
              {loadingLeader ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCcw className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-between pb-2">

            {/* Equipo Blanco */}
            <div className="h-[40%] mt-2 sm:mt-6 content-center mb-1">
              <Formation
                team={teamWhite}
                side="top"
                step={step}
                voter={voter}
                mvp={mvp}
                onPlayerClick={handlePlayerClick}
              />
            </div>

            {/* Centro */}
            <div className="flex flex-1 flex-col items-center justify-center text-center px-6">

              {step === 'voter' && (
                <>
                  <RoughNotation
                    type="underline"
                    show={show}
                    color="rgba(250, 0, 0, 1)"
                    animationDuration={4000}
                    iterations={3}
                  >
                    <h2 className="text-xl bg-linear-to-b from-white to-white/60 bg-clip-text  sm:text-2xl font-black uppercase tracking-[0.15em] text-transparent text-center">
                      ¿Quién eres?
                    </h2></RoughNotation>

                  <p className="mt-2 text-white/70 text-sm sm:text-base">
                    Selecciona tu jugador para votar.
                  </p>
                </>
              )}

              {step === 'mvp' && (
                <>
                  <RoughNotation
                    type="box"
                    show={show}
                    color="rgba(250, 0, 0, 1)"
                    animationDuration={4000}
                    iterations={3}
                  >
                    <h2 className="text-[18px] bg-linear-to-b from-white to-white/60 bg-clip-text  sm:text-2xl font-black uppercase tracking-[0.15em] text-transparent text-center">
                      ¿Quién fue el mejor jugador?
                    </h2>
                  </RoughNotation>

                  <div className="mt-1 flex items-center gap-2 text-xs text-white/80">
                    <span>Votando como: <strong className="text-white">{voter?.nombre}</strong></span>
                    <button
                      type="button"
                      onClick={resetVoting}
                      className="text-yellow-400 hover:underline text-[11px] cursor-pointer"
                    >
                      (Cambiar)
                    </button>
                  </div>
                </>
              )}

              {step === 'sending' && (
                <div className="flex flex-col items-center gap-2">

                  <Loader2 className="w-10 h-10 animate-spin" />

                  <p>Registrando voto...</p>

                </div>
              )}

              {step === 'done' && (
                <div className="flex flex-col items-center gap-1.5 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-7 h-7 text-green-400" />

                  <h2 className="text-[18px] bg-linear-to-b from-white to-white/60 bg-clip-text sm:text-2xl font-black uppercase tracking-[0.15em] text-transparent text-center">
                    ¡Gracias por votar!
                  </h2>

                  <button
                    type="button"
                    onClick={resetVoting}
                    className="mt-1 flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 px-3.5 py-1 text-xs text-white/90 border border-white/20 transition cursor-pointer"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>Votar con otro jugador</span>
                  </button>
                </div>
              )}

              {error && (
                <p className="mt-2 text-red-400">
                  {error}
                </p>
              )}

            </div>

            {/* Equipo Negro */}
            <div className="h-[45%] mb-6 sm:mb-6 content-center">
              <Formation
                team={teamBlack}
                side="bottom"
                step={step}
                voter={voter}
                mvp={mvp}
                onPlayerClick={handlePlayerClick}
              />
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}

interface FormationProps {
  team: Player[]
  side: 'top' | 'bottom'
  step: Step
  voter: Player | null
  mvp: Player | null
  onPlayerClick: (player: Player) => void
}

function Formation({
  team,
  side,
  step,
  voter,
  mvp,
  onPlayerClick,
}: FormationProps) {

  const rows = [
    team.slice(0, 4),
    team.slice(4, 8),
    team.slice(8, 10),
  ]

  const orderedRows =
    side === 'bottom'
      ? [...rows].reverse()
      : rows

  return (
    <div className="space-y-4 sm:space-y-7">

      {orderedRows.map((row, rowIndex) => (

        <div
          key={rowIndex}
          className="flex justify-center gap-2"
        >

          {row.map(player => (

            <PlayerCard
              key={player.id}
              player={player}
              onClick={() => onPlayerClick(player)}
              disabled={
                step === 'mvp' &&
                (
                  player.id === voter?.id ||
                  player.mvp
                )
              }
              selected={
                player.id === voter?.id ||
                player.id === mvp?.id
              }
            />

          ))}

        </div>

      ))}

    </div>
  )
}