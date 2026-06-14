export function Table({ columns, data, onRowClick, emptyMessage = 'No hay datos' }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-900">
            {columns.map((col, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-zinc-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={row.id || i}
                onClick={() => onRowClick?.(row)}
                className={`bg-zinc-950 hover:bg-zinc-900 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
              >
                {columns.map((col, j) => (
                  <td key={j} className="px-4 py-3 text-zinc-300">
                    {col.accessor ? col.accessor(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
