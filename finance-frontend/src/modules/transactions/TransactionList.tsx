import React, { use } from "react";
import { useEffect, useState } from "react";
import API from "../../services/api";

interface Transaction {
    id: number;
    amount: number;
    category: string;
    date: string;
    description: string;
}

const TransactionList: React.FC = () => {
    const [transactions, setTransactions] = React.useState<Transaction[]>([]); // ✅ fixed typo

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await API.get<Transaction[]>('transactions/');
                setTransactions(response.data);
            } catch (error) {
                console.error("Failed to fetch transactions:", error);
                alert('Failed to load transactions');
            }
        };

        fetchTransactions();
    }, []);
    if (!transactions.length) {
        return (
            <div className="text-center text-gray-400 mt-4">
                No transactions found. Try adding some.
            </div>
        );
    }
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Your Transactions</h3>
            <ul className="space-y-3">
                {transactions.map((transaction) => (
                    <li key={transaction.id} className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="text-lg font-medium text-white">{transaction.description}</h4>
                                <p className="text-sm text-gray-400">{new Date(transaction.date).toLocaleDateString()}</p>
                            </div>
                            <span className={`text-lg font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {transaction.amount.toFixed(2)} €
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Category: {transaction.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

export default TransactionList;