import { Link } from 'react-router-dom';
import { Home, BedDouble, MapPin, CalendarCheck } from 'lucide-react';
export default function MobileBottomMenu(){return <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t shadow-lg grid grid-cols-4 text-[10px] text-[#062f4d]">
 <Link to="/" className="py-2 flex flex-col items-center"><Home size={19}/>Home</Link><Link to="/accommodation" className="py-2 flex flex-col items-center"><BedDouble size={19}/>Rooms</Link><Link to="/explore-contact" className="py-2 flex flex-col items-center"><MapPin size={19}/>Explore</Link><Link to="/accommodation#availability" className="py-2 flex flex-col items-center bg-[#b88b3f] text-white"><CalendarCheck size={19}/>Book</Link>
</div>}
