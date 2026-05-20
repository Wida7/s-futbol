import { cn } from '@/lib/utils'
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'

export const columns: ColumnDef<any>[] = [
{
	accessorKey: 'posicion',
	header: 'Posición',
	enableSorting: true,
	cell: ({ row }) => {
		const posicion = Number(row.getValue('posicion'))

		const styles = {
			1: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
			2: 'bg-slate-400/15 text-slate-300 border-slate-400/30',
			3: 'bg-orange-600/15 text-orange-400 border-orange-600/30',
		}[posicion]

		if (![1, 2, 3].includes(posicion)) {
			return (
				<div className="text-center font-semibold text-muted-foreground">
					{posicion}
				</div>
			)
		}

		const medals = {
			1: '🥇',
			2: '🥈',
			3: '🥉',
		}[posicion]

		return (
			<Badge
				variant="outline"
				className={cn(
					'border font-bold px-2 py-0.5',
					styles
				)}
			>
				{medals} {posicion}
			</Badge>
		)
	},
},
	{
		accessorKey: 'nombre',
		header: 'Nombres',
		cell: ({ row }) => <div className='font-medium'>{row.getValue('nombre')}</div>
	},
	{
		accessorKey: 'puntos',
		header: 'Puntos',
		cell: ({ row }) => <div className='lowercase'>{row.getValue('puntos')}</div>
	}
]