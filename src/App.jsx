import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ReceiptUpload from "./components/ReceiptUpload";

function App() {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => setExpenses([...expenses, expense]);
    const deleteExpense = (index) =>
        setExpenses(expenses.filter((_, i) => i !== index));

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">📊 Expense Tracker</h1>
            <ExpenseForm onAdd={addExpense} />
            <ReceiptUpload onExtract={addExpense} />
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
    );
}

export default App;
