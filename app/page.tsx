"use client";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const [room, setRoom] = useState("");

  const book = (name:string) => {
    setRoom(name);
    setShow(true);
  }

  return (
    <main style={{background:'#000', color:'#fff', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px', borderBottom:'1px solid #333', position:'sticky', top:0, background:'#000', zIndex:20}}>
        <h1 style={{letterSpacing:'3px', fontWeight:'bold'}}>MARYLAND <span style={{color:'#ca8a04'}}>HOTEL</span></h1>
        <button onClick={()=>book("")} style={{background:'#ca8a04', color:'#000', padding:'10px 25px', fontWeight:'bold', border:'none', cursor:'pointer'}}>BOOK NOW</button>
      </nav>

      <div style={{textAlign:'center', padding:'80px 20px', backgroundImage:"url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')", backgroundSize:'cover', position:'relative'}}>
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.7)'}}></div>
        <div style={{position:'relative'}}>
          <p style={{color:'#ca8a04', letterSpacing:'6px'}}>LUXURY REDEFINED</p>
          <h2 style={{fontSize:'60px', margin:'20px 0'}}>Grandeur Meets<br/>Comfort</h2>
          <p style={{color:'#ccc', maxWidth:'600px', margin:'0 auto 30px'}}>Experience world-class hospitality in the heart of Port Harcourt.</p>
          <a href="#rooms" style={{border:'1px solid #ca8a04', padding:'12px 35px', color:'#fff', textDecoration:'none', marginRight:'10px'}}>EXPLORE ROOMS</a>
          <button onClick={()=>book("")} style={{background:'#ca8a04', padding:'12px 35px', border:'none', fontWeight:'bold', cursor:'pointer'}}>BOOK NOW</button>
        </div>
      </div>

      <div id="rooms" style={{padding:'60px 20px'}}>
        <h3 style={{textAlign:'center', fontSize:'35px', marginBottom:'30px'}}>Our Luxury Rooms</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px'}}>
          <div style={{border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800" style={{width:'100%', height:'220px', objectFit:'cover'}}/><div style={{padding:'15px'}}><h4>Deluxe Classic</h4><p style={{color:'#ca8a04'}}>₦45,000 / night</p><button onClick={()=>book("Deluxe Classic")} style={{width:'100%', marginTop:'10px', padding:'12px', background:'#fff', color:'#000', fontWeight:'bold', border:'none', cursor:'pointer'}}>BOOK NOW</button></div></div>
          <div style={{border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800" style={{width:'100%', height:'220px', objectFit:'cover'}}/><div style={{padding:'15px'}}><h4>Executive Suite</h4><p style={{color:'#ca8a04'}}>₦75,000 / night</p><button onClick={()=>book("Executive Suite")} style={{width:'100%', marginTop:'10px', padding:'12px', background:'#fff', color:'#000', fontWeight:'bold', border:'none', cursor:'pointer'}}>BOOK NOW</button></div></div>
          <div style={{border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800" style={{width:'100%', height:'220px', objectFit:'cover'}}/><div style={{padding:'15px'}}><h4>Presidential Suite</h4><p style={{color:'#ca8a04'}}>₦150,000 / night</p><button onClick={()=>book("Presidential Suite")} style={{width:'100%', marginTop:'10px', padding:'12px', background:'#fff', color:'#000', fontWeight:'bold', border:'none', cursor:'pointer'}}>BOOK NOW</button></div></div>
        </div>
      </div>

      <div style={{padding:'60px 20px', background:'#0a0a0a'}}>
        <h3 style={{textAlign:'center', fontSize:'35px', marginBottom:'30px'}}>Exquisite Dining</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'15px'}}>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p>Jollof Special</p><p style={{color:'#ca8a04'}}>₦6,500</p></div>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p>Grilled Fish</p><p style={{color:'#ca8a04'}}>₦8,000</p></div>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p>Chicken Burger</p><p style={{color:'#ca8a04'}}>₦5,500</p></div>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1533089860892-a7c6f10a081a?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p>Breakfast</p><p style={{color:'#ca8a04'}}>₦4,500</p></div>
        </div>
      </div>

      {show && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.9)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:99, padding:'20px'}}>
          <div style={{background:'#111', border:'1px solid #444', padding:'25px', maxWidth:'400px', width:'100%'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}><h3>Book {room}</h3><button onClick={()=>setShow(false)} style={{background:'none', border:'1px solid #444', color:'#fff', cursor:'pointer', padding:'5px 10px'}}>X</button></div>
            <input placeholder="Your Name" style={{width:'100%', padding:'12px', marginTop:'20px', background:'#000', border:'1px solid #333', color:'#fff'}}/>
            <input placeholder="WhatsApp Number" style={{width:'100%', padding:'12px', marginTop:'10px', background:'#000', border:'1px solid #333', color:'#fff'}}/>
            <input type="date" style={{width:'100%', padding:'12px', marginTop:'10px', background:'#000', border:'1px solid #333', color:'#fff'}}/>
            <button onClick={()=>{alert('Booking sent! We will contact you on WhatsApp'); setShow(false)}} style={{width:'100%', marginTop:'15px', padding:'14px', background:'#ca8a04', fontWeight:'bold', border:'none', cursor:'pointer'}}>CONFIRM BOOKING</button>
          </div>
        </div>
      )}

      <footer style={{textAlign:'center', padding:'30px', borderTop:'1px solid #222', color:'#777'}}>© 2026 Maryland Hotel, Port Harcourt</footer>
    </main>
  )
}
