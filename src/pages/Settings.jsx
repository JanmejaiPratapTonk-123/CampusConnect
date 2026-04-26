import { Sun, Moon, Bell, Shield, User, Palette } from 'lucide-react';
import TopBar from '../components/TopBar';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function Settings() {
  const { theme, toggle } = useTheme();
  const { user } = useAuth();

  return (
    <div className="animate-in">
      <TopBar title="Settings" />
      <div className="grid-2">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="glass-card no-hover">
            <div className="flex-gap" style={{ marginBottom: 20 }}>
              <User size={20} style={{ color: 'var(--primary-light)' }} />
              <h3 style={{ fontSize: '1rem' }}>Profile</h3>
            </div>
            <div className="form-group"><label>Name</label><input defaultValue={user?.name} /></div>
            <div className="form-group"><label>Email</label><input defaultValue="admin@campuspulse.ai" /></div>
            <div className="form-group"><label>Role</label><input value={user?.role} readOnly style={{ opacity: 0.6 }} /></div>
            <button className="btn btn-primary">Save Changes</button>
          </div>
          <div className="glass-card no-hover">
            <div className="flex-gap" style={{ marginBottom: 20 }}>
              <Shield size={20} style={{ color: 'var(--secondary-light)' }} />
              <h3 style={{ fontSize: '1rem' }}>Security</h3>
            </div>
            <div className="form-group"><label>Current Password</label><input type="password" placeholder="••••••••" /></div>
            <div className="form-group"><label>New Password</label><input type="password" placeholder="Enter new password" /></div>
            <button className="btn btn-secondary">Update Password</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="glass-card no-hover">
            <div className="flex-gap" style={{ marginBottom: 20 }}>
              <Palette size={20} style={{ color: 'var(--tertiary-light)' }} />
              <h3 style={{ fontSize: '1rem' }}>Appearance</h3>
            </div>
            <div className="flex-between" style={{ padding: '16px 0', borderBottom: '1px solid var(--glass-border)' }}>
              <div><div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Theme</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Toggle dark/light mode</div></div>
              <button className="btn btn-secondary btn-sm" onClick={toggle}>
                {theme === 'dark' ? <><Sun size={14} /> Light</> : <><Moon size={14} /> Dark</>}
              </button>
            </div>
            <div className="flex-between" style={{ padding: '16px 0' }}>
              <div><div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Accent Color</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Primary brand color</div></div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['#6366F1', '#06B6D4', '#8B5CF6', '#34d399', '#f43f5e'].map(c => (
                  <div key={c} style={{ width: 24, height: 24, borderRadius: '50%', background: c, cursor: 'pointer', border: c === '#6366F1' ? '2px solid #fff' : '2px solid transparent' }} />
                ))}
              </div>
            </div>
          </div>
          <div className="glass-card no-hover">
            <div className="flex-gap" style={{ marginBottom: 20 }}>
              <Bell size={20} style={{ color: 'var(--warning)' }} />
              <h3 style={{ fontSize: '1rem' }}>Notifications</h3>
            </div>
            {['Email notifications', 'Push notifications', 'Task deadline reminders', 'Weekly digest', 'AI insight alerts'].map((n, i) => (
              <div key={i} className="flex-between" style={{ padding: '12px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <span style={{ fontSize: '0.875rem' }}>{n}</span>
                <label style={{ position: 'relative', width: 44, height: 24, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={i < 3} style={{ opacity: 0, width: 0, height: 0 }} />
                  <span style={{ position: 'absolute', inset: 0, background: i < 3 ? 'var(--primary-container)' : 'var(--surface-high)', borderRadius: 'var(--radius-full)', transition: '0.2s' }}>
                    <span style={{ position: 'absolute', top: 3, left: i < 3 ? 23 : 3, width: 18, height: 18, background: '#fff', borderRadius: '50%', transition: '0.2s' }} />
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
