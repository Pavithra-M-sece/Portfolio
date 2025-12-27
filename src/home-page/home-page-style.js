// JS style objects for the homepage. Using plain objects so no extra CSS
// dependencies are required. Consume like: `style={HomepageStyle.container}`
export const HomepageStyle = {
  container: {
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: '#0f172a',
    padding: 20,
    maxWidth: 1100,
    margin: '0 auto'
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: '48px 0'
  },
  heading: {
    fontSize: 36,
    margin: 0,
    lineHeight: 1.05
  },
  subheading: {
    fontSize: 18,
    margin: 0,
    color: '#475569'
  },
  section: {
    marginTop: 30,
    padding: '24px 0',
    borderTop: '1px solid #e6edf3'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 16,
    marginTop: 12
  },
  card: {
    padding: 16,
    background: '#ffffff',
    borderRadius: 8,
    boxShadow: '0 1px 3px rgba(2,6,23,0.08)',
    border: '1px solid #e6edf3'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 480
  },
  input: {
    padding: '10px 12px',
    borderRadius: 6,
    border: '1px solid #cbd5e1'
  },
  button: {
    padding: '10px 14px',
    borderRadius: 6,
    border: 'none',
    background: '#0ea5e9',
    color: '#fff',
    cursor: 'pointer'
  }
};
// (previously used styled-components code removed; styles are exported above)
