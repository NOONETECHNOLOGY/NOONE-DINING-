export default function Navbar({ onOpenReservation }) {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: 'rgba(11, 11, 11, 0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 32px',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <a href="#" style={{ fontFamily: 'serif', fontSize: '22px', letterSpacing: '0.3em', color: '#f4f4f0', textDecoration: 'none' }}>
          NOONE DINING
        </a>
        
        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden lg:flex">
          <a href="#story" style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#bbb', textDecoration: 'none' }}>OUR STORY</a>
          <a href="#menu" style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#bbb', textDecoration: 'none' }}>MENU</a>
          <a href="#chef" style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#bbb', textDecoration: 'none' }}>CHEF</a>
          <a href="#gallery" style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#bbb', textDecoration: 'none' }}>GALLERY</a>
          <a href="#reviews" style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#bbb', textDecoration: 'none' }}>REVIEWS</a>
          <button onClick={onOpenReservation} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', letterSpacing: '0.25em', color: '#bbb', padding: 0 }}>RESERVATIONS</button>
        </nav>

        <button 
          onClick={onOpenReservation}
          style={{
            border: '1px solid #c5a880',
            padding: '12px 24px',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: '#c5a880',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          RESERVE A TABLE
        </button>
      </div>
    </header>
  );
}