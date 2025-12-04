import React, { useState } from 'react';

export default function EmailService({ onSend, buttonStyle, inputStyle }) {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    try {
      // Method 1: Using mailto (most reliable)
      const subject = `Portfolio Contact from ${contact.name}`;
      const body = `Name: ${contact.name}\nEmail: ${contact.email}\n\nMessage:\n${contact.message}`;
      const mailtoLink = `mailto:pavithra.m2024cse@sece.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(mailtoLink, '_blank');
      
      // Method 2: Alternative - Copy to clipboard
      const emailContent = `To: pavithra.m2024cse@sece.ac.in\nSubject: ${subject}\n\n${body}`;
      
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(emailContent);
        alert('✅ Email client opened! If it didn\'t work, the email content has been copied to your clipboard.');
      } else {
        alert('✅ Email client opened! Please compose your email manually if needed.');
      }

      setContact({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Email error:', error);
      alert('Please send an email manually to: pavithra.m2024cse@sece.ac.in');
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'grid', gap: 20}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
        <input 
          style={inputStyle} 
          name="name" 
          placeholder="Your Name" 
          value={contact.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          style={inputStyle} 
          name="email" 
          type="email" 
          placeholder="Your Email" 
          value={contact.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <textarea 
        style={{...inputStyle, height: 120, resize: 'vertical'}} 
        name="message" 
        placeholder="Tell me about your project..." 
        value={contact.message} 
        onChange={handleChange} 
        required 
      />
      <button 
        style={{
          ...buttonStyle,
          opacity: sending ? 0.7 : 1,
          cursor: sending ? 'not-allowed' : 'pointer'
        }} 
        type="submit"
        disabled={sending}
      >
        {sending ? 'Opening Email Client...' : 'Send Message 🚀'}
      </button>
      
      <div style={{textAlign: 'center', marginTop: 16}}>
        <p style={{color: '#64748b', fontSize: '0.9rem', margin: 0}}>
          Or email directly: 
          <a 
            href="mailto:pavithra.m2024cse@sece.ac.in?subject=Portfolio Contact" 
            style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500, marginLeft: 8}}
          >
            pavithra.m2024cse@sece.ac.in
          </a>
        </p>
      </div>
    </form>
  );
}