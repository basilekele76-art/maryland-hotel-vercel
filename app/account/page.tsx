"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) { router.push("/"); return; }
      setUser(u);
    });
    return () => unsub();
  }, [router]);

  if (!user) return <div className="min-h-screen bg-black text-[#d4af37] flex items-center justify-center">Loading your stay...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37]">
      {/* Header */}
      <div className="px-8 py-6 flex justify-between items-center border-b border-[#d4af37]/20">
        <h1 className="tracking-[0.2em] font-serif">MARYLAND HOTEL</h1>
        <button onClick={async()=>{await signOut(auth); router.push("/");}} className="border border-[#d4af37] px-5 py-2 rounded-full text-sm hover:bg-[#d4af37] hover:text-black">Logout</button>
      </div>

      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif text-[#e8c86a]">Welcome Back, {user.email?.split('@')[0]}</h2>
        <p className="mt-2 opacity-60">{user.email}</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="border border-[#d4af37]/20 rounded-2xl p-8 bg-[#111]">
            <h3 className="text-lg text-[#e8c86a]">My Reservations</h3>
            <p className="mt-4 text-sm opacity-60">You have no reservations yet.</p>
            <button onClick={()=>router.push("/")} className="mt-6 w-full py-3 rounded-full bg-[#d4af37] text-black font-semibold">Book a Room</button>
          </div>

          <div className="border border-[#d4af37]/20 rounded-2xl p-8 bg-[#111]">
            <h3 className="text-lg text-[#e8c86a]">Profile</h3>
            <p className="mt-4 text-sm">Email: {user.email}</p>
            <p className="text-sm mt-2 opacity-60 italic">"Where timeless luxury meets warm hospitality"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
