import React, { useState, useEffect } from 'react';
import './AltibbeSite.css';

const AltibbeSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'solutions', label: 'Solutions', href: '#solutions' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const services = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions built for scalability and performance. Transform your business operations with cutting-edge technology.',
      icon: '🏢'
    },
    {
      title: 'Technology Consulting',
      description: 'Expert consulting services to guide your digital transformation journey and optimize your technological infrastructure.',
      icon: '💡'
    },
    {
      title: 'Innovation & Development',
      description: 'Custom development solutions tailored to your unique business needs, ensuring seamless integration and maximum efficiency.',
      icon: '🚀'
    }
  ];

  const features = [
    {
      title: 'Scalable Infrastructure',
      description: 'Built to grow with your business needs',
      icon: '⚡'
    },
    {
      title: 'Expert Support',
      description: '24/7 professional support and guidance',
      icon: '🛠️'
    },
    {
      title: 'Secure Solutions',
      description: 'Enterprise-grade security and compliance',
      icon: '🔒'
    },
    {
      title: 'Global Reach',
      description: 'Serving clients worldwide with excellence',
      icon: '🌍'
    }
  ];

  const newsItems = [
    {
      title: 'Altibbe Announces Strategic Partnership for Enhanced Services',
      date: 'December 15, 2024',
      category: 'Partnership',
      excerpt: 'Our latest partnership brings innovative solutions to help businesses achieve their digital transformation goals...'
    },
    {
      title: 'New Enterprise Solutions Launch',
      date: 'November 28, 2024',
      category: 'Product Launch',
      excerpt: 'Introducing our next-generation enterprise solutions designed for modern businesses...'
    },
    {
      title: 'Altibbe Recognized as Industry Leader',
      date: 'November 10, 2024',
      category: 'Achievement',
      excerpt: 'We are honored to be recognized for our commitment to excellence and innovation...'
    }
  ];

  return (
    <div className="altibbe-site">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-brand">
            <span className="logo">Altibbe</span>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-video-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Success Depends on
              <span className="hero-highlight">Your Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Discover innovative, reliable and scalable solutions built for everyone — a network of possibilities for your business growth.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started with Altibbe</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Excellence Through Innovation</h2>
              <p>
                Altibbe is an enterprise-grade, innovative solutions provider. 
                A trusted partner with comprehensive capabilities, we are uniquely positioned 
                to revolutionize and optimize business operations through cutting-edge technology 
                and strategic solutions.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Successful Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Global Clients</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <span>🏢</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Get Started With Altibbe</h2>
            <p>Choose the solution that best fits your business needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn btn-outline">Explore {service.title}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Altibbe Solutions</h2>
            <p>Comprehensive solutions designed for modern businesses</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="powered-by">
        <div className="container">
          <h2>Powered by Altibbe</h2>
          <p>The innovative solutions platform is steadily building for lasting success</p>
          <div className="clients-showcase">
            <div className="client-item">Enterprise Client 1</div>
            <div className="client-item">Global Partner 2</div>
            <div className="client-item">Industry Leader 3</div>
            <div className="client-item">Innovation Hub 4</div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <div className="container">
          <div className="section-header">
            <h2>What's Happening</h2>
            <p>Stay updated with our latest news and developments</p>
          </div>
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div key={index} className="news-card">
                <div className="news-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="news-meta">
                  <span>{item.date}</span>
                  <button className="btn btn-text">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Start building with Altibbe today and discover the power of innovation</p>
            <button className="btn btn-primary">Get Started with Altibbe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About Altibbe</h4>
              <ul>
                <li><a href="#history">History</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#enterprise">Enterprise Solutions</a></li>
                <li><a href="#consulting">Consulting</a></li>
                <li><a href="#development">Development</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#innovation">Innovation</a></li>
                <li><a href="#integration">Integration</a></li>
                <li><a href="#optimization">Optimization</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#github">GitHub</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-brand">
              <span className="logo">Altibbe</span>
            </div>
            <div className="footer-legal">
              <p>&copy; 2024 Altibbe. All Rights Reserved</p>
              <div className="footer-links">
                <a href="#terms">Terms & Conditions</a>
                <a href="#privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AltibbeSite;