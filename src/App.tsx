import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Games from './components/Games';
import Achievements from './components/Achievements';
import './styles/globals.css';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navigation />
      
      <main style={{ paddingTop: '80px' }}>
        <section id="hero">
          <Hero />
        </section>
        
        <Games />
        <Achievements />
        
        {/* About Section */}
        <section 
          id="about" 
          className="section"
          style={{
            padding: 'var(--space-2xl) 0',
            minHeight: '50vh'
          }}
        >
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              padding: 'var(--space-xl)',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-lg)'
              }}>
                I'm Alex "Phoenix" Chen, a professional esports player with over 5 years of competitive experience. 
                My journey in esports began in 2019, and since then I've dedicated myself to mastering multiple 
                games and competing at the highest level.
              </p>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.7',
                color: 'var(--text-muted)'
              }}>
                Specializing in tactical FPS and MOBA games, I bring strategic thinking, lightning-fast reflexes, 
                and years of competitive experience to every match. When I'm not competing, I enjoy coaching 
                upcoming players and streaming my gameplay to connect with the esports community.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="section"
          style={{
            padding: 'var(--space-2xl) 0',
            minHeight: '60vh',
            background: 'var(--bg-secondary)'
          }}
        >
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xl)'
              }}>
                Interested in collaborating, sponsorship opportunities, or just want to chat about esports? 
                I'd love to hear from you!
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-lg)',
                marginBottom: 'var(--space-xl)'
              }}>
                <div style={{
                  padding: 'var(--space-xl)',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center'
                }}>
                  <h3 style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: 'var(--space-md)',
                    fontSize: '1.2rem'
                  }}>
                    Business Inquiries
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    alex.phoenix.esports@email.com
                  </p>
                </div>
                
                <div style={{
                  padding: 'var(--space-xl)',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center'
                }}>
                  <h3 style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: 'var(--space-md)',
                    fontSize: '1.2rem'
                  }}>
                    Follow My Stream
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    twitch.tv/phoenix_rising
                  </p>
                </div>
              </div>
              
              <div style={{
                padding: 'var(--space-lg)',
                background: 'var(--bg-glass)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center'
              }}>
                <p style={{ 
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}>
                  © 2024 Alex "Phoenix" Chen. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
