import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!name || !price) return;
        onAdd({ name, price: parseFloat(price) });
        setName("");
        setPrice("");
    };

    return (
        <form onSubmit={submit} className="mb-4">
            <input
                className="border p-2 mr-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item name"
            />
            <input
                className="border p-2 mr-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
            >
                Add
            </button>
        </form>
    );
}
