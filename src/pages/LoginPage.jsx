import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Zap, Shield, User } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('admin');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(role);
    navigate(role === 'admin' ? '/dashboard' : '/portal');
  };

  return (
    <div className="login-page">
      <div className="glass-card login-card no-hover animate-in">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <Zap size={32} style={{ color: 'var(--primary-light)' }} />
        </div>
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to CampusPulse AI</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Select Role</label>
            <div className="role-selector">
              <button type="button" className={`role-option ${role === 'admin' ? 'selected' : ''}`} onClick={() => setRole('admin')}>
                <div className="role-icon"><Shield size={24} /></div>
                <div className="role-name">Admin</div>
              </button>
              <button type="button" className={`role-option ${role === 'ambassador' ? 'selected' : ''}`} onClick={() => setRole('ambassador')}>
                <div className="role-icon"><User size={24} /></div>
                <div className="role-name">Ambassador</div>
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="admin@campuspulse.ai" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" defaultValue="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px', marginTop: 8 }}>
            Sign In
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>
          Demo mode — click Sign In to continue
        </p>
      </div>
    </div>
  );
}
