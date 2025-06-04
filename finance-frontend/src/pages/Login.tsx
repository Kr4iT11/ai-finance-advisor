import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import API, { setAuthToken } from "../services/api";
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await API.post<{ access: string }>('token/', formData);
            const token = res.data.access;
            localStorage.setItem('token', token);
            setAuthToken(token);
            alert('Login successful!');
            // navigate('/dashboard'); // Redirect to dashboard after successful login
        } catch (error) {
            alert('Login failed. Please check your credentials.');
            console.log(error);
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <TextInput label="Username" name="username" value={formData.username} onChange={handleChange} />
                <TextInput label="Password" name="password" value={formData.password} onChange={handleChange} type="password" />
                <Button text="Login" type="submit" />
            </form>
            <p>
                Don’t have an account? <Link to="/register">Sign up here</Link>
            </p>
        </div>
    )
}


export default Login;