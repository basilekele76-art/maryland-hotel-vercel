"use client";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const router = useRouter();

  const loginEmail = async () => {
    try { await signInWithEmailAndPassword(auth, email, password); router.push("/"); }
    catch(e:any){ alert(e.message); }
  };
  const loginGoogle = async () => {
    try { await signInWithPopup(auth, googleProvider); router.push("/"); }
    catch(e:any){ alert(e.message); }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0a0a0a]">
      {/* LEFT - FORM */}
      <div className="w-full lg:w-[52%] px-8 lg:px-20 py-10 flex flex-col justify-center bg-[#0a0a0a] text-[#d4af37]">
        <div className="max-w-[480px]">
          <div className="mb-6">
            <h1 className="text-2xl tracking-[0.2em] font-serif">MARYLAND HOTEL</h1>
            <p className="text-[11px] tracking-[0.3em] opacity-60 mt-1">EST. 1987</p>
          </div>

          <p className="italic text-[#e8c86a] text-[18px] mb-8">“Where timeless luxury meets warm hospitality”,</p>

          <h2 className="text-[42px] font-serif leading-none text-[#e8c86a]">Welcome Back</h2>
          <p className="mt-3 text-[#d4af37]/80">Log in to your account to manage reservations, explore stays, and enjoy exclusive benefits.</p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="text-sm">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" className="w-full mt-2 px-4 py-3.5 rounded-lg bg-transparent border border-[#d4af37]/60 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]" />
            </div>
            <div>
              <label className="text-sm">Password</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" className="w-full mt-2 px-4 py-3.5 rounded-lg bg-transparent border border-[#d4af37]/60 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]" />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} className="w-4 h-4 accent-[#d4af37]" />
                Remember me
              </label>
              <button className="text-sm hover:underline">Forgot password?</button>
            </div>

            <button onClick={loginEmail} className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e8c86a] text-black font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition">Continue</button>

            <div className="flex items-center justify-center gap-3 text-sm opacity-60 my-2"><span>or</span></div>

            <div className="grid grid-cols-3 gap-3">
              <button onClick={loginGoogle} className="py-3 rounded-xl border border-[#d4af37]/50 flex justify-center items-center gap-2 hover:bg-[#d4af37]/10 transition"><img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" /> Google</button>
              <button className="py-3 rounded-xl border border-[#d4af37]/50 flex justify-center items-center gap-2 hover:bg-[#d4af37]/10 transition"> Apple</button>
              <button onClick={()=>window.open('https://wa.me/2340000000000','_blank')} className="py-3 rounded-xl border border-[#d4af37]/50 flex justify-center items-center gap-2 hover:bg-[#d4af37]/10 transition"><span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]">W</span> WhatsApp</button>
            </div>

            <p className="text-[11px] opacity-60 mt-6 leading-relaxed">By continuing, you agree to Maryland Hotel's <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy.</span></p>
          </div>
        </div>
      </div>

      {/* RIGHT - LOBBY IMAGE */}
      <div className="hidden lg:block w-[48%] relative">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200" alt="Maryland Hotel Lobby" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}
