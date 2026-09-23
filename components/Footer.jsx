export default function Footer({ onOpenReservation }) {
  return (
    <footer id="reservations" style={{
      backgroundColor: '#070707',
      borderTop: '1px solid #1a1a1a',
      padding: '80px 24px 30px 24px',
      color: '#f4f4f0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '48px',
        paddingBottom: '60px'
      }}>
        {/* Column 1: Brand & Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontFamily: 'serif', fontSize: '24px', letterSpacing: '0.25em', margin: 0, color: '#f4f4f0' }}>
            L'ÉTOILE
          </h3>
          <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.7', fontWeight: '300', margin: 0, maxWidth: '320px' }}>
            An uncompromising journey through contemporary French gastronomy, fine wines, and timeless elegance.
          </p>
        </div>

        {/* Column 2: Hours of Operation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontFamily: 'serif', fontSize: '18px', color: '#f4f4f0', margin: 0, fontWeight: '400' }}>
            Hours of Operation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#888', fontWeight: '300' }}>
            <p style={{ margin: 0 }}>Dinner: Tue – Sun: 6:00 PM – 11:00 PM</p>
            <p style={{ margin: 0 }}>Lounge: Tue – Sun: 5:00 PM – Late</p>
            <p style={{ margin: 0 }}>Monday: Closed</p>
          </div>
        </div>

        {/* Column 3: Location & Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontFamily: 'serif', fontSize: '18px', color: '#f4f4f0', margin: 0, fontWeight: '400' }}>
            Location & Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#888', fontWeight: '300' }}>
            <p style={{ margin: 0 }}>42 Avenue Montaigne, 75008 Paris</p>
            <p style={{ margin: 0 }}>reservations@letoile-gastronomy.com</p>
            <p style={{ margin: 0 }}>+33 1 42 68 55 00</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid #1a1a1a',
        paddingTop: '30px',
        textAlign: 'center',
        fontSize: '11px',
        letterSpacing: '0.2em',
        color: '#555'
      }}>
        © 2026 L'ÉTOILE RESTAURANT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}