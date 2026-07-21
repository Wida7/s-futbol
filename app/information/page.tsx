"use client"

import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import FastInformation from '@/components/FastInformation'
import { AlertCircle, CalendarCheck, CheckCircle2, Equal, Gift, Star, Trophy, Users } from 'lucide-react'
import { RoughNotation } from 'react-rough-notation'
import { useEffect, useState } from 'react'

export default function InformationPage() {

  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => setShow(true), 100); // reinicia
    }, 5000); // cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-1 max-w-6xl px-6 py-4 text-center sm:text-start self-center">


      {/* Title */}
      <h1 className="font-(family-name:--font-orbitron) font-black uppercase tracking-wider text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-center sm:text-start block bg-linear-to-b from-primary/50 to-primary/90 bg-clip-text text-transparent">
        REGLAS Y
      </h1>
      <h1 className="font-(family-name:--font-orbitron)  font-black uppercase tracking-wider text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-center sm:text-start block bg-linear-to-b from-primary/60 to-white/60 bg-clip-text text-transparent">
        SISTEMA
      </h1>

      {/* Title underline accent */}
      <div
        className={cn(
          "flex gap-1",
          "sm:justify-start justify-center"
        )}
      >
        <div className="h-px w-12 bg-primary/60" />
        <div className="h-px w-8 bg-primary/45" />
        <div className="h-px w-6 bg-primary/35" />
      </div>

      {/* Subtitle */}
      <p className="mt-4 text-sm leading-relaxed text-foreground/60 md:text-base">
        Todo lo que necesitas saber sobre la liga, cómo se asignan los puntos en cada fecha y los premios.
      </p>

      <div className="flex flex-col gap-24 mt-4">
        {/* Section 1: Fast Information */}
        <div className="animate-[fade-in-up_0.6s_ease-out_0.2s_both]">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white/80 mb-3 flex items-center justify-center md:justify-start gap-3">
              <span className="text-primary">
                01.
              </span>
              Información Rápida
            </h2>
            <div className="flex justify-start h-1.5 w-24 bg-primary rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>

          </div>


          <FastInformation />
        </div>

        {/* Section 2: Scoring System */}
        <div className="animate-[fade-in-up_0.6s_ease-out_0.4s_both]">


          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white/80 mb-3 flex items-center justify-center md:justify-start gap-3">
              <span className="text-primary">
                02.
              </span>
              Sistema de Puntuación
            </h2>
            <div className="flex justify-start h-1.5 w-24 bg-primary rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
            <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto md:mx-0">
              Así es como sumarás puntos a lo largo de las 5 fechas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 sm:mx-20">
            {/* Puntos por Asistencia */}
            <div className="group relative overflow-hidden rounded-3xl border border-green-500/30 bg-linear-to-b from-green-500/10 to-transparent p-8 hover:border-green-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-green-400 ring-1 ring-green-500/50">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-2">Asistencia</h3>
              <div className="text-5xl font-black text-green-400 mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">+6 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Solo por llegar a la cancha y jugar el partido. El premio más importante a la constancia.
              </p>
            </div>

            {/* Puntos por Victoria */}
            <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-linear-to-b from-yellow-500/10 to-transparent p-8 hover:border-yellow-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/50">
                <Trophy size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-2">Victoria</h3>
              <div className="text-5xl font-black text-yellow-400 mb-4 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">+3 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Puntos adicionales para los miembros del equipo que resulte ganador en cada fecha.
              </p>
            </div>

            {/* Puntos por Empate */}
            <div className="group relative overflow-hidden rounded-3xl border border-blue-500/30 bg-linear-to-b from-blue-500/10 to-transparent p-8 hover:border-blue-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50">
                <Equal size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-2">Empate</h3>
              <div className="text-5xl font-black text-blue-400 mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">+1 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Si el partido termina igualado, ambos equipos suman este punto extra (además de la asistencia).
              </p>
            </div>

            {/* Puntos por Referidos */}
            <div className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-linear-to-b from-purple-500/10 to-transparent p-8 hover:border-purple-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/50">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-2">Referidos</h3>
              <div className="text-5xl font-black text-purple-400 mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">+2 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts c/u</span></div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Por cada invitado tuyo que asista a jugar. Hasta un máximo de 2 referidos por partido.
              </p>
            </div>

            {/* Puntos por Asistencia */}
            <div className="group relative overflow-hidden rounded-3xl border border-green-500/30 bg-linear-to-b from-green-700/10 to-transparent p-8 hover:border-green-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />

              {/* Icono */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-green-400 ring-1 ring-green-500/50">
                <CalendarCheck size={28} /> {/* puedes usar otro ícono de lucide-react */}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-black uppercase text-white mb-2">Triplete</h3>

              {/* Puntos */}
              <div className="text-5xl font-black text-green-400 mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                +3 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span>
              </div>

              {/* Descripción */}
              <p className="text-base text-zinc-400 leading-relaxed">
                Por asistir a 3 partidos seguidos en la misma edición. (Una vez por edición)
              </p>
            </div>

            {/* MVP Próximamente */}
            <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-linear-to-b from-yellow-500/10 to-transparent p-8 hover:border-yellow-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />

              {/* Icono */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/50">
                <Star size={28} />
              </div>

              {/* Título */}
              <h3 className="text-2xl font-black uppercase text-white mb-2">
                MVP
              </h3>

              {/* Puntos */}
              <div className="text-5xl font-black text-yellow-400 mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                +2 <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span>
              </div>

              {/* Descripción */}
              <p className="text-base text-zinc-400 leading-relaxed">
                También se premiará el talento individual, con el voto de los participantes.
                (No podrá ser seguido, osea de una fecha a la siguiente no podrá ser el mismo jugador)
              </p>
            </div>

            {/* Sorteo de Puntos */}
            <div className="group relative overflow-hidden rounded-3xl border border-pink-500/30 bg-linear-to-b from-pink-500/10 to-transparent p-8 hover:border-pink-400 transition-all hover:scale-[1.03] duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] md:col-span-2">
              {/* Animación */}
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite]" />
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400 ring-1 ring-pink-500/50">
                <Gift size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-2">Sorteo Puntos</h3>
              <div className="text-5xl font-black text-pink-400 mb-4 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)] tracking-widest animate-[gold-green-flash_2s_infinite]">?? <span className="text-xl text-zinc-500 font-bold uppercase tracking-wider">pts</span></div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Puntos extra sorteados que se anuncian al realizar la convocatoria. La cantidad de puntos varía y aumentará en las últimas fechas, estos serán para mantener viva la emoción hasta el final y dependeran de la suerte.
                <span className="ml-2 inline-block font-black text-xl tracking-widest animate-[gold-green-flash_2s_infinite]">🍀 777 🎰</span>
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Premios */}
        {/* Section 3: Premios */}
        <div className="animate-[fade-in-up_0.6s_ease-out_0.2s_both]">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white/80 mb-3 flex items-center justify-center md:justify-start gap-3">
              <span className="text-primary">
                03.
              </span>
              Premios
            </h2>

            <div className="flex justify-start h-1.5 w-24 bg-primary rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>

            <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto md:mx-0">
              Los 3 primeros puestos de la edición se llevarán premios. Podrán escoger si el efectivo o los premios representados en las imagenes.
            </p>

            <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto md:mx-0">
              <RoughNotation
              type="box"
              show={show}
              color="red"
              animationDuration={3000}
              iterations={3}
            >
              <span className=''>
              También premiaremos a los que asistan a todos los partidos de la edición, se merecen un reconocimiento especial 😎
              </span></RoughNotation>
            </p>
            
          </div>

          {/* Podio */}
          <div className="relative flex items-end justify-center gap-2 sm:gap-8 my-10 sm:mt-16 pt-10 pb-4 overflow-visible">

            {/* 2do Lugar */}
            <div className="group flex flex-col items-center">
              <div className="mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-zinc-400/40 bg-zinc-800/80 shadow-[0_0_25px_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]">
                <Trophy className="text-zinc-300" size={28} />
              </div>

              <div className="mb-2 sm:mb-3 text-center">
                <p className="text-zinc-400 uppercase tracking-widest text-[10px] sm:text-sm font-bold">
                  2do Lugar
                </p>

                <div className="text-2xl sm:text-3xl font-black text-zinc-100">
                  $100K
                </div> {/* ó
                <div className="mt-3">
                  <Image src="/dos.png" alt="Premio alternativo 2do lugar" width={72} height={72} className="mx-auto rounded-2xl border border-zinc-700/40 bg-white/15" />
                </div> */}
              </div>

              <div className="relative h-32 w-20 sm:h-44 sm:w-36 rounded-t-2xl sm:rounded-t-3xl border border-zinc-400/30 bg-linear-to-b from-zinc-300/30 to-zinc-900/80 backdrop-blur-xl flex items-center justify-center overflow-hidden">

                {/* Shine */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />

                <div className="absolute top-3 left-0 right-0 h-[calc(100%-0.75rem)]
                -translate-x-full rounded-t-2xl sm:rounded-t-3xl
                bg-linear-to-r from-transparent via-white/5 to-transparent
                animate-[shine_4s_ease-in-out_infinite]" />
                <span className="text-4xl sm:text-6xl font-black text-zinc-200/90">
                  2
                </span>

                <div className="absolute inset-0 rounded-t-2xl sm:rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
              </div>
            </div>

            {/* 1er Lugar */}
            <div className="group flex flex-col items-center -translate-y-3 sm:-translate-y-6">
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-2xl animate-pulse" />

                <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-yellow-400/50 bg-yellow-500/10 shadow-[0_0_40px_rgba(250,204,21,0.45)] transition-all duration-300 group-hover:scale-110">
                  <Trophy className="text-yellow-300 animate-[bounce_1.5s_ease-in-out_infinite]" size={40} style={{ fill: "currentColor", stroke: "currentColor" }} />
                </div>
              </div>

              <div className="mb-2 sm:mb-3 text-center">
                <p className="text-yellow-300 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm font-black">
                  CAMPEÓN
                </p>

                <div className="text-3xl sm:text-5xl font-black bg-linear-to-b from-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                  $130K
                </div> y Trofeo {/* ó
                <div className="mt-3">
                  <Image src="/uno.png" alt="Premio alternativo campeón" width={84} height={84} className="mx-auto rounded-2xl border border-yellow-400/30 bg-yellow-950/20" />
                </div> */}
              </div>

              <div className="relative h-44 w-24 sm:h-60 sm:w-40 rounded-t-2xl sm:rounded-t-3xl border border-yellow-400/40 bg-linear-to-b from-yellow-400/30 to-yellow-950/80 backdrop-blur-xl flex items-center justify-center overflow-hidden">

                {/* Shine */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />

                <div className="absolute top-3 left-0 right-0 h-[calc(100%-0.75rem)]
                -translate-x-full rounded-t-2xl sm:rounded-t-3xl
                bg-linear-to-r from-transparent via-white/5 to-transparent
                animate-[shine_4s_ease-in-out_infinite]" />

                <span className="text-5xl sm:text-7xl font-black text-yellow-100/90 animate-pulse">
                  1
                </span>
              </div>
            </div>

            {/* 3er Lugar */}
            <div className="group flex flex-col items-center overflow-hidden">
              <div className="mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-amber-700/40 bg-amber-950/50 shadow-[0_0_25px_rgba(180,83,9,0.15)] transition-all duration-300 group-hover:scale-110">
                <Trophy className="text-amber-500" size={28} />
              </div>

              <div className="mb-2 sm:mb-3 text-center">
                <p className="text-amber-500 uppercase tracking-widest text-[10px] sm:text-sm font-bold">
                  3er Lugar
                </p>

                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  $70K
                </div> {/* ó
                <div className="mt-3">
                  <Image src="/tres.png" alt="Premio alternativo 3er lugar" width={64} height={64} className="mx-auto rounded-2xl border border-amber-500/30 bg-amber-950/20" />
                </div> */}
              </div>

              <div className="relative h-24 w-20 sm:h-32 sm:w-36 rounded-t-2xl sm:rounded-t-3xl border border-amber-700/30 bg-linear-to-b from-amber-700/30 to-zinc-950/80 backdrop-blur-xl flex items-center justify-center">
                <div className="absolute top-3 left-0 right-0 h-[calc(100%-0.75rem)]
                -translate-x-full rounded-t-2xl sm:rounded-t-3xl
                bg-linear-to-r from-transparent via-white/5 to-transparent
                animate-[shine_4s_ease-in-out_infinite]" />

                <span className="text-4xl sm:text-6xl font-black text-amber-300/90">
                  3
                </span>

                <div className="absolute inset-0 rounded-t-2xl sm:rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
              </div>
            </div>
          </div>





        </div>

      </div>

    </div>
  )
}
