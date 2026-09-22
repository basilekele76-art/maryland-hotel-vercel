"use client";
import { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);
  return (
    <div style={{background:"black", color:"white", minHeight:"100vh", padding:"50px", textAlign:"center"}}>
      <h1 style={{color:"#FFD700", fontSize:"40px"}}>DE PLANET HOTEL</h1>
      <p style={{margin:"20px 0"}}>Luxury Black & Gold Hotel</p>
      
      <button 
        onClick={() => setShow(true)}
        style={{background:"#FFD700", color:"black", padding:"15px 30px", border:"none", fontWeight:"bold", cursor:"pointer", borderRadius:"5px"}}
      >
        BOOK NOW - CLICK ME
      </button>

      {show && (
        <div style={{position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.8)", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <div style={{background:"white", color:"black", padding:"30px", borderRadius:"10px"}}>
            <h2>Booking Works! ✅</h2>
            <p>Your button is now interactive.</p>
            <button onClick={() => setShow(false)} style={{marginTop:"15px", padding:"10px 20px"}}>Close</button>
            <br/><br/>
            <a href="https://wa.me/2340000000000" style={{background:"green", color:"white", padding:"10px 20px", textDecoration:"none", borderRadius:"5px"}}>Go to WhatsApp</a>
          </div>
        </div>
      )}
    </div>
  )
}
