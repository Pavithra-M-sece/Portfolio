import React, { useState } from 'react';

const RESUME_DATA = {
  name: "Pavithra M",
  education: "B.E Computer Science Engineering at Sri Eshwar College of Engineering (2024-2028)",
  contact: {
    phone: "+91 9677558590",
    email: "pavithra.m2024cse@sece.ac.in",
    linkedin: "https://www.linkedin.com/in/pavithra-m-005a70333/",
    github: "https://github.com/Pavithra-M-sece"
  },
  skills: ["Python", "C/C++", "Django", "HTML", "CSS", "JavaScript", "MongoDB", "SQL", "Java"],
  projects: [
    "Curetech - Medical Diagnosis Assistant (Python, Django, MongoDB)",
    "Certgen - Online Certification System (Python, Django, MongoDB)", 
    "Letslearn - E-Learning Platform (HTML, CSS, JavaScript)"
  ],
  achievements: [
    "1200+ problems solved on SkillRack with 365 Bronze Medal",
    "80+ problems solved on LeetCode",
    "AI Datathon Finalist at SECE",
    "SICPC Second Round qualifier"
  ],
  codingProfiles: {
    leetcode: "80+ problems, Global Rank 1418175",
    skillrack: "1200+ problems, 365 Bronze Medal, Rank 12382",
    geeksforgeeks: "Coding Score 10+, Rank 800",
    hackerrank: "3 stars in C & Python",
    codechef: "170+ problems solved"
  }
};

const getResponse = (message) => {
  const msg = message.toLowerCase();
  
  // Personal Information
  if (msg.includes('name') || msg.includes('who are you')) {
    return `Hi! I'm ${RESUME_DATA.name}, a Computer Science Engineering student at Sri Eshwar College of Engineering. I'm passionate about coding and building innovative solutions!`;
  }
  
  if (msg.includes('education') || msg.includes('college') || msg.includes('study')) {
    return `I'm currently pursuing ${RESUME_DATA.education}. I also completed my HSC from Kongu Nadu Matric Higher Secondary School with distinction.`;
  }
  
  if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('reach')) {
    return `You can reach me at:\n📞 ${RESUME_DATA.contact.phone}\n📧 ${RESUME_DATA.contact.email}\n💼 LinkedIn: ${RESUME_DATA.contact.linkedin}\n🐙 GitHub: ${RESUME_DATA.contact.github}`;
  }
  
  if (msg.includes('skill') || msg.includes('technology') || msg.includes('programming') || msg.includes('language')) {
    return `My technical skills include: ${RESUME_DATA.skills.join(', ')}. I'm particularly strong in Python, Django, and competitive programming with 1200+ problems solved!`;
  }
  
  if (msg.includes('project')) {
    return `Here are my key projects:\n• ${RESUME_DATA.projects.join('\n• ')}\n\nEach project showcases different aspects of my development skills!`;
  }
  
  if (msg.includes('achievement') || msg.includes('accomplishment') || msg.includes('award')) {
    return `Some of my achievements:\n• ${RESUME_DATA.achievements.join('\n• ')}\n\nI'm proud of my competitive programming journey!`;
  }
  
  if (msg.includes('coding') || msg.includes('leetcode') || msg.includes('competitive') || msg.includes('algorithm')) {
    return `My coding profiles:\n• LeetCode: ${RESUME_DATA.codingProfiles.leetcode}\n• SkillRack: ${RESUME_DATA.codingProfiles.skillrack}\n• GeeksforGeeks: ${RESUME_DATA.codingProfiles.geeksforgeeks}\n• HackerRank: ${RESUME_DATA.codingProfiles.hackerrank}\n• CodeChef: ${RESUME_DATA.codingProfiles.codechef}`;
  }
  
  if (msg.includes('experience') || msg.includes('work') || msg.includes('internship')) {
    return `I'm currently a student focusing on building projects and competitive programming. I have hands-on experience with web development through my projects like Curetech (medical diagnosis) and Certgen (certification system).`;
  }
  
  // General conversational responses
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return `Hello! 👋 I'm Pavithra M's AI assistant. I can tell you about her education, skills, projects, achievements, and more. What would you like to know?`;
  }
  
  if (msg.includes('how are you') || msg.includes('how do you do')) {
    return `I'm doing great, thank you for asking! I'm here to help you learn about Pavithra M's background and skills. What interests you most?`;
  }
  
  if (msg.includes('thank') || msg.includes('thanks')) {
    return `You're welcome! 😊 Is there anything else you'd like to know about Pavithra M's background, projects, or skills?`;
  }
  
  if (msg.includes('help') || msg.includes('what can you do')) {
    return `I can help you learn about Pavithra M! Ask me about:\n• Her education and background\n• Technical skills and programming languages\n• Projects she's built\n• Coding achievements and profiles\n• Contact information\n• Career interests`;
  }
  
  if (msg.includes('age') || msg.includes('old')) {
    return `Pavithra is a young and enthusiastic Computer Science student, currently in her engineering program (2024-2028). She's focused on building her skills and creating impactful projects!`;
  }
  
  if (msg.includes('location') || msg.includes('where') || msg.includes('from')) {
    return `Pavithra is from India and currently studying at Sri Eshwar College of Engineering in Coimbatore. She's open to opportunities both locally and remotely!`;
  }
  
  if (msg.includes('future') || msg.includes('goal') || msg.includes('plan') || msg.includes('career')) {
    return `Pavithra is passionate about software development and aims to become a skilled full-stack developer. She's particularly interested in web technologies, AI, and building solutions that make a difference!`;
  }
  
  if (msg.includes('hobby') || msg.includes('interest') || msg.includes('like')) {
    return `Besides coding, Pavithra enjoys competitive programming, learning new technologies, and working on innovative projects. She's always excited to take on new challenges!`;
  }
  
  if (msg.includes('python') || msg.includes('django')) {
    return `Yes! Python is one of Pavithra's strongest skills. She's used Python and Django to build projects like Curetech (medical diagnosis system) and Certgen (certification platform). She loves Python's versatility!`;
  }
  
  if (msg.includes('web development') || msg.includes('frontend') || msg.includes('backend')) {
    return `Pavithra has experience in both frontend and backend development. She's worked with HTML, CSS, JavaScript for frontend, and Python/Django for backend development in her projects.`;
  }
  
  if (msg.includes('hire') || msg.includes('job') || msg.includes('opportunity') || msg.includes('available')) {
    return `Pavithra is currently a student but is open to internship opportunities, part-time projects, and learning experiences. You can contact her at ${RESUME_DATA.contact.email} to discuss opportunities!`;
  }
  
  if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you')) {
    return `Goodbye! 👋 Thanks for learning about Pavithra M. Feel free to reach out to her directly if you'd like to connect!`;
  }
  
  // Default response for unrecognized queries
  return `That's an interesting question! While I specialize in information about Pavithra M, I'd be happy to tell you about her education, skills, projects, achievements, or how to contact her. What would you like to know?`;
};

export default function LocalChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: `Hi! 👋 I'm Pavithra M's AI assistant. I can tell you about her education, skills, projects, achievements, and more. What would you like to know?` }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { type: 'user', text: input };
    const botResponse = { type: 'bot', text: getResponse(input) };
    
    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput('');
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

  const chatWrapper = {
    width: 360,
    height: 520,
    boxShadow: '0 12px 40px rgba(2,6,23,0.24)',
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid rgba(8,17,33,0.06)',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column'
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
        <div style={chatWrapper}>
          <div style={{padding: 16, background: '#0ea5e9', color: 'white', fontWeight: 600}}>
            💬 Ask about Pavithra M
          </div>
          
          <div style={{flex: 1, padding: 16, overflowY: 'auto', maxHeight: 360}}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                marginBottom: 12,
                padding: 8,
                borderRadius: 8,
                background: msg.type === 'user' ? '#0ea5e9' : '#f1f5f9',
                color: msg.type === 'user' ? 'white' : '#1e293b',
                alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                whiteSpace: 'pre-line',
                fontSize: '0.9rem'
              }}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div style={{padding: 16, borderTop: '1px solid #e2e8f0', display: 'flex', gap: 8}}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about skills, projects..."
              style={{
                flex: 1,
                padding: 8,
                border: '1px solid #e2e8f0',
                borderRadius: 6,
                fontSize: '0.9rem'
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: '8px 12px',
                background: '#0ea5e9',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={buttonStyle}
        onClick={() => setOpen(o => !o)}
      >
        {open ? '×' : '💬'}
      </button>
    </div>
  );
}