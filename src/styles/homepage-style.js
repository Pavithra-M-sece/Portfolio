import { theme } from './theme'

// Enhanced homepage styles with modern design
export const HomepageStyle = {
  container: {
    fontFamily: theme.font.family,
    color: theme.colors.text,
    padding: '0 24px',
    maxWidth: theme.sizes.containerMax,
    margin: '0 auto',
    minHeight: '100vh'
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gap: 48,
    alignItems: 'center',
    padding: '80px 40px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
    borderRadius: 20,
    boxShadow: '0 20px 40px rgba(2,6,23,0.1)',
    margin: '40px 0',
    position: 'relative',
    overflow: 'hidden'
  },
  heroContent: {
    animation: 'fadeInUp 0.8s ease-out'
  },
  heading: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    margin: 0,
    lineHeight: 1.1,
    color: theme.colors.text,
    fontWeight: 800,
    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subheading: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
    margin: '20px 0',
    color: theme.colors.muted,
    lineHeight: 1.6
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    color: 'white',
    borderRadius: 12,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  },
  section: {
    margin: '80px 0',
    padding: '40px 0'
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: theme.colors.text,
    marginBottom: 32,
    textAlign: 'center',
    position: 'relative'
  },
  card: {
    padding: 32,
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(2,6,23,0.08)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 32,
    marginTop: 40
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
    objectFit: 'cover',
    boxShadow: '0 20px 40px rgba(2,6,23,0.15)',
    border: '4px solid rgba(255, 255, 255, 0.8)',
    animation: 'float 3s ease-in-out infinite'
  },
  contactForm: {
    display: 'grid',
    gap: 20,
    maxWidth: 600,
    margin: '40px auto 0',
    padding: 40,
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(2,6,23,0.08)'
  },
  input: {
    padding: '16px 20px',
    borderRadius: 12,
    border: '2px solid #e2e8f0',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    background: 'rgba(255, 255, 255, 0.8)'
  },
  button: {
    padding: '16px 24px',
    borderRadius: 12,
    border: 'none',
    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: 16,
    marginTop: 32
  },
  skillCard: {
    padding: 20,
    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
    borderRadius: 12,
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  }
};