export default function Home() {
  return (
    <main style={{background:'#000', color:'#fff', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px', borderBottom:'1px solid #333'}}>
        <h1 style={{letterSpacing:'3px', fontWeight:'bold'}}>MARYLAND <span style={{color:'#ca8a04'}}>HOTEL</span></h1>
        <a href="#" style={{background:'#ca8a04', color:'#000', padding:'10px 25px', fontWeight:'bold', textDecoration:'none'}}>BOOK NOW</a>
      </nav>

      <div style={{textAlign:'center', padding:'80px 20px', backgroundImage:"url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')", backgroundSize:'cover', backgroundPosition:'center', position:'relative'}}>
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.7)'}}></div>
        <div style={{position:'relative'}}>
          <p style={{color:'#ca8a04', letterSpacing:'6px'}}>LUXURY REDEFINED</p>
          <h2 style={{fontSize:'60px', margin:'20px 0', lineHeight:'1.1'}}>Grandeur Meets<br/>Comfort</h2>
          <p style={{color:'#ccc', maxWidth:'600px', margin:'0 auto 30px'}}>Experience world-class hospitality in the heart of Port Harcourt.</p>
          <a href="#rooms" style={{border:'1px solid #ca8a04', padding:'12px 35px', color:'#fff', textDecoration:'none', letterSpacing:'2px'}}>EXPLORE ROOMS</a>
        </div>
      </div>

      <div id="rooms" style={{padding:'60px 20px'}}>
        <h3 style={{textAlign:'center', fontSize:'35px', marginBottom:'30px'}}>Our Luxury Rooms</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px'}}>
          <div style={{border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800" style={{width:'100%', height:'220px', objectFit:'cover'}}/><div style={{padding:'15px'}}><h4>Deluxe Classic</h4><p style={{color:'#ca8a04', marginTop:'5px'}}>₦45,000 / night</p><button style={{width:'100%', marginTop:'10px', padding:'10px', background:'#fff', color:'#000', fontWeight:'bold', border:'none'}}>BOOK NOW</button></div></div>
          <div style={{border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800" style={{width:'100%', height:'220px', objectFit:'cover'}}/><div style={{padding:'15px'}}><h4>Executive Suite</h4><p style={{color:'#ca8a04', marginTop:'5px'}}>₦75,000 / night</p><button style={{width:'100%', marginTop:'10px', padding:'10px', background:'#fff', color:'#000', fontWeight:'bold', border:'none'}}>BOOK NOW</button></div></div>
          <div style={{border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800" style={{width:'100%', height:'220px', objectFit:'cover'}}/><div style={{padding:'15px'}}><h4>Presidential Suite</h4><p style={{color:'#ca8a04', marginTop:'5px'}}>₦150,000 / night</p><button style={{width:'100%', marginTop:'10px', padding:'10px', background:'#fff', color:'#000', fontWeight:'bold', border:'none'}}>BOOK NOW</button></div></div>
        </div>
      </div>

      <div style={{padding:'60px 20px', background:'#0a0a0a'}}>
        <h3 style={{textAlign:'center', fontSize:'35px', marginBottom:'30px'}}>Exquisite Dining</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'15px'}}>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p style={{marginTop:'10px'}}>Jollof Special</p><p style={{color:'#ca8a04'}}>₦6,500</p></div>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p style={{marginTop:'10px'}}>Grilled Fish</p><p style={{color:'#ca8a04'}}>₦8,000</p></div>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p style={{marginTop:'10px'}}>Chicken Burger</p><p style={{color:'#ca8a04'}}>₦5,500</p></div>
          <div style={{background:'#111', padding:'10px', textAlign:'center', border:'1px solid #222'}}><img src="https://images.unsplash.com/photo-1533089860892-a7c6f10a081a?q=80&w=600" style={{width:'100%', height:'130px', objectFit:'cover'}}/><p style={{marginTop:'10px'}}>Breakfast</p><p style={{color:'#ca8a04'}}>₦4,500</p></div>
        </div>
      </div>

      <footer style={{textAlign:'center', padding:'30px', borderTop:'1px solid #222', color:'#777'}}>
        © 2026 Maryland Hotel, Port Harcourt
      </footer>
    </main>
  )
}
