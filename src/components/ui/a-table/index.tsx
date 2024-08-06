interface ATableProps<T> {
	columns: {
		title: string
	}[],
	rows: T[]
	renderRow(item: T, index: number): React.ReactNode
	withOperations?: boolean
}
export function ATable<T>(props: ATableProps<T>) {
	// Props
	const { columns, rows, renderRow, withOperations } = props

	return (
		<div className="w-full grid">
			<table className="border-collapse">
				<thead className="border-b border-b-black-main/20">
					<tr>
						{columns.map((column, index) => (
							<th key={`column-${index}`} className="h-10 text-xs text-right px-3 text-black-main/40 font-normal">{column.title}</th>
						))}
						{withOperations && <th></th>}
					</tr>

				</thead>
				<tbody>
					{rows.map((row, index) => renderRow(row, index))}
				</tbody>
			</table>
		</div>
	)
}
interface ATableRowProps {
	children: React.ReactNode
}
export function ATableRow(props: ATableRowProps) {
	// Props
	const { children } = props

	return (
		<tr className="group [&:hover+tr]:border-t-white [&:not(:first-child)]:border-t border-t-black-main/5 hover:border-t-white">
			{children}
		</tr>
	)
}
interface ATableCellProps {
	children: React.ReactNode
}
export function ATableCell(props: ATableCellProps) {
	// Props
	const { children } = props

	return (
		<td className="px-3 py-1 h-10 transition-all duration-300 text-xs first:rounded-r-lg last:rounded-l-lg group-hover:bg-[#F7F9FB]">
			{children}
		</td>
	)
}