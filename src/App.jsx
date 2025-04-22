import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Fibonacci from './pages/Fibonacci';
import Navbar from './components/Navbar';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/fibonacci" 
          element={isAuthenticated ? <Fibonacci /> : <Login />} 
        />
      </Routes>
    </>
  );
}

export default App;
