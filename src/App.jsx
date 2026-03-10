import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Paws Clinic - Updated 2026-03-09
// Data - Paws Clinic
const services = [
  { id: 1, name: "Consultas Generales", description: "Chequeos preventivos y diagnóstico", icon: "fas fa-stethoscope", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400" },
  { id: 2, name: "Vacunación", description: "Calendario completo de vacunas", icon: "fas fa-syringe", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400" },
  { id: 3, name: "Cirugías", description: "Procedimientos quirúrgicos seguros", icon: "fas fa-cut", image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400" },
  { id: 4, name: "Nutrición", description: "Asesoría alimentaria especializada", icon: "fas fa-bone", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400" },
  { id: 5, name: "Laboratorio", description: "Análisis clínicos inmediatos", icon: "fas fa-microscope", image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400" },
  { id: 6, name: "Emergencias 24/7", description: "Atención inmediata", icon: "fas fa-truck-medical", image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400" }
]

const features = [
  { icon: "fas fa-user-md", title: "Veterinarios Certificados", desc: "Equipo experimentado" },
  { icon: "fas fa-clock", title: "Abierto 24/7", desc: "Siempre disponibles" },
  { icon: "fas fa-heart-pulse", title: "Equipo Moderno", desc: "Tecnología de punta" }
]

function App() {
  useEffect(() => {
    gsap.from('.hero-content > *', { duration: 1, y: 40, opacity: 0, stagger: 0.15, ease: 'power3.out' })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: '#f0fdf4', minHeight: '100vh', color: '#0f172a', fontFamily: 'Quicksand, sans-serif' }}>
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '15px 0', background: 'rgba(240,253,244,0.97)', backdropFilter: 'blur(20px)', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Nunito, sans-serif' }}>
            <i className="fas fa-paw" style={{ color: '#22c55e' }}></i> Paws <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clinic</span>
          </a>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <a href="#servicios" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>Servicios</a>
            <a href="#contacto" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white', padding: '10px 22px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700 }}>Emergencias</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0', background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div style={{ maxWidth: '500px' }}>
            <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', border: '2px solid #22c55e', padding: '8px 16px', borderRadius: '50px', color: '#22c55e', fontSize: '12px', fontWeight: 700, marginBottom: '18px' }}>
              <i className="fas fa-heart"></i> Cuidado Excepcional
            </div>
            <h1 className="fade-up" style={{ fontSize: 'clamp(36px, 7vw, 62px)', lineHeight: 1.15, marginBottom: '18px', fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
              Tu Mascota<br/>
              <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Es Familia</span>
            </h1>
            <p className="fade-up" style={{ fontSize: '17px', color: '#6b7280', marginBottom: '30px' }}>Veterinaria con amor y profesionalismo.</p>
            <div className="fade-up" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#contacto" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-calendar-check"></i> Agendar
              </a>
              <a href="#servicios" style={{ border: '2px solid #0f172a', color: '#0f172a', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700 }}>Servicios</a>
            </div>
          </div>
          <div style={{ position: 'absolute', right: '5%', width: '45%', maxWidth: '450px' }} className="fade-up">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600" alt="Veterinaria" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }} />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <h2 className="fade-up" style={{ fontSize: 'clamp(28px, 5vw, 42px)', marginBottom: '12px', fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
            Nuestros <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Servicios</span>
          </h2>
          <p className="fade-up" style={{ color: '#6b7280', fontSize: '16px', marginBottom: '45px' }}>Todo para la salud de tu mascota</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '25px' }}>
            {services.map((s, i) => (
              <div key={s.id} className="fade-up" style={{ padding: '30px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', transition: 'all 0.4s', animationDelay: `${i * 0.1}s` }}>
                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, rgba(34,197,94,0.15,197,94,0.05), rgba(34))', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#22c55e', marginBottom: '18px' }}>
                  <i className={s.icon}></i>
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>{s.name}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', padding: '40px 0' }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#22c55e', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
                  <i className={f.icon}></i>
                </div>
                <div>
                  <strong style={{ display: 'block' }}>{f.title}</strong>
                  <p style={{ fontSize: '13px', color: '#6b7280' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <h2 className="fade-up" style={{ fontSize: '42px', marginBottom: '15px', fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>¿Tu Mascota te Necesita?</h2>
          <p className="fade-up" style={{ fontSize: '17px', opacity: 0.9, marginBottom: '30px' }}>Agenda tu cita ahora</p>
          <a href="#" className="fade-up" style={{ background: 'white', color: '#22c55e', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-calendar-check"></i> Agendar Cita
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: 'white', padding: '60px 0 25px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '35px' }}>
            <div>
              <a href="#" style={{ fontSize: '24px', fontWeight: 800, color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Nunito, sans-serif' }}>
                <i className="fas fa-paw" style={{ color: '#22c55e' }}></i> Paws <span style={{ color: '#22c55e' }}>Clinic</span>
              </a>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: '15px 0', fontSize: '14px' }}>Cuidamos a tu mejor amigo.</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><i className="fab fa-instagram"></i></a>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><i className="fab fa-facebook-f"></i></a>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', marginBottom: '18px' }}>Servicios</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Consultas</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Cirugías</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Vacunas</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', marginBottom: '18px' }}>Horario</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Lun - Dom: 24 horas</li>
                <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Emergencias</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', marginBottom: '18px' }}>Contacto</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}><i className="fas fa-map-marker-alt"></i> Guayaquil</li>
                <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}><i className="fas fa-phone"></i> +593 99 999 9999</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '35px' }}>© 2026 Paws Clinic. Todos los derechos reservados.</div>
        </div>
      </footer>

      <style>{`
        .fade-up { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 992px) { .hero-image { display: none; } }
      `}</style>
    </div>
  )
}

export default App
