import { useNavigate } from 'react-router-dom';
import { Zap, Brain, Trophy, BarChart3, Users, Award, ArrowRight, Star } from 'lucide-react';
import { features, pricingPlans, testimonials } from '../data/mockData';

const iconMap = { brain: Brain, trophy: Trophy, zap: Zap, chart: BarChart3, building: Users, award: Award };

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page animate-in">
      <nav className="landing-nav">
        <div className="logo">⚡ CampusPulse AI</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-secondary btn-sm" onClick={() => navigate('/login')}>Log In</button>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/login')}>Get Started <ArrowRight size={14} /></button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="badge badge-elite" style={{ marginBottom: 20, fontSize: '0.7rem' }}>🚀 AICore Connect Hackathon 2026</div>
        <h1>Turn Campus Ambassadors into a <span className="gradient-text">Scalable Growth Engine</span></h1>
        <p>AI-powered platform to recruit, manage, gamify, and scale your campus ambassador programs across 100+ colleges.</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => navigate('/login')} style={{ padding: '14px 32px', fontSize: '1rem' }}>
            Start Free Trial <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1rem' }}>Watch Demo</button>
        </div>
        <div style={{ marginTop: 48, padding: '12px 24px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-xl)', backdropFilter: 'blur(20px)', display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['500+ Ambassadors Managed', '85% Retention Rate', '3.4x ROI Average'].map(s => (
            <span key={s} style={{ fontSize: '0.813rem', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Star size={12} style={{ color: 'var(--warning)' }} /> {s}
            </span>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <div className="badge badge-elite" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>FEATURES</div>
        <h2>Everything You Need to <span className="gradient-text">Scale Campus Growth</span></h2>
        <div className="feature-grid">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] || Zap;
            return (
              <div key={i} className="glass-card feature-card animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="icon-box"><Icon size={24} style={{ color: 'var(--primary-light)' }} /></div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="landing-section">
        <div className="metrics-bar glass-card no-hover">
          {[{ v: '500+', l: 'Ambassadors' }, { v: '120+', l: 'Colleges' }, { v: '340%', l: 'Avg ROI' }, { v: '85%', l: 'Retention' }].map((m, i) => (
            <div key={i} className="metric-item">
              <div className="metric-value">{m.v}</div>
              <div className="metric-label">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <div className="badge badge-elite" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>TESTIMONIALS</div>
        <h2>Loved by Growth Teams</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card testimonial-card">
              <div className="quote">"{t.quote}"</div>
              <div className="author">
                <div className="avatar avatar-secondary">{t.avatar}</div>
                <div className="author-info"><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section" id="pricing">
        <div className="badge badge-elite" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>PRICING</div>
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          {pricingPlans.map((p, i) => (
            <div key={i} className={`glass-card pricing-card ${p.highlighted ? 'highlighted' : ''}`}>
              <h3>{p.name}</h3>
              <div className="price">{p.price}<span>{p.period}</span></div>
              <ul>{p.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
              <button className={`btn ${p.highlighted ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="landing-footer">
        <div className="logo" style={{ marginBottom: 16, display: 'inline-block' }}>⚡ CampusPulse AI</div>
        <p>© 2026 CampusPulse AI. Built for the AICore Connect Hackathon.</p>
        <p style={{ marginTop: 8 }}>Turn Campus Ambassadors into a scalable growth engine.</p>
      </footer>
    </div>
  );
}
