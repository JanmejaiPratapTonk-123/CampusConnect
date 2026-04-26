import { useState } from 'react';
import { Trophy, Flame, Star, CheckCircle2, Upload, ExternalLink } from 'lucide-react';
import TopBar from '../components/TopBar';
import { portalData, ambassadors } from '../data/mockData';

const user = ambassadors[0]; // Logged-in ambassador

export default function AmbassadorPortal() {
  const [proofUrl, setProofUrl] = useState('');
  const taskStatusColor = { submitted: 'var(--success)', in_progress: 'var(--warning)', not_started: 'var(--on-surface-variant)' };
  const taskStatusLabel = { submitted: 'Submitted', in_progress: 'In Progress', not_started: 'Not Started' };

  return (
    <div className="animate-in">
      <TopBar title="My Portal" />
      <div className="grid-4" style={{ marginBottom: 24 }}>
        {[{ label: 'Points Earned', value: user.points, icon: Star, color: 'var(--warning)' },
          { label: 'Tasks Done', value: user.tasksCompleted, icon: CheckCircle2, color: 'var(--success)' },
          { label: 'Current Rank', value: `#${user.rank}`, icon: Trophy, color: 'var(--primary-light)' },
          { label: 'Week Streak', value: `${user.streak} 🔥`, icon: Flame, color: 'var(--error)' },
        ].map((s, i) => (
          <div key={i} className="glass-card stats-card">
            <div className="stats-icon" style={{ background: `${s.color}22` }}><s.icon size={20} style={{ color: s.color }} /></div>
            <div className="stats-value">{s.value}</div>
            <div className="stats-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="glass-card no-hover">
          <h3 style={{ fontSize: '1rem', marginBottom: 16 }}>Badge Progress</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[{ name: 'Elite Ambassador', req: 2500, icon: '⭐' }, { name: 'Gold Performer', req: 2000, icon: '🥇' },
              { name: 'Referral King', req: 1000, icon: '👑' }].map((b, i) => {
              const pct = Math.min(100, (user.points / b.req) * 100);
              return (
                <div key={i}>
                  <div className="flex-between" style={{ marginBottom: 6 }}>
                    <span style={{ fontSize: '0.813rem', fontWeight: 600 }}>{b.icon} {b.name}</span>
                    <span style={{ fontSize: '0.7rem', color: pct >= 100 ? 'var(--success)' : 'var(--on-surface-variant)' }}>
                      {pct >= 100 ? '✓ Unlocked' : `${user.points}/${b.req}`}
                    </span>
                  </div>
                  <div className="progress-bar"><div className="fill" style={{ width: `${pct}%` }} /></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-card no-hover">
          <h3 style={{ fontSize: '1rem', marginBottom: 16 }}>Weekly Streak</h3>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={i} style={{ width: 40, height: 40, borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600,
                background: portalData.weeklyStreak[i] ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.03)',
                color: portalData.weeklyStreak[i] ? 'var(--primary-light)' : 'var(--outline)',
                border: `1px solid ${portalData.weeklyStreak[i] ? 'var(--primary)' : 'var(--glass-border)'}` }}>
                {portalData.weeklyStreak[i] ? '🔥' : d}
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: '1rem', marginBottom: 12, marginTop: 24 }}>Recent Achievements</h3>
          {portalData.recentAchievements.map((a, i) => (
            <div key={i} className="flex-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ fontSize: '0.875rem' }}>{a.icon} {a.title}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--outline)' }}>{a.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card no-hover" style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>Progress Tracker</h3>
        <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: 16 }}>Complete milestones to unlock new rewards</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {portalData.milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                background: m.completed ? 'var(--primary-container)' : 'var(--surface-high)',
                color: m.completed ? '#fff' : 'var(--outline)', fontWeight: 700, fontSize: '0.7rem' }}>
                {m.completed ? '✓' : i + 1}
              </div>
              {i < portalData.milestones.length - 1 && (
                <div style={{ flex: 1, height: 2, background: m.completed ? 'var(--primary)' : 'var(--surface-high)' }} />
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          {portalData.milestones.map((m, i) => (
            <span key={i} style={{ fontSize: '0.65rem', color: m.completed ? 'var(--primary-light)' : 'var(--outline)', textAlign: 'center', width: `${100 / portalData.milestones.length}%` }}>{m.label}</span>
          ))}
        </div>
      </div>

      <div className="glass-card no-hover">
        <h3 style={{ fontSize: '1rem', marginBottom: 16 }}>Assigned Tasks</h3>
        {portalData.assignedTasks.map(t => (
          <div key={t.id} style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div className="flex-gap" style={{ marginBottom: 4 }}>
                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{t.title}</span>
                <span className="badge" style={{ background: `${taskStatusColor[t.status]}22`, color: taskStatusColor[t.status], fontSize: '0.6rem' }}>{taskStatusLabel[t.status]}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Due: {t.deadline} · +{t.points} pts</div>
            </div>
            {t.status === 'in_progress' || t.status === 'not_started' ? (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input placeholder="Paste proof link..." value={proofUrl} onChange={e => setProofUrl(e.target.value)} style={{ width: 200, height: 34, fontSize: '0.75rem' }} />
                <button className="btn btn-primary btn-sm"><Upload size={12} /> Submit</button>
              </div>
            ) : (
              <a href={t.proofLink} target="_blank" rel="noopener" className="flex-gap" style={{ fontSize: '0.75rem', color: 'var(--secondary-light)' }}>
                <ExternalLink size={12} /> View Proof
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
