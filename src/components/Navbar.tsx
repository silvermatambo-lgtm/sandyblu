import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar(){
 const [open,setOpen]=useState(false);
 const cls=({isActive}:{isActive:boolean})=>`text-sm font-semibold tracking-wide ${isActive?'text-[#0b3558] border-b-2 border-[#b88b3f]':'text-slate-700 hover:text-[#0b3558]'}`;
 return <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
  <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
   <Link to="/" className="flex items-center gap-3"><img src="/images/logo.jpg" alt="Sandy-Blu Guest House" className="h-16 w-auto object-contain"/></Link>
   <nav className="hidden md:flex items-center gap-9"><NavLink to="/" className={cls}>HOME</NavLink><NavLink to="/accommodation" className={cls}>ACCOMMODATION</NavLink><NavLink to="/explore-contact" className={cls}>EXPLORE & CONTACT</NavLink><Link to="/accommodation#availability" className="bg-[#b88b3f] text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-[#9d7431]">BOOK NOW</Link></nav>
   <button className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="md:hidden bg-white px-5 pb-5 flex flex-col gap-4"><Link onClick={()=>setOpen(false)} to="/">HOME</Link><Link onClick={()=>setOpen(false)} to="/accommodation">ACCOMMODATION</Link><Link onClick={()=>setOpen(false)} to="/explore-contact">EXPLORE & CONTACT</Link><Link onClick={()=>setOpen(false)} to="/accommodation#availability" className="bg-[#b88b3f] text-white px-5 py-3 rounded-md text-center font-bold">BOOK NOW</Link></div>}
 </header>
}
