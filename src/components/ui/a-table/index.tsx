import clsx from "clsx"

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
							<th key={`column-${index}`} className="h-10 text-sm text-right px-3 text-black/40 font-normal">{column.title}</th>
						))}
						{withOperations && <th></th>}
					</tr>

				</thead>
				<tbody>
					{rows.map((row, index) => renderRow(row, index))}
					{rows.length === 0 && (
						<ATableRow isEmptyRow>
							<td colSpan={999} className="h-10 text-black/40 text-sm px-3">نتیجه‌ای یافت نشد.</td>
						</ATableRow>
					)}
				
				</tbody>
			</table>
		</div>
	)
}
interface ATableRowProps {
	children: React.ReactNode
	isEmptyRow?:boolean
}
export function ATableRow(props: ATableRowProps) {
	// Props
	const { children, isEmptyRow=false } = props

	const sharedClasses = "group  [&:not(:first-child)]:border-t last:border-b border-t-black-main/5"
	return (
		<tr className={clsx(sharedClasses, {'[&:hover+tr]:border-t-white hover:border-y-white': !isEmptyRow})}>
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