import React, { useState, useEffect } from 'react';

const Dacky = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
      
      // Animación de scroll para elementos
      const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
      animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
        
        if (isVisible) {
          el.classList.add('animate-visible');
        } else {
          el.classList.remove('animate-visible');
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: '#1F1250', color: '#FFFBF4' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&family=Imprima&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .fade-in {
          animation: fadeIn 1s ease-in;
        }

        .slide-up {
          animation: slideUp 0.8s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 251, 244, 0.1);
        }

        .btn-download {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-download:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .service-card {
          transition: all 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 35px rgba(255, 251, 244, 0.15);
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background-color: #FFFBF4;
          color: #11120D;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
        }

        .scroll-top-btn.visible {
          opacity: 1;
          visibility: visible;
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(255, 251, 244, 0.4);
          background-color: #565449;
          color: #FFFBF4;
        }

        /* Animaciones de scroll */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate-left.animate-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-animate-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate-right.animate-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-animate-scale {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate-scale.animate-visible {
          opacity: 1;
          transform: scale(1);
        }

        /* Responsive para imágenes */
        @media (max-width: 768px) {
          img[alt="Google Play"],
          img[alt="App Store"] {
            height: clamp(35px, 8vw, 50px) !important;
          }
          
          .scroll-top-btn {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          img[alt="Dacky App"] {
            width: 70% !important;
            max-width: 350px !important;
          }

          section[style*="1.jpg"] {
            background-size: cover !important;
            background-position: center center !important;
          }
        }

        @media (max-width: 480px) {
          img[alt="Google Play"],
          img[alt="App Store"] {
            height: clamp(30px, 7vw, 40px) !important;
          }

          img[alt="Dacky App"] {
            width: 85% !important;
            max-width: 280px !important;
          }

          section[style*="1.jpg"] {
            background-size: contain !important;
            background-position: top center !important;
            padding: 1rem !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, #5634A3 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
        
        <div className="fade-in" style={{
          textAlign: 'center',
          zIndex: 1
        }}>
          {/* Reemplaza esta imagen con tu logo */}
          
          
          <h1 className="scroll-animate" style={{
            fontSize: 'clamp(1.5rem, 8vw, 6rem)',
            fontWeight: '100',
            letterSpacing: '0.2em',
            marginBottom: '0rem',
          }}>
            GENERAL CANINO
          </h1>
        </div>
      </section>

      

      {/* About Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        backgroundColor: '#1F1250'
      }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Phone mockups */}
          <div className="slide-up scroll-animate-left" style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[1].map((i) => (
              <img 
                key={i}
                src={process.env.PUBLIC_URL + `/images/image.png`}
                alt="Dacky App"
                className="hover-lift scroll-animate-scale"
                style={{
                  width: 'clamp(250px, 70%, 600px)',
                  maxWidth: '600px',
                  height: 'auto',
                  borderRadius: '30px'
                }}
              />
            ))}
          </div>

          <div className="slide-up scroll-animate-right" style={{ padding: '2rem' }}>
            <h2 className="scroll-animate-right" style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '100',
              marginBottom: '2rem',
              letterSpacing: '0.15em',
              textAlign: 'right'
            }}>
              SOBRE MI
            </h2>
            
            <p className="scroll-animate-right" style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: '1.8',
              fontWeight: '300',
              textAlign: 'right',
              color: '#FFFBF4'
            }}>
              Pues yo trabajé en un Oxxo ahí cerca de mi casa a un lado del panteón, tengo unvasto conocimiento del Fútbol y se
              lo que pasó en la plaza de las tres culturas el 2 de octubre de 1968
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        backgroundColor: '#1F1250'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="slide-up scroll-animate" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '100',
            marginBottom: '4rem',
            letterSpacing: '0.15em',
            textAlign: 'center'
          }}>
            DATOS IMPORTANTES
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                icon: 'pata.png',
                title: 'EXPERIENCIA',
                desc: 'Actualmente trabajo en Oxxo. 2023-2024. Contribuí a el financiamento de las fiestas de Jeffrey y fui invitado especial en un gang bang anal con peso pluma'
              },
              {
                icon: 'pata.png',
                title: 'EDUCACIÓN',
                desc: 'Ingeniería UAN (Universidad autónoma de Nayarit), Desarrollo Futbolístico: Estive en el equipo del sufacen como por dos meses. Fui reserva del reserva del suplente.'
              },
              {
                icon: 'pata.png',
                title: 'OBJETIVOS PROFESIONALES',
                desc: 'Aspiro a conocer mas gente menor de edad, espero poder meter apuestas deportivas en el canal de futbol del discord y si es posible llegar a ser parte del grupo de moderadores.'
              }
            ].map((service, index) => (
              <div key={index} className="service-card hover-lift scroll-animate-scale" style={{
                backgroundColor: '#FFFBF4',
                color: '#1F1250',
                padding: '3rem 2rem',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <img 
                  src={process.env.PUBLIC_URL + `/images/${service.icon}`}
                  alt={service.title}
                  style={{ width: '80px', height: '80px', marginBottom: '1.5rem', objectFit: 'contain' }}
                />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  color: '#565449'
                }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section style={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        backgroundColor: '#1F1250'
      }}>
        <h2 className="slide-up scroll-animate" style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '100',
          marginBottom: '3rem',
          letterSpacing: '0.15em',
          textAlign: 'center'
        }}>
          CONTRATA MI SERVICIO
        </h2>

        <div className="scroll-animate-scale" style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* <a href={process.env.PUBLIC_URL + '/file/app-release.apk'} download style={{ textDecoration: 'none' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="btn-download"
              style={{ height: '60px' }}
            />
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="btn-download"
              style={{ height: '60px' }}
            />
          </a> */}
        </div>
      </section>

      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        ↑
      </button>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#1F1250',
        borderTop: '1px solid #565449'
      }}>
        <p style={{
          fontSize: '0.9rem',
          fontWeight: '300',
          color: '#FFFBF4'
        }}>
          Smiling 2025 © Copyrigth
        </p>
      </footer>
    </div>
  );
};

export default Dacky;