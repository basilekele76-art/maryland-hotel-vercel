"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login");
        return;
      }
      setUser(u);
    });
    return () => unsub();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-[#d4af37] flex items-center justify-center">
        Loading your stay...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="px-6 lg:px-20 py-6 flex justify-between items-center border-b border-[#d4af37]/15">
        <h1 className="text-[#d4af37] tracking-[0.3em] font-serif font-bold">MARYLAND</h1>
        <button onClick={handleLogout} className="border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-full text-sm hover:bg-[#d4af37] hover:text-black transition">
          Logout
        </button>
      </div>

      <div className="px-6 lg:px-20 py-12 max-w-6xl">
        <h2 className="text-4xl font-serif text-[#e8c86a]">Welcome, {user.email? user.email.split("@")[0] : "Guest"}</h2>
        <p className="mt-2 text-white/50">{user.email}</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border border-[#d4af37]/15 rounded-[20px] p-8 bg-[#101010]">
            <h3 className="text-[#d4af37] tracking-widest text-sm">MY RESERVATIONS</h3>
            <div className="mt-8 border-dashed border border-[#d4af37]/20 rounded-xl p-10 text-center">
              <p className="opacity-50">No reservations yet</p>
              <button onClick={()=> router.push("/")} className="mt-5 px-8 py-3 rounded-full bg-[#d4af37] text-black font-semibold text-sm">
                Book Your First Stay
              </button>
            </div>
            <p className="mt-6 text-xs opacity-40">After transfer to Moniepoint 8107126769, receipt will be sent to {user.email}</p>
          </div>

          <div className="border border-[#d4af37]/15 rounded-[20px] p-8 bg-[#101010]">
            <h3 className="text-[#d4af37] text-sm tracking-widest">PROFILE</h3>
            <div className="mt-6 w-14 h-14 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e8c86a] flex items-center justify-center text-black font-bold text-lg">
              {user.email? user.email[0].toUpperCase() : "M"}
            </div>
            <p className="mt-4 text-sm">{user.email}</p>
            <p className="mt-2 text-xs opacity-50">Member since 2026</p>
            <div className="mt-6 pt-6 border-t border-[#d4af37]/10 text-xs opacity-60">
              <p>3 Ogunka Erewu Road, Rumuoke,</p>
              <p>Off Ada-George Road, Mgbuoba, Port Harcourt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
