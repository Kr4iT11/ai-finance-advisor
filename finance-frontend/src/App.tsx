import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  
  return (
    <Router>
      <div className="App">
        <h1>Finance App</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
