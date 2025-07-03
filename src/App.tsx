import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Games from './components/Games';
import Achievements from './components/Achievements';
import './styles/globals.css';

function App() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      <Navigation />
      
      <main style={{ 
        paddingTop: '80px',
        width: '100vw',
        overflow: 'hidden'
      }}>
        <section id="hero" style={{ width: '100vw' }}>
          <Hero />
        </section>
        
        <div style={{ width: '100vw' }}>
          <Games />
          <Achievements />
        </div>
        
        {/* About Section */}
        <section 
          id="about" 
          className="section"
          style={{
            padding: 'clamp(var(--space-xl), 6vw, var(--space-2xl)) 0',
            minHeight: '50vh',
            width: '100vw'
          }}
        >
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              padding: 'clamp(var(--space-lg), 5vw, var(--space-xl))',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-lg)',
              width: '100%'
            }}>
              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-lg)'
              }}>
                I'm Alex "Phoenix" Chen, a professional esports player with over 5 years of competitive experience. 
                My journey in esports began in 2019, and since then I've dedicated myself to mastering multiple 
                games and competing at the highest level.
              </p>
              <p style={{ 
                fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)', 
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
            padding: 'clamp(var(--space-xl), 6vw, var(--space-2xl)) 0',
            minHeight: '60vh',
            background: 'var(--bg-secondary)',
            width: '100vw'
          }}
        >
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
              width: '100%'
            }}>
              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                marginBottom: 'clamp(var(--space-lg), 5vw, var(--space-xl))'
              }}>
                Interested in collaborating, sponsorship opportunities, or just want to chat about esports? 
                I'd love to hear from you!
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'clamp(var(--space-md), 4vw, var(--space-lg))',
                marginBottom: 'clamp(var(--space-lg), 5vw, var(--space-xl))',
                width: '100%'
              }}>
                <div style={{
                  padding: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  <h3 style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: 'var(--space-md)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)'
                  }}>
                    Business Inquiries
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    wordBreak: 'break-word'
                  }}>
                    alex.phoenix.esports@email.com
                  </p>
                </div>
                
                <div style={{
                  padding: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  <h3 style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: 'var(--space-md)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)'
                  }}>
                    Follow My Stream
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    wordBreak: 'break-word'
                  }}>
                    twitch.tv/phoenix_rising
                  </p>
                </div>
              </div>
              
              <div style={{
                padding: 'clamp(var(--space-md), 3vw, var(--space-lg))',
                background: 'var(--bg-glass)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                width: '100%'
              }}>
                <p style={{ 
                  color: 'var(--text-muted)',
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)'
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
