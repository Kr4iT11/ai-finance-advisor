import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useState } from "react";
import API from "../services/api";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await API.post('register/', formData);
            alert('Registration successful! You can now log in.');
            navigate('/login');
        }
        catch (error) {
            alert('Registration failed. Please try again.');
            console.error(error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextInput label="Username" name="username" value={formData.username} onChange={handleChange} />
                <TextInput label="Email" name="email" value={formData.email} onChange={handleChange} />
                <TextInput label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
                <Button text="Register" type="submit" />
            </form>
        </div>
    );
};


export default Register;