import { useState } from 'react';
import { Trophy, Medal, Crown } from 'lucide-react';
import TopBar from '../components/TopBar';
import { ambassadors, rewards, colleges } from '../data/mockData';

export default function Leaderboard() {
  const [tab, setTab] = useState('individual');
  const sorted = [...ambassadors].sort((a, b) => b.points - a.points);
  const top3 = sorted.slice(0, 3);

  const collegeData = colleges.filter(c => c !== 'All Colleges').map(c => {
    const members = ambassadors.filter(a => a.college === c);
    return { name: c, totalPoints: members.reduce((s, m) => s + m.points, 0), count: members.length, avgPerformance: Math.round(members.reduce((s, m) => s + m.performance, 0) / (members.length || 1)) };
  }).sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="animate-in">
      <TopBar title="Leaderboard" />
      <div className="flex-between" style={{ marginBottom: 24 }}>
        <div className="tabs">
          <button className={`tab ${tab === 'individual' ? 'active' : ''}`} onClick={() => setTab('individual')}>🏆 Individual</button>
          <button className={`tab ${tab === 'college' ? 'active' : ''}`} onClick={() => setTab('college')}>🏫 College</button>
          <button className={`tab ${tab === 'rewards' ? 'active' : ''}`} onClick={() => setTab('rewards')}>🎁 Rewards</button>
        </div>
      </div>

      {tab === 'individual' && (
        <>
          <div className="podium">
            {[top3[1], top3[0], top3[2]].map((a, i) => {
              const rank = i === 0 ? 2 : i === 1 ? 1 : 3;
              const cls = rank === 1 ? 'first' : rank === 2 ? 'second' : 'third';
              const emoji = rank === 1 ? '👑' : rank === 2 ? '🥈' : '🥉';
              return (
                <div key={a.id} className={`podium-item ${cls}`}>
                  <div className="podium-rank">{emoji}</div>
                  <div className={`avatar avatar-primary ${rank === 1 ? 'avatar-xl' : 'avatar-lg'}`} style={{ margin: '0 auto' }}>{a.avatar}</div>
                  <div className="podium-name">{a.name}</div>
                  <div className="podium-points">{a.points} pts</div>
                  <div className="podium-college">{a.college}</div>
                </div>
              );
            })}
          </div>
          <div className="glass-card no-hover">
            <table className="data-table">
              <thead><tr><th>Rank</th><th>Ambassador</th><th>College</th><th>Points</th><th>Tasks</th><th>Streak</th><th>Badge</th></tr></thead>
              <tbody>
                {sorted.map((a, i) => (
                  <tr key={a.id} style={i < 3 ? { background: 'rgba(99,102,241,0.05)' } : {}}>
                    <td><span style={{ fontWeight: 700, color: i < 3 ? 'var(--primary-light)' : 'var(--on-surface-variant)' }}>#{i + 1}</span></td>
                    <td><div className="flex-gap"><div className="avatar avatar-primary">{a.avatar}</div><span style={{ fontWeight: 600 }}>{a.name}</span></div></td>
                    <td style={{ fontSize: '0.813rem' }}>{a.college}</td>
                    <td><span style={{ fontWeight: 700, color: 'var(--secondary-light)' }}>{a.points}</span></td>
                    <td>{a.tasksCompleted}</td>
                    <td>{a.streak > 0 ? `${a.streak} 🔥` : '-'}</td>
                    <td><span className={`badge badge-${a.badge.toLowerCase()}`}>{a.badge}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {tab === 'college' && (
        <div className="glass-card no-hover">
          <table className="data-table">
            <thead><tr><th>Rank</th><th>College</th><th>Ambassadors</th><th>Total Points</th><th>Avg Performance</th></tr></thead>
            <tbody>
              {collegeData.map((c, i) => (
                <tr key={c.name}>
                  <td><span style={{ fontWeight: 700, color: i < 3 ? 'var(--primary-light)' : 'var(--on-surface-variant)' }}>#{i + 1}</span></td>
                  <td style={{ fontWeight: 600 }}>{c.name}</td>
                  <td>{c.count}</td>
                  <td style={{ fontWeight: 700, color: 'var(--secondary-light)' }}>{c.totalPoints}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="progress-bar" style={{ width: 60 }}><div className="fill" style={{ width: `${c.avgPerformance}%` }} /></div>
                      <span style={{ fontSize: '0.75rem' }}>{c.avgPerformance}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'rewards' && (
        <div className="grid-3">
          {rewards.map(r => (
            <div key={r.id} className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{r.icon}</div>
              <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>{r.name}</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: 12 }}>{r.description}</p>
              <div style={{ fontSize: '0.813rem', fontWeight: 700, color: 'var(--secondary-light)', marginBottom: 8 }}>{r.pointsRequired} pts required</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--outline)' }}>{r.unlockedBy.length} ambassadors unlocked</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
