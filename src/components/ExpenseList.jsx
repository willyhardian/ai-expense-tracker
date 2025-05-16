export default function ExpenseList({ expenses, onDelete }) {
    return (
        <ul className="space-y-2">
            {expenses.map((e, i) => (
                <li
                    key={i}
                    className="border p-2 flex justify-between items-center rounded"
                >
                    <span>
                        {e.name} - Rp{e.price.toFixed(2)}
                    </span>
                    <button
                        onClick={() => onDelete(i)}
                        className="text-red-500 hover:underline"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
