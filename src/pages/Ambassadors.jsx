import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import TopBar from '../components/TopBar';
import { ambassadors, colleges } from '../data/mockData';

export default function Ambassadors() {
  const [search, setSearch] = useState('');
  const [college, setCollege] = useState('All Colleges');
  const [status, setStatus] = useState('all');

  const filtered = ambassadors.filter(a => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.college.toLowerCase().includes(search.toLowerCase());
    const matchCollege = college === 'All Colleges' || a.college === college;
    const matchStatus = status === 'all' || a.status === status;
    return matchSearch && matchCollege && matchStatus;
  });

  return (
    <div className="animate-in">
      <TopBar title="Ambassador Management" />
      <div className="glass-card no-hover" style={{ marginBottom: 24 }}>
        <div className="filter-bar">
          <div className="search-box" style={{ flex: 1, minWidth: 200 }}>
            <Search size={16} className="search-icon" />
            <input placeholder="Search ambassadors..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%' }} />
          </div>
          <select value={college} onChange={e => setCollege(e.target.value)}>
            {colleges.map(c => <option key={c}>{c}</option>)}
          </select>
          <div className="tabs">
            {['all', 'active', 'inactive'].map(s => (
              <button key={s} className={`tab ${status === s ? 'active' : ''}`} onClick={() => setStatus(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="glass-card no-hover">
        <table className="data-table">
          <thead>
            <tr><th>Ambassador</th><th>College</th><th>Status</th><th>Points</th><th>Tasks</th><th>Performance</th><th>Badge</th></tr>
          </thead>
          <tbody>
            {filtered.map(a => (
              <tr key={a.id}>
                <td>
                  <div className="flex-gap">
                    <div className="avatar avatar-primary">{a.avatar}</div>
                    <div><div style={{ fontWeight: 600 }}>{a.name}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>{a.email}</div></div>
                  </div>
                </td>
                <td><span style={{ fontSize: '0.813rem' }}>{a.college}</span></td>
                <td><span className={`badge badge-${a.status}`}>{a.status}</span></td>
                <td><span style={{ fontWeight: 700, color: 'var(--secondary-light)' }}>{a.points}</span></td>
                <td>{a.tasksCompleted}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="progress-bar" style={{ width: 80 }}>
                      <div className="fill" style={{ width: `${a.performance}%` }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{a.performance}%</span>
                  </div>
                </td>
                <td><span className={`badge badge-${a.badge.toLowerCase()}`}>{a.badge}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div style={{ padding: 40, textAlign: 'center', color: 'var(--on-surface-variant)' }}>No ambassadors found</div>}
      </div>
    </div>
  );
}
