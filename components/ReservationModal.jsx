'use client';
import { useState } from 'react';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#121212',
        border: '1px solid #333',
        maxWidth: '500px',
        width: '100%',
        padding: '40px',
        position: 'relative',
        color: '#f4f4f0'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#888',
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <h3 style={{ fontFamily: 'serif', fontSize: '28px', color: '#c5a880', marginBottom: '16px' }}>Reservation Received</h3>
            <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.6', marginBottom: '24px' }}>
              Thank you, {formData.name}. We look forward to welcoming you at L'ÉTOILE on {formData.date} at {formData.time}. A confirmation has been sent to your email.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              style={{
                backgroundColor: '#c5a880',
                color: '#000',
                border: 'none',
                padding: '12px 24px',
                fontSize: '12px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#c5a880', marginBottom: '8px', textAlign: 'center' }}>Secure Your Experience</p>
            <h3 style={{ fontFamily: 'serif', fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>Table Reservation</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>FULL NAME</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '14px' }} 
                  placeholder="e.g. Victoria Sterling"
                />
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>EMAIL</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '14px' }} 
                    placeholder="name@example.com"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>PHONE</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '14px' }} 
                    placeholder="+234 ..."
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>DATE</label>
                  <input 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '14px' }} 
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>TIME</label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '14px' }}
                  >
                    <option value="17:00">5:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:15">8:15 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>PARTY SIZE</label>
                <select 
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '14px' }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8+ Guests (VIP Table)</option>
                </select>
              </div>

              <button 
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#c5a880',
                  color: '#000',
                  border: 'none',
                  padding: '14px',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  cursor: 'pointer',
                  fontWeight: '500',
                  marginTop: '10px'
                }}
              >
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}