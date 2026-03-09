import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Scroll animations hook
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])

// Data
const services = [
  {
    id: 1,
    name: "Medicina Preventiva",
    description: "Vacunación, desparasitación y chequeos regulares",
    icon: "💉",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80"
  },
  {
    id: 2,
    name: "Cirugía General",
    description: "Procedimientos quirúrgicos con tecnología de punta",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
  },
  {
    id: 3,
    name: "Odontología",
    description: "Limpieza dental y tratamientos bucales",
    icon: "🦷",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80"
  },
  {
    id: 4,
    name: "Emergencias 24/7",
    description: "Atención inmediata para tu mascota",
    icon: "🚨",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80"
  }
]

const team = [
  {
    id: 1,
    name: "Dra. Carolina Vega",
    specialty: "Medicina Interna",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
  },
  {
    id: 2,
    name: "Dr. Marco Hernández",
    specialty: "Cirugía Veterinaria",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
  },
  {
    id: 3,
    name: "Dra. Ana Lucía Soto",
    specialty: "Odontología",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
  }
]

const testimonials = [
  {
    id: 1,
    text: "El mejor cuidado que mi golden ha recibido. Equipo humano excepcional.",
    author: "Roberto M.",
    pet: "Thor, Golden Retriever"
  },
  {
    id: 2,
    text: "Mi gato estaba muy nervioso, pero el trato fue increíblemente gentil.",
    author: "Sofia R.",
    pet: "Luna, Gato Persa"
  },
  {
    id: 3,
    text: "Gracias por salvar a mi bulldog. Son familia para nosotros ahora.",
    author: "Carlos D.",
    pet: "Rocky, Bulldog Inglés"
  }
]

const plans = [
  {
    id: 1,
    name: "Básico",
    price: "$29",
    period: "/mes",
    features: ["Chequeo anual", "Vacunas incluidas", "Descuento 10% en medicamentos"],
    popular: false
  },
  {
    id: 2,
    name: "Plus",
    price: "$49",
    period: "/mes",
    features: ["Chequeos semestrales", "Vacunas + desparasitación", "Descuento 20% en procedimientos", "Emergencias prioritarias"],
    popular: true
  },
  {
    id: 3,
    name: "Premium",
    price: "$79",
    period: "/mes",
    features: ["Chequeos trimestrales", "Plan completo de vacunación", "Descuento 30% en todo", "Emergencias 24/7", "Análisis de laboratorio incluidos"],
    popular: false
  }
]

const pets = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&q=80",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&q=80",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300&q=80",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&q=80",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=300&q=80",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&q=80"
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-teal-50 text-slate-800 min-h-screen">
      {/* Floating Appointment Button */}
      <a 
        href="#contacto"
        className="fixed bottom-8 right-8 z-50 bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 animate-bounce-gentle"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Agendar Cita
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-4xl">🐾</span>
            <span className="font-display text-2xl font-bold text-teal-700">PAWS CLINIC</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="hover:text-teal-600 transition-colors">Servicios</a>
            <a href="#equipo" className="hover:text-teal-600 transition-colors">Equipo</a>
            <a href="#membresías" className="hover:text-teal-600 transition-colors">Membresías</a>
            <a href="#contacto" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition-all">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with blob effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-coral-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-semibold tracking-widest text-sm mb-4 animate-fadeUp">CUIDADO VETERINARIO EXCEPCIONAL</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
              Donde cada mascota<br/>
              <span className="text-teal-600">es familia</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              Brindamos atención médica de primer nivel con amor y dedicación. 
              Tu compañero peludo merece lo mejor.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
              <a href="#contacto" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
                Agendar Cita
              </a>
              <a href="#servicios" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-full font-bold transition-all">
                Ver Servicios
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
              alt="Happy dog"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="text-3xl">✅</div>
                <div>
                  <p className="font-bold text-sm">5000+</p>
                  <p className="text-xs text-slate-500">Mascotas felices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-600 tracking-[0.3em] text-sm font-semibold mb-4">NUESTROS SERVICIOS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800">Cuidado integral</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Image Gallery */}
      <section className="py-20 bg-teal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            {services.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-[300px] group relative overflow-hidden rounded-2xl hover-scale">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <h3 className="font-display text-xl font-bold text-white">{service.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="py-32 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-600 tracking-[0.3em] text-sm font-semibold mb-4">NUESTRO EQUIPO</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800">Profesionales con amor</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="bg-white text-teal-700 px-6 py-2 rounded-full font-semibold">
                      {member.specialty}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold">{member.name}</h3>
                  <p className="text-teal-600 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membresías" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-600 tracking-[0.3em] text-sm font-semibold mb-4">MEMBRESÍAS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800">Planes para tu bolsillo</h2>
            <p className="text-slate-600 mt-4">Elige el plan ideal para el cuidado de tu mascota</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.popular ? 'bg-teal-500 text-white shadow-2xl scale-105' : 'bg-teal-50 hover:shadow-xl'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                    Más popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-teal-100' : 'text-slate-500'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold transition-all hover:scale-105 ${plan.popular ? 'bg-white text-teal-600 hover:bg-teal-50' : 'bg-teal-500 text-white hover:bg-teal-600'}`}>
                  Elegir Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-teal-300 tracking-[0.3em] text-sm font-semibold mb-8">TESTIMONIOS</p>
          
          <div className="grid gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <p className="font-display text-xl md:text-2xl italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-teal-300 text-sm">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...pets, ...pets].map((pet, i) => (
            <div key={i} className="flex-shrink-0 w-[250px] h-[250px] mx-2 relative group overflow-hidden rounded-2xl">
              <img 
                src={pet} 
                alt={`Pet ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">❤️</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-32 bg-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-6">Agenda tu cita</h2>
          <p className="text-slate-600 mb-12">Tu mascota te agradecerá</p>
          
          <form className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Tu nombre"
                className="w-full bg-teal-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input 
                type="tel" 
                placeholder="Tu teléfono"
                className="w-full bg-teal-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Nombre de tu mascota"
                className="w-full bg-teal-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <select className="w-full bg-teal-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-teal-500 outline-none">
                <option>Tipo de mascota</option>
                <option>Perro</option>
                <option>Gato</option>
                <option>Otro</option>
              </select>
            </div>
            <textarea 
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              className="w-full bg-teal-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-teal-500 outline-none mb-6"
            ></textarea>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02]">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🐾</span>
                <span className="font-display text-xl font-bold">PAWS CLINIC</span>
              </div>
              <p className="text-teal-200 text-sm">Cuidando a tus mejores amigos desde 2015</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-teal-200 text-sm">
                <li>Medicina Preventiva</li>
                <li>Cirugía</li>
                <li>Odontología</li>
                <li>Emergencias 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-teal-200 text-sm">
                <li>📍 Av. Principal 123</li>
                <li>📞 +593 99 123 4567</li>
                <li>✉️ hola@pawsclinic.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-800 pt-8 text-center text-teal-400 text-sm">
            <p>© 2026 Paws Clinic. Hecho con ❤️ para tus mascotas</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
