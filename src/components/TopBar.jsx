import { useState } from 'react';
import { Search, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { notifications } from '../data/mockData';

export default function TopBar({ title }) {
  const { theme, toggle } = useTheme();
  const [showNotifs, setShowNotifs] = useState(false);
  const unread = notifications.filter(n => !n.read).length;

  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          {title && <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</h1>}
        </div>
        <div className="topbar-right">
          <div className="search-box" style={{ width: 240 }}>
            <Search size={16} className="search-icon" />
            <input placeholder="Search..." style={{ height: 36, fontSize: '0.813rem' }} />
          </div>
          <button className="btn-ghost" onClick={toggle} style={{ borderRadius: 'var(--radius)' }}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="btn-ghost notif-btn" onClick={() => setShowNotifs(!showNotifs)} style={{ position: 'relative', borderRadius: 'var(--radius)' }}>
            <Bell size={18} />
            {unread > 0 && <span className="notif-badge">{unread}</span>}
          </button>
        </div>
      </header>
      {showNotifs && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 998 }} onClick={() => setShowNotifs(false)} />
          <div className="notification-panel">
            <div className="flex-between" style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.125rem' }}>Notifications</h3>
              <button className="btn-ghost btn-sm" onClick={() => setShowNotifs(false)}>✕</button>
            </div>
            {notifications.map(n => (
              <div key={n.id} className={`notification-item ${!n.read ? 'unread' : ''}`}>
                <div style={{ fontWeight: 600, fontSize: '0.813rem', marginBottom: 4 }}>{n.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{n.message}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--outline)', marginTop: 6 }}>{n.time}</div>
              </div>
            ))}
          </div>
        </>
      )}
      <style>{`
        .topbar { display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 24px; gap: 16px; flex-wrap: wrap; }
        .topbar-right { display: flex; align-items: center; gap: 8px; }
        .notif-badge { position: absolute; top: 2px; right: 2px; width: 16px; height: 16px;
          background: var(--error); color: #fff; border-radius: 50%; font-size: 0.6rem;
          display: flex; align-items: center; justify-content: center; font-weight: 700; }
        @media (max-width: 768px) {
          .topbar { padding-left: 48px; }
          .topbar-right .search-box { display: none; }
        }
      `}</style>
    </>
  );
}
