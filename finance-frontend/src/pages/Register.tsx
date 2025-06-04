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
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <TextInput label="Username" name="username" value={formData.username} onChange={handleChange} />
                <TextInput label="Email" name="email" value={formData.email} onChange={handleChange} />
                <TextInput label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
                <Button text="Register" type="submit" />
            </form>
        </div>
    );
};


export default Register;