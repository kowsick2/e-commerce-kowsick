import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import AppRoutes from './components/auth/AppRoutes.jsx'
import ProductDetails from './components/ProductDetails.jsx';

const App = () => {
  return <AppRoutes />
};

export default App
