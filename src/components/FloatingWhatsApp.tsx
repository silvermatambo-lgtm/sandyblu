import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../data';
export default function FloatingWhatsApp(){
 const href=`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent('Hi Sandy-Blu Guest House, I would like to enquire about accommodation and availability.')}`;
 return <a href={href} target="_blank" aria-label="WhatsApp Sandy-Blu" className="fixed right-5 bottom-20 md:bottom-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition"><MessageCircle/></a>
}
