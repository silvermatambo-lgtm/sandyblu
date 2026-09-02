import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomMenu from './components/MobileBottomMenu';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import ExploreContact from './pages/ExploreContact';
export default function App(){return <BrowserRouter><div className="min-h-screen flex flex-col"><Navbar/><main className="flex-1"><Routes><Route path="/" element={<Home/>}/><Route path="/accommodation" element={<Accommodation/>}/><Route path="/explore-contact" element={<ExploreContact/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/></div><FloatingWhatsApp/><MobileBottomMenu/></BrowserRouter>}
