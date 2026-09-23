export default function Hero({ onOpenReservation }) {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '750px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      paddingTop: '90px', // Clears the fixed navigation bar
      overflow: 'hidden',
      backgroundColor: '#0b0b0b'
    }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000" 
          alt="Fine dining spread" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.45' }}
        />
        {/* Deep gradient overlay to make text crystal clear */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.4) 50%, rgba(11,11,11,0.95) 100%)'
        }}></div>
      </div>

      {/* Centered Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#c5a880', margin: 0 }}>
          Michelin-Starred Contemporary Dining
        </p>
        
        <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(50px, 8vw, 85px)', letterSpacing: '0.15em', color: '#f4f4f0', fontWeight: '300', margin: 0 }}>
          L'ÉTOILE
        </h1>
        
        <p style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 20px)', color: '#ccc', margin: '0 0 10px 0' }}>
          "Where exceptional food meets unforgettable moments."
        </p>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginTop: '10px' }}>
          <button 
            onClick={onOpenReservation}
            style={{
              backgroundColor: '#c5a880',
              color: '#000',
              border: 'none',
              padding: '14px 32px',
              fontSize: '11px',
              letterSpacing: '0.25em',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            RESERVE A TABLE
          </button>
          <a 
            href="#menu" 
            style={{
              border: '1px solid #555',
              color: '#f4f4f0',
              padding: '14px 32px',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textDecoration: 'none',
              backgroundColor: 'transparent'
            }}
          >
            EXPLORE OUR MENU
          </a>
        </div>
      </div>
    </section>
  );
}