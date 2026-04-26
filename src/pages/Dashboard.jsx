import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Users, Building2, CheckCircle2, Clock, ArrowUpRight, Plus, Send, Download } from 'lucide-react';
import TopBar from '../components/TopBar';
import { ambassadors, monthlyGrowthData, activityFeed } from '../data/mockData';
Chart.register(...registerables);

const stats = [
  { label: 'Total Ambassadors', value: '12', trend: '+3 this month', up: true, icon: Users, color: 'var(--primary)' },
  { label: 'Active Colleges', value: '10', trend: '+2 this month', up: true, icon: Building2, color: 'var(--secondary)' },
  { label: 'Tasks Completed', value: '47', trend: '+12 this week', up: true, icon: CheckCircle2, color: 'var(--success)' },
  { label: 'Pending Submissions', value: '8', trend: '3 urgent', up: false, icon: Clock, color: 'var(--warning)' },
];

const typeIcons = { task: '📋', badge: '⭐', submission: '📎', join: '👋', milestone: '🎯', referral: '🔗' };

export default function Dashboard() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: monthlyGrowthData.labels,
        datasets: [
          { label: 'Ambassadors', data: monthlyGrowthData.ambassadors, borderColor: '#6366F1', backgroundColor: 'rgba(99,102,241,0.1)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#6366F1' },
          { label: 'Tasks', data: monthlyGrowthData.tasks, borderColor: '#06B6D4', backgroundColor: 'rgba(6,182,212,0.1)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#06B6D4' },
          { label: 'Referrals', data: monthlyGrowthData.referrals, borderColor: '#8B5CF6', backgroundColor: 'rgba(139,92,246,0.1)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#8B5CF6' },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { color: '#c7c4d8', usePointStyle: true, padding: 20, font: { family: 'Manrope', size: 12 } } } },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#918fa1', font: { family: 'Inter', size: 11 } } },
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#918fa1', font: { family: 'Inter', size: 11 } } },
        },
      },
    });
    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, []);

  return (
    <div className="animate-in">
      <TopBar title="Dashboard" />
      <div className="grid-4" style={{ marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={i} className="glass-card stats-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex-between">
              <div className="stats-icon" style={{ background: `${s.color}22` }}><s.icon size={20} style={{ color: s.color }} /></div>
              <div className={`stats-trend ${s.up ? 'up' : 'down'}`}><ArrowUpRight size={14} /> {s.trend}</div>
            </div>
            <div className="stats-value">{s.value}</div>
            <div className="stats-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="glass-card no-hover">
          <h3 style={{ marginBottom: 16, fontSize: '1rem' }}>Growth Overview</h3>
          <div className="chart-container"><canvas ref={chartRef} /></div>
        </div>
        <div className="glass-card no-hover">
          <div className="flex-between" style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: '1rem' }}>Recent Activity</h3>
            <button className="btn-ghost btn-sm">View All</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {activityFeed.slice(0, 6).map(a => (
              <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 8px', borderRadius: 'var(--radius)', transition: 'background 0.15s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <span style={{ fontSize: '1.1rem' }}>{typeIcons[a.type] || '📌'}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.813rem' }}><strong>{a.user}</strong> {a.action} <span style={{ color: 'var(--primary-light)' }}>{a.target}</span></div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--outline)' }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid-2">
        <div className="glass-card no-hover">
          <h3 style={{ marginBottom: 16, fontSize: '1rem' }}>Top Performers</h3>
          {ambassadors.slice(0, 5).map((a, i) => (
            <div key={a.id} className="flex-between" style={{ padding: '10px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <div className="flex-gap">
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--on-surface-variant)', width: 20 }}>#{i + 1}</span>
                <div className="avatar avatar-primary">{a.avatar}</div>
                <div><div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{a.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>{a.college}</div></div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--secondary-light)' }}>{a.points} pts</div>
                <div className={`badge badge-${a.badge.toLowerCase()}`} style={{ fontSize: '0.6rem' }}>{a.badge}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card no-hover">
          <h3 style={{ marginBottom: 16, fontSize: '1rem' }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[{ icon: Plus, label: 'Create Task', color: 'var(--primary)' }, { icon: Users, label: 'Add Ambassador', color: 'var(--secondary)' },
              { icon: Send, label: 'Send Broadcast', color: 'var(--tertiary)' }, { icon: Download, label: 'Export Report', color: 'var(--success)' }].map((a, i) => (
              <button key={i} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, cursor: 'pointer', background: 'transparent' }}>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius)', background: `${a.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a.icon size={18} style={{ color: a.color }} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.813rem' }}>{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
