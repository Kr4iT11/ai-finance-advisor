import { useState } from "react";
import API from "../../services/api";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

interface Props {
    onSuccess?: () => void; // Callback to call on successful transaction addition
}

const AddTransaction: React.FC<Props> = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        amount: "",
        category: "FOOD",
        date: "",
        description: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log("Submitting transaction:", formData);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-white">Add Transaction</h3>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Amount (₹)</label>
                <TextInput label="Username" name="username" value={formData.amount} onChange={handleChange} className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Category</label>
                <TextInput label="Username" name="username" value={formData.amount} onChange={handleChange} className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Description</label>
                <TextInput label="Username" name="username" value={formData.amount} onChange={handleChange} className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Date</label>
                <TextInput type="date" label="Username" name="date" value={formData.amount} onChange={handleChange} className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white" />
            </div>
            <Button text="Add Transaction" type="submit" />
        </form>
    )
}
export default AddTransaction;