import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { TrendingUp, Target, Users, DollarSign, ArrowUpRight } from 'lucide-react';
import TopBar from '../components/TopBar';
import { analyticsData, monthlyGrowthData } from '../data/mockData';
Chart.register(...registerables);

export default function Analytics() {
  const lineRef = useRef(null); const barRef = useRef(null); const doughnutRef = useRef(null);
  const charts = useRef([]);

  useEffect(() => {
    charts.current.forEach(c => c?.destroy());
    charts.current = [];

    charts.current.push(new Chart(lineRef.current.getContext('2d'), {
      type: 'line',
      data: { labels: monthlyGrowthData.labels,
        datasets: [{ label: 'Engagement %', data: monthlyGrowthData.engagement, borderColor: '#6366F1', backgroundColor: 'rgba(99,102,241,0.1)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#6366F1' }] },
      options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#c7c4d8', font: { family: 'Manrope' } } } },
        scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#918fa1' } }, y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#918fa1' } } } },
    }));

    charts.current.push(new Chart(barRef.current.getContext('2d'), {
      type: 'bar',
      data: { labels: analyticsData.topColleges.map(c => c.name.replace(/^(IIT|NIT|IIIT|VIT|BITS)\s/, '$1\n')),
        datasets: [{ label: 'Points', data: analyticsData.topColleges.map(c => c.points), backgroundColor: ['#6366F1', '#06B6D4', '#8B5CF6', '#34d399', '#fbbf24'] , borderRadius: 8 }] },
      options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#918fa1' } }, y: { grid: { display: false }, ticks: { color: '#c7c4d8', font: { family: 'Manrope', size: 11 } } } } },
    }));

    charts.current.push(new Chart(doughnutRef.current.getContext('2d'), {
      type: 'doughnut',
      data: { labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [{ data: [65, 20, 15], backgroundColor: ['#6366F1', '#06B6D4', '#464555'], borderWidth: 0 }] },
      options: { responsive: true, maintainAspectRatio: false, cutout: '72%',
        plugins: { legend: { position: 'bottom', labels: { color: '#c7c4d8', padding: 16, font: { family: 'Inter' } } } } },
    }));

    return () => charts.current.forEach(c => c?.destroy());
  }, []);

  const metricCards = [
    { label: 'Referral Conversions', value: analyticsData.referralConversions.total, sub: `${analyticsData.referralConversions.rate}% rate`, trend: analyticsData.referralConversions.trend, icon: Target, color: 'var(--primary)' },
    { label: 'Task Completion', value: `${analyticsData.taskCompletionRate.rate}%`, sub: `${analyticsData.taskCompletionRate.total} tasks`, trend: analyticsData.taskCompletionRate.trend, icon: TrendingUp, color: 'var(--secondary)' },
    { label: 'Engagement Score', value: `${analyticsData.engagementGrowth.rate}%`, sub: 'This month', trend: analyticsData.engagementGrowth.trend, icon: Users, color: 'var(--tertiary)' },
    { label: 'ROI', value: analyticsData.roi.value, sub: `$${analyticsData.roi.costPerAmbassador} cost / $${analyticsData.roi.revenuePerAmbassador} rev`, trend: analyticsData.roi.trend, icon: DollarSign, color: 'var(--success)' },
  ];

  return (
    <div className="animate-in">
      <TopBar title="Analytics" />
      <div className="grid-4" style={{ marginBottom: 24 }}>
        {metricCards.map((m, i) => (
          <div key={i} className="glass-card stats-card">
            <div className="flex-between">
              <div className="stats-icon" style={{ background: `${m.color}22` }}><m.icon size={20} style={{ color: m.color }} /></div>
              <div className="stats-trend up"><ArrowUpRight size={14} /> {m.trend}</div>
            </div>
            <div className="stats-value">{m.value}</div>
            <div className="stats-label">{m.label}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="glass-card no-hover">
          <h3 style={{ fontSize: '1rem', marginBottom: 16 }}>Engagement Growth</h3>
          <div className="chart-container"><canvas ref={lineRef} /></div>
        </div>
        <div className="glass-card no-hover">
          <h3 style={{ fontSize: '1rem', marginBottom: 16 }}>Task Completion</h3>
          <div className="chart-container"><canvas ref={doughnutRef} /></div>
        </div>
      </div>

      <div className="grid-2">
        <div className="glass-card no-hover">
          <h3 style={{ fontSize: '1rem', marginBottom: 16 }}>Top Colleges by Points</h3>
          <div className="chart-container"><canvas ref={barRef} /></div>
        </div>
        <div className="glass-card no-hover">
          <h3 style={{ fontSize: '1rem', marginBottom: 16 }}>Weekly Trend</h3>
          <table className="data-table">
            <thead><tr><th>Week</th><th>Signups</th><th>Tasks</th><th>Referrals</th></tr></thead>
            <tbody>
              {analyticsData.weeklyTrend.map(w => (
                <tr key={w.week}><td style={{ fontWeight: 600 }}>{w.week}</td><td>{w.signups}</td><td>{w.tasks}</td><td>{w.referrals}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
