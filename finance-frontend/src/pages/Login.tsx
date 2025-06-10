import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post<{ access: string }>('token/', formData);
      login(res.data.access);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput label="Username" name="username" value={formData.username} onChange={handleChange} />
        <TextInput label="Password" name="password" value={formData.password} onChange={handleChange} type="password" />
        <Button text="Login" type="submit" />
      </form>
      <p className="mt-4 text-center">
        Don’t have an account? <Link to="/register">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;

