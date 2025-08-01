import React from 'react';

function ThankYou() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center',
      backgroundColor: '#f0f4f8',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '3rem' }}>Thank You!</h1>
      <p style={{ color: '#334155', fontSize: '1.2rem', maxWidth: '500px' }}>
        Your quote request has been sent successfully. We appreciate you contacting us and will be in touch shortly!
      </p>
      <a href="/" style={{ 
        marginTop: '30px', 
        padding: '12px 25px', 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '8px',
        fontWeight: 'bold'
      }}>
        Return to Homepage
      </a>
    </div>
  );
}

export default ThankYou;
