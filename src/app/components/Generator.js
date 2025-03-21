export function generateLanding({ title, description, theme }) {
    return `
  import React from 'react';
  
  const LandingPage = () => {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '50px', backgroundColor: '${theme}' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>${title}</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: 'auto' }}>${description}</p>
      </div>
    );
  };
  
  export default LandingPage;
    `;
  }
  