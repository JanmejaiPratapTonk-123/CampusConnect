import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, Users, ClipboardList, User, Trophy, BarChart3, Brain, Settings, LogOut, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const adminLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/ambassadors', icon: Users, label: 'Ambassadors' },
  { to: '/tasks', icon: ClipboardList, label: 'Task Management' },
  { to: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/ai-insights', icon: Brain, label: 'AI Insights' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];
const ambassadorLinks = [
  { to: '/portal', icon: User, label: 'My Portal' },
  { to: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const links = isAdmin ? adminLinks : ambassadorLinks;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/'); };

  const sidebarContent = (
    <>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Zap size={22} style={{ color: 'var(--primary-light)' }} />
          <span>CampusConnect</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
            <l.icon size={18} /> <span>{l.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="avatar avatar-primary" style={{ width: 32, height: 32, fontSize: '0.7rem' }}>{user?.avatar}</div>
          <div><div style={{ fontWeight: 600, fontSize: '0.813rem' }}>{user?.name}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)', textTransform: 'capitalize' }}>{user?.role}</div></div>
        </div>
        <button className="btn-ghost" onClick={handleLogout} style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
          <LogOut size={16} /> Logout
        </button>
      </div>
    </>
  );

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>{sidebarContent}</aside>
      <style>{`
        .sidebar { position: fixed; top: 0; left: 0; bottom: 0; width: var(--sidebar-width);
          background: rgba(11,18,41,0.6); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border-right: 1px solid var(--glass-border); display: flex; flex-direction: column;
          z-index: 50; padding: 20px 12px; transition: transform 0.3s; }
        [data-theme="light"] .sidebar { background: rgba(255,255,255,0.8); }
        .sidebar-header { padding: 0 8px 24px; border-bottom: 1px solid var(--glass-border); margin-bottom: 16px; }
        .sidebar-logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-head);
          font-weight: 800; font-size: 1.125rem; }
        .sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .sidebar-link { display: flex; align-items: center; gap: 12px; padding: 10px 12px;
          border-radius: var(--radius); font-size: 0.875rem; color: var(--on-surface-variant);
          text-decoration: none; transition: all 0.15s; font-weight: 500; }
        .sidebar-link:hover { background: rgba(255,255,255,0.06); color: var(--on-surface); }
        .sidebar-link.active { background: rgba(99,102,241,0.15); color: var(--primary-light); font-weight: 600; }
        .sidebar-footer { padding-top: 16px; border-top: 1px solid var(--glass-border); }
        .sidebar-user { display: flex; align-items: center; gap: 10px; padding: 8px; }
        .mobile-menu-btn { display: none; position: fixed; top: 16px; left: 16px; z-index: 60;
          background: var(--surface); border: 1px solid var(--glass-border); border-radius: var(--radius);
          padding: 8px; color: var(--on-surface); }
        .sidebar-overlay { display: none; }
        @media (max-width: 768px) {
          .sidebar { transform: translateX(-100%); }
          .sidebar.open { transform: translateX(0); }
          .mobile-menu-btn { display: flex; }
          .sidebar-overlay { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40; }
        }
      `}</style>
    </>
  );
}
