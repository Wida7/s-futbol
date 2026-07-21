'use client'

import { useMemo, useState, useEffect } from 'react'
import { CheckCircle2, Loader2, RefreshCcw } from 'lucide-react'
import { RoughNotation } from 'react-rough-notation'
import { FieldBackground } from '@/components/draw/FieldBackground'
import { PlayerCard } from '@/components/draw/PlayerCard'
import { players, Player } from '../team-draw/data'


const MATCH_ID = 'fecha-1'
const title = `VOTACIÓN MVP * ${MATCH_ID}`

type Step = 'voter' | 'mvp' | 'sending' | 'done'

export default function MvpPage() {
  const [step, setStep] = useState<Step>('voter')
  const [voter, setVoter] = useState<Player | null>(null)
  const [mvp, setMvp] = useState<Player | null>(null)
  const [error, setError] = useState('')
  const [show, setShow] = useState(true)
  const [loadingLeader, setLoadingLeader] = useState(false)
  const [leader, setLeader] = useState<{
    playerId: number
    playerName: string
    votes: number
  } | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => setShow(true), 100); // reinicia
    }, 5000); // cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadLeader()
  }, [])



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
      throw new Error('Error al guardar el voto')
    }
  }

  async function handlePlayerClick(player: Player) {
    if (step === 'sending' || step === 'done') return

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
      } catch (err) {
        console.error(err)
        setError('Ocurrió un error registrando tu voto.')
        setStep('mvp')
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

      const ranking = await response.json()

      setLeader(ranking.length ? ranking[0] : null)

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
          <div className="flex justify-center gap-3">

            {leader ? (

              <div className="rounded-full bg-white/10 px-3 py-0.5 text-sm">

                🔥 {leader.playerName}

                <span className="ml-2 text-yellow-400 font-bold">
                  {leader.votes} Votos
                </span>

              </div>

            ) : (

              <></>

            )}
            <button
              onClick={loadLeader}
              disabled={loadingLeader}
              className="rounded-full bg-white/10 px-3 py-0.5 hover:bg-white/20 transition border-2 animate-pulse"
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
                  {/* <p className="mt-2 text-white/70">
                                        No puedes votar por ti mismo.
                                    </p>

                                    <p className="mt-3 text-green-400 font-semibold">
                                        Tú eres: {voter?.nombre}
                                    </p> */}
                </>
              )}

              {step === 'sending' && (
                <div className="flex flex-col items-center gap-2">

                  <Loader2 className="w-10 h-10 animate-spin" />

                  <p>Registrando voto...</p>

                </div>
              )}

              {step === 'done' && (
                <div className="flex flex-col items-center gap-0.5">

                  <CheckCircle2 className="w-7 h-7 text-green-400" />

                  <h2 className="text-[18px] bg-linear-to-b from-white to-white/60 bg-clip-text  sm:text-2xl font-black uppercase tracking-[0.15em] text-transparent text-center">
                    ¡Gracias por votar!
                  </h2>
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
                player.id === voter?.id
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