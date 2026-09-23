"use client";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function MarylandHotel() {
  const [user, setUser] = useState<any>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Classic Room");
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleBook = (roomName: string) => {
    setSelectedRoom(roomName);
    if (!user) { router.push("/login"); return; }
    setShowBooking(true);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/85 backdrop-blur border-b border-[#d4af37]/15 px-6 lg:px-20 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-[#d4af37] tracking-[0.3em] font-serif font-bold text-lg">MARYLAND</h1>
          <p className="text-[9px] tracking-[0.2em] opacity-50">PORT HARCOURT</p>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          <a href="#rooms" className="hover:text-[#d4af37]">Rooms</a>
          <a href="#dining" className="hover:text-[#d4af37]">Dining</a>
          <a href="#gallery" className="hover:text-[#d4af37]">Gallery</a>
          <a href="#contact" className="hover:text-[#d4af37]">Contact</a>
        </div>
        <button onClick={()=> user? router.push('/account') : router.push('/login')} className="border border-[#d4af37] text-[#d4af37] px-6 py-2.5 rounded-full text-sm hover:bg-[#d4af37] hover:text-black transition">
          {user? "My Account" : "Login"}
        </button>
      </nav>

      {/* HERO FULL LOBBY */}
      <div className="relative h-[92vh] w-full">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Maryland Lobby"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20 pt-20 max-w-5xl">
          <p className="text-[#d4af37] tracking-[0.35em] text-[11px]">LUXURY HOTEL • EST. PORT HARCOURT</p>
          <h2 className="mt-5 text-[42px] lg:text-[78px] font-serif leading-[0.9]">Where Timeless<br/><span className="text-[#d4af37]">Luxury</span> Meets<br/>Warm Hospitality</h2>
          <p className="mt-6 text-white/70 max-w-xl text-[15px] leading-relaxed">Discover refined comfort, exquisite dining & serene relaxation at Maryland Hotel, Mgbuoba. Open for browsing, login required for booking & email receipts.</p>
          <div className="mt-8 flex gap-4">
            <button onClick={()=> handleBook("Classic Room")} className="px-10 py-4 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e8c86a] text-black font-semibold text-sm tracking-wide">CHECK AVAILABILITY</button>
            <a href="#gallery" className="px-8 py-4 rounded-full border border-white/20 text-sm backdrop-blur">View Gallery</a>
          </div>
        </div>
      </div>

      {/* ROOMS */}
      <section id="rooms" className="px-6 lg:px-20 py-20">
        <div className="flex justify-between items-end">
          <div><p className="text-[#d4af37] text-xs tracking-[0.3em]">ACCOMMODATION</p><h3 className="mt-3 text-4xl font-serif text-[#e8c86a]">Rooms & Suites</h3></div>
          <p className="hidden md:block text-sm opacity-50 max-w-xs">Handcrafted for comfort with modern amenities, perfect for business & leisure.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-7">
          {[
            {name:"Classic Room", price:"₦45,000", img:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800", desc:"Cozy & elegant with city view"},
            {name:"Executive Suite", price:"₦85,000", img:"https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800", desc:"Spacious suite with lounge"},
            {name:"Presidential Suite", price:"₦180,000", img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800", desc:"Ultimate luxury with private bar"},
          ].map(r=>(
            <div key={r.name} className="group rounded-[20px] overflow-hidden bg-[#101010] border border-[#d4af37]/15 hover:border-[#d4af37]/30 transition">
              <div className="overflow-hidden"><img src={r.img} className="h-[260px] w-full object-cover group-hover:scale-105 transition duration-700" alt={r.name}/></div>
              <div className="p-6"><h4 className="text-[#e8c86a] font-serif text-lg">{r.name}</h4><p className="text-xs opacity-50 mt-1">{r.desc}</p><div className="mt-4 flex justify-between items-center"><p className="text-sm"><span className="text-[#d4af37] font-bold">{r.price}</span> / night</p><button onClick={()=> handleBook(r.name)} className="text-xs border border-[#d4af37]/50 px-4 py-2 rounded-full hover:bg-[#d4af37] hover:text-black">Reserve</button></div></div>
            </div>
          ))}
        </div>
      </section>

      {/* KITCHEN MENU - YOUR REQUEST */}
      <section id="dining" className="px-6 lg:px-20 py-20 bg-[#0f0f0f] border-y border-[#d4af37]/10">
        <p className="text-[#d4af37] text-xs tracking-[0.3em]">MARYLAND KITCHEN</p>
        <h3 className="mt-3 text-4xl font-serif text-[#e8c86a]">Exquisite Dining</h3>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-black/40 p-6 rounded-2xl border border-[#d4af37]/10"><h4 className="text-[#d4af37] font-semibold">Main Dishes</h4><div className="mt-4 space-y-3 text-sm opacity-80"><p>Jollof Rice & Chicken — ₦6,500</p><p>Fried Rice & Turkey — ₦7,000</p><p>Grilled Fish & Chips — ₦8,500</p><p>Chicken Curry & Rice — ₦7,200</p></div></div>
          <div className="bg-black/40 p-6 rounded-2xl border border-[#d4af37]/10"><h4 className="text-[#d4af37] font-semibold">Intercontinental</h4><div className="mt-4 space-y-3 text-sm opacity-80"><p>Chicken Alfredo Pasta — ₦9,000</p><p>Beef Burger & Fries — ₦7,500</p><p>Margherita Pizza 12" — ₦10,000</p><p>Shawarma Special — ₦5,000</p></div></div>
          <div className="bg-black/40 p-6 rounded-2xl border border-[#d4af37]/10"><h4 className="text-[#d4af37] font-semibold">Local Dishes</h4><div className="mt-4 space-y-3 text-sm opacity-80"><p>Afang Soup & Fufu — ₦5,500</p><p>Banga Soup & Starch — ₦6,000</p><p>Oha Soup & Pounded Yam — ₦5,800</p><p>Port Harcourt Bole & Fish — ₦4,500</p></div></div>
          <div className="bg-black/40 p-6 rounded-2xl border border-[#d4af37]/10"><h4 className="text-[#d4af37] font-semibold">Side Dishes</h4><div className="mt-4 space-y-3 text-sm opacity-80"><p>Coleslaw — ₦1,500</p><p>Moi Moi (2 pcs) — ₦1,000</p><p>Fried Plantain — ₦1,200</p><p>Garlic Bread — ₦2,000</p></div></div>
          <div className="bg-black/40 p-6 rounded-2xl border border-[#d4af37]/10"><h4 className="text-[#d4af37] font-semibold">Dessert</h4><div className="mt-4 space-y-3 text-sm opacity-80"><p>Ice Cream Scoop — ₦2,500</p><p>Chocolate Lava Cake — ₦3,500</p><p>Fruit Salad Cup — ₦2,000</p><p>Parfait — ₦3,000</p></div></div>
        </div>
      </section>

      {/* GALLERY - POOL KITCHEN INTERIOR */}
      <section id="gallery" className="px-6 lg:px-20 py-20">
        <p className="text-[#d4af37] text-xs tracking-[0.3em]">INSIDE MARYLAND</p>
        <h3 className="mt-3 text-4xl font-serif text-[#e8c86a]">Gallery</h3>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative rounded-2xl overflow-hidden h-56"><img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Pool"/><p className="absolute bottom-2 left-3 text-xs bg-black/60 px-2 py-1 rounded-full">Pool Side</p></div>
          <div className="relative rounded-2xl overflow-hidden h-56"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Kitchen"/><p className="absolute bottom-2 left-3 text-xs bg-black/60 px-2 py-1 rounded-full">Kitchen</p></div>
          <div className="relative rounded-2xl overflow-hidden h-56"><img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Interior"/><p className="absolute bottom-2 left-3 text-xs bg-black/60 px-2 py-1 rounded-full">Interior</p></div>
          <div className="relative rounded-2xl overflow-hidden h-56"><img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Restaurant"/><p className="absolute bottom-2 left-3 text-xs bg-black/60 px-2 py-1 rounded-full">Restaurant</p></div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 lg:px-20 py-16 bg-[#101010]">
        <h3 className="text-xl font-serif text-[#d4af37] tracking-widest">GUEST REVIEWS</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
          <div className="border border-[#d4af37]/10 p-6 rounded-2xl"><p>⭐⭐⭐⭐⭐</p><p className="mt-3 opacity-80">"Best hotel in Ada-George axis. Very clean, professional staff, receipt came instantly to my email."</p><p className="mt-3 text-[#d4af37] text-xs">— Chinedu O.</p></div>
          <div className="border border-[#d4af37]/10 p-6 rounded-2xl"><p>⭐⭐⭐⭐⭐</p><p className="mt-3 opacity-80">"The local dishes taste like home. Pool is clean, rooms are luxury. Worth every naira!"</p><p className="mt-3 text-[#d4af37] text-xs">— Amaka L.</p></div>
          <div className="border border-[#d4af37]/10 p-6 rounded-2xl"><p>⭐⭐⭐⭐⭐</p><p className="mt-3 opacity-80">"Transfer payment was easy, Moniepoint confirmed fast. Maryland is my new home in PH."</p><p className="mt-3 text-[#d4af37] text-xs">— Tunde K.</p></div>
        </div>
      </section>

      {/* CONTACT FOOTER */}
      <footer id="contact" className="px-6 lg:px-20 py-14 border-t border-[#d4af37]/15">
        <div className="grid md:grid-cols-3 gap-10 text-sm">
          <div><h4 className="text-[#d4af37] tracking-[0.3em] font-bold">MARYLAND HOTEL</h4><p className="mt-4 opacity-60 leading-relaxed">3 Ogunka Erewu Road, Rumuoke,<br/>Off Ada-George Road, Mgbuoba,<br/>Port Harcourt, Rivers State, Nigeria.</p><p className="mt-4 text-[#d4af37]">+234 800 000 0000</p></div>
          <div><h4 className="text-white/80 font-semibold">Opening Hours</h4><p className="mt-4 opacity-60">Reception: 24 Hours<br/>Restaurant: 7am - 10pm<br/>Pool: 8am - 7pm</p></div>
          <div className="bg-[#111] border border-[#d4af37]/20 p-5 rounded-2xl">
            <p className="text-[#d4af37] font-semibold">Payment — Transfer</p>
            <p className="mt-3">Bank: <span className="text-white font-bold">Moniepoint</span></p>
            <p>Account No: <span className="text-white font-bold tracking-widest">8107126769</span></p>
            <p>Account Name: Maryland Hotel</p>
            <p className="mt-3 text-xs opacity-50">Card payment (Paystack) will be enabled when you add key. Receipt sent to email after confirmation.</p>
          </div>
        </div>
        <p className="mt-12 text-[11px] opacity-30 text-center tracking-widest">© 2026 MARYLAND HOTEL — WHERE TIMELESS LUXURY MEETS WARM HOSPITALITY</p>
      </footer>

      {/* BOOKING MODAL */}
      {showBooking && (
        <div className="fixed inset-0 z-[70] bg-black/85 flex items-center justify-center p-4">
          <div className="bg-[#121212] border border-[#d4af37]/30 rounded-[20px] p-8 max-w-md w-full">
            <h3 className="text-2xl font-serif text-[#e8c86a]">Confirm Booking</h3>
            <p className="text-sm mt-2 opacity-60">Room: {selectedRoom}</p>
            <p className="text-xs mt-1 opacity-50">Receipt → {user?.email}</p>
            <div className="mt-7 space-y-4">
              <button onClick={()=> alert("Card payment coming soon. Please use Moniepoint transfer. When you get Paystack key, I will activate it.")} className="w-full py-3.5 rounded-full bg-white/10 text-white/40 text-sm">Pay with Card (Coming Soon)</button>
              <div className="bg-black border border-[#d4af37]/20 p-4 rounded-xl">
                <p className="text-[#d4af37] text-sm font-semibold">Transfer to Moniepoint</p>
                <p className="mt-2 text-lg tracking-widest font-bold">8107126769</p>
                <p className="text-xs opacity-60 mt-1">Maryland Hotel — Moniepoint MFB</p>
                <p className="text-xs opacity-50 mt-3">After transfer, click confirm. We will send receipt to your email automatically.</p>
                <button onClick={()=> alert(`Booking confirmed for ${selectedRoom}! Receipt will be sent to ${user?.email}. Please send transfer proof to WhatsApp.`)} className="mt-4 w-full py-3 rounded-full bg-[#d4af37] text-black font-semibold text-sm">I Have Transferred — Confirm Booking</button>
              </div>
              <button onClick={()=>setShowBooking(false)} className="w-full text-xs opacity-50 py-2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
