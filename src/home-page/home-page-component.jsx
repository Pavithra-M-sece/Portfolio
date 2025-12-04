import React, {useState} from "react";
import { HomepageStyle } from "./home-page-style";

const HomepageComponent = () => {
    const [contact, setContact] = useState({ name: '', email: '', message: '' });

    // Debug mount log to help verify rendering in browser console
    console.log('HomepageComponent mounted');

    function handleChange(e) {
        const { name, value } = e.target;
        setContact(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // For now just log — user can wire an email/API later
        console.log('Contact submitted', contact);
        alert('Thanks! I received your message.');
        setContact({ name: '', email: '', message: '' });
    }

    return (
        <div style={HomepageStyle.container}>
            <header style={HomepageStyle.hero}>
                <h1 style={HomepageStyle.heading}>Hi, I'm [Your Name]</h1>
                <p style={HomepageStyle.subheading}>I build modern web apps with React. Welcome to my portfolio.</p>
            </header>

            <section style={HomepageStyle.section}>
                <h2>About</h2>
                <p>I am a JavaScript developer focused on building accessible, performant web applications. I enjoy clean UI, good DX, and learning new patterns.</p>
            </section>

            <section style={HomepageStyle.section}>
                <h2>Projects</h2>
                <div style={HomepageStyle.projectsGrid}>
                    <div style={HomepageStyle.card}>
                        <h3>Project One</h3>
                        <p>Short description of the project, tech used, and a link.</p>
                    </div>
                    <div style={HomepageStyle.card}>
                        <h3>Project Two</h3>
                        <p>Short description of the project, tech used, and a link.</p>
                    </div>
                    <div style={HomepageStyle.card}>
                        <h3>Project Three</h3>
                        <p>Short description of the project, tech used, and a link.</p>
                    </div>
                </div>
            </section>

            <section style={HomepageStyle.section}>
                <h2>Contact</h2>
                <form style={HomepageStyle.contactForm} onSubmit={handleSubmit}>
                    <input
                        style={HomepageStyle.input}
                        name="name"
                        placeholder="Your name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                    <input
                        style={HomepageStyle.input}
                        name="email"
                        placeholder="Your email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                    <textarea
                        style={{...HomepageStyle.input, height: 120}}
                        name="message"
                        placeholder="Message"
                        value={contact.message}
                        onChange={handleChange}
                    />
                    <button style={HomepageStyle.button} type="submit">Send message</button>
                </form>
            </section>
        </div>
    );
};

export default HomepageComponent;