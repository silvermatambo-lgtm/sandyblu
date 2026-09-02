import { Link } from 'react-router-dom';
export default function Footer(){return <footer className="bg-[#062f4d] text-white mt-auto">
 <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
  <div className="flex items-center gap-4"><img src="/images/logo.jpg" className="h-14 rounded-full bg-white p-1"/><div><div className="font-serif text-xl">Sandy-Blu</div><div className="text-xs tracking-[.25em]">GUEST HOUSE</div></div></div>
  <div className="text-sm text-white/75 text-center">© 2026 Sandy-Blu Guest House. All Rights Reserved.<br/><span className="text-xs">Designed by <a href="https://www.webdevpro.co.za" target="_blank" className="text-[#d8ae66]">WebDevPro</a></span></div>
  <div className="text-sm flex gap-5"><Link to="/explore-contact">Privacy Policy</Link><Link to="/explore-contact">Terms & Conditions</Link></div>
 </div>
</footer>}
