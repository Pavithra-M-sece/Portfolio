import React, { useState, useEffect, useRef } from 'react';

// Default Chatbase bot id you provided.
const DEFAULT_BOT_ID = 'pSK1NaRELKkwDeGRbebpT';

/**
 * Chatbot component supports three integration modes (priority order):
 * 1) `embedScriptUrl` + optional `embedScriptAttrs` — dynamically load vendor script and set attributes (recommended when provider gives a script widget)
 * 2) `embedHtml` — raw widget HTML string (careful: may contain script tags)
 * 3) `embedUrl` — iframe fallback (may be blocked by X-Frame-Options/CSP)
 *
 * Example usage with script URL:
 * <Chatbot embedScriptUrl="https://www.chatbase.co/widget.js" embedScriptAttrs={{ 'data-bot-id': 'pSK1...' }} />
 */
export default function Chatbot({ botId = DEFAULT_BOT_ID, embedUrl, embedScriptUrl, embedScriptAttrs, embedHtml }) {
  const [open, setOpen] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load Chatbase widget script
    if (scriptLoadedRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.setAttribute('chatbotId', botId);
    script.setAttribute('domain', 'www.chatbase.co');

    script.onload = () => {
      console.log('Chatbase widget loaded');
      scriptLoadedRef.current = true;
      
      // Hide the default Chatbase widget
      const chatbaseWidget = document.querySelector('chatbase-chat-widget');
      if (chatbaseWidget) {
        chatbaseWidget.style.display = 'none';
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, [botId]);

  // Build iframe src for Chatbase
  const iframeSrc = `https://www.chatbase.co/chatbot-iframe/${botId}`;

  const openChatbase = () => {
    if (window.chatbaseConfig) {
      window.chatbaseConfig.openChat();
    } else {
      setOpen(true);
    }
  };

  const containerStyle = {
    position: 'fixed',
    right: 24,
    bottom: 24,
    zIndex: 2147483647,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8
  };

  const iframeWrapper = {
    width: 360,
    height: 520,
    boxShadow: '0 20px 40px rgba(2,6,23,0.15)',
    borderRadius: 16,
    overflow: 'hidden',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    background: '#fff',
    position: 'relative'
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    color: 'white',
    padding: '12px 16px',
    fontWeight: 600,
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: 8
  };

  const buttonStyle = {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: '#0ea5e9',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    boxShadow: '0 6px 18px rgba(14,165,233,0.24)'
  };

  return (
    <div style={containerStyle}>
      {open && (
        /* If embedHtml provided, render it (dangerously) — useful when provider gives raw widget markup */
        embedHtml ? (
          <div style={iframeWrapper} dangerouslySetInnerHTML={{ __html: embedHtml }} />
        ) : (
          <div style={iframeWrapper}>
            <div style={headerStyle}>
              💬 Ask me about Pavithra M
            </div>
            <iframe
              title="Pavithra M - Portfolio Assistant"
              src={iframeSrc}
              style={{ width: '100%', height: 'calc(100% - 44px)', border: 0 }}
              allow="microphone"
            />
          </div>
        )
      )}

      <button
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        style={buttonStyle}
        onClick={() => {
          if (window.chatbaseConfig && window.chatbaseConfig.openChat) {
            window.chatbaseConfig.openChat();
          } else {
            setOpen(o => !o);
          }
        }}
      >
        {open ? '×' : '💬'}
      </button>
    </div>
  );
}