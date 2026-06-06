import { cn } from '@/lib/utils'
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { ChevronUp, ChevronDown } from 'lucide-react'

export const columns: ColumnDef<any>[] = [
	{
		accessorKey: 'posicion',
		header: () => <div className="text-center">#</div>,
		enableSorting: true,
		cell: ({ row }) => {
			const posicion = Number(row.getValue('posicion'))
			const posicionAnterior = Number(row.original.fechaAnterior
			)
			//console.log('Row data:', row.original)
			//console.log('Posición actual:', posicion, 'Posición anterior:', posicionAnterior)
			const diferencia = posicionAnterior - posicion
			// positiva = subió
			// negativa = bajó



			const styles = {
				1: 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 text-yellow-300 border-yellow-400/40 shadow-[0_0_15px_rgba(250,204,21,0.35)] backdrop-blur-sm',

				2: 'bg-gradient-to-br from-slate-300/20 to-slate-500/10 text-slate-200 border-slate-300/40 shadow-[0_0_15px_rgba(203,213,225,0.25)] backdrop-blur-sm',

				3: 'bg-gradient-to-br from-orange-400/20 to-amber-700/10 text-orange-300 border-orange-400/40 shadow-[0_0_15px_rgba(251,146,60,0.3)] backdrop-blur-sm',
			}[posicion]

			if (![1, 2, 3].includes(posicion)) {
				return (
					<div className="flex items-center justify-center gap-1">
						<span className="font-semibold text-muted-foreground">
							{posicion}
						</span>

					</div>
				)
			}

			const medals = {
				1: '🥇',
				2: '🥈',
				3: '🥉',
			}[posicion]

			return (
				<div className="flex justify-center transition-transform relative ">
					<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shine_4s_ease-in-out_infinite_1s]" />
					<Badge
						variant="outline"
						className={cn(
							'border font-black px-2 py-0.5 transition-all duration-300 hover:scale-105 h-full',
							styles
						)}
					>
						{medals} {posicion}
					</Badge>
				</div>
			)
		},
	},
	{
		accessorKey: 'nombre',
		header: 'Nombres',
		cell: ({ row }) => {
			const posicion = Number(row.getValue('posicion'));
			const posicionAnterior = Number(row.original.fechaAnterior);
			const diferencia =
				!posicionAnterior || posicionAnterior <= 0
					? null
					: posicionAnterior - posicion
			// positiva = subió
			// negativa = bajó
			const movement =
				diferencia === null ? null : diferencia > 0 ? (
					<div className="flex items-center gap-0.5 text-green-500 text-[8px] font-bold">
						<ChevronUp className="h-3 w-3" />
						{diferencia}
					</div>
				) : diferencia < 0 ? (
					<div className="flex items-center gap-0.5 text-red-500 text-[8px] font-bold">
						<ChevronDown className="h-3 w-3" />
						{Math.abs(diferencia)}
					</div>
				) : null

			// Si está entre los 3 primeros, le damos font-black
			const isTop3 = posicion <= 3;
			return (
				<div className="flex items-center gap-2">
					<span className="animate-[pulse_2.5s_ease-in-out_infinite_1s]">
						{movement}
					</span>
					<div className={cn('font-medium', isTop3 && 'font-bold tracking-wide **animate-[pulse_2s_ease-in-out_infinite_1s]')}>
						{row.getValue('nombre')}
					</div>
				</div>
			)
		}
	},
	{
		accessorKey: 'puntos',
		header: 'Puntos',
		cell: ({ row }) => <div className='lowercase'>{row.getValue('puntos')}</div>
	}
]