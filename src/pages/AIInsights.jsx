import { useState } from 'react';
import { Brain, AlertTriangle, Lightbulb, TrendingUp, Sparkles } from 'lucide-react';
import TopBar from '../components/TopBar';
import { aiInsights } from '../data/mockData';

const typeConfig = {
  prediction: { icon: TrendingUp, color: 'var(--secondary)', label: 'Prediction' },
  warning: { icon: AlertTriangle, color: 'var(--warning)', label: 'Warning' },
  suggestion: { icon: Lightbulb, color: 'var(--tertiary)', label: 'Suggestion' },
  insight: { icon: Brain, color: 'var(--primary-light)', label: 'Insight' },
};

export default function AIInsights() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? aiInsights : aiInsights.filter(i => i.type === filter);

  return (
    <div className="animate-in">
      <TopBar title="AI Insights" />
      <div className="glass-card no-hover" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div className="pulse-ring" style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={22} style={{ color: 'var(--primary-light)' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1rem' }}>AI Intelligence Engine</h3>
          <p style={{ fontSize: '0.813rem', color: 'var(--on-surface-variant)' }}>8 insights generated · 5 actionable recommendations · Last updated 2 hours ago</p>
        </div>
        <div className="badge badge-active">● Live</div>
      </div>

      <div className="grid-4" style={{ marginBottom: 24 }}>
        {[{ label: 'Predictions', value: aiInsights.filter(i => i.type === 'prediction').length, icon: '🚀', color: 'var(--secondary)' },
          { label: 'Warnings', value: aiInsights.filter(i => i.type === 'warning').length, icon: '⚠️', color: 'var(--warning)' },
          { label: 'Suggestions', value: aiInsights.filter(i => i.type === 'suggestion').length, icon: '💡', color: 'var(--tertiary)' },
          { label: 'Avg Confidence', value: `${Math.round(aiInsights.reduce((s, i) => s + i.confidence, 0) / aiInsights.length)}%`, icon: '🎯', color: 'var(--primary)' },
        ].map((s, i) => (
          <div key={i} className="glass-card stats-card">
            <div style={{ fontSize: '1.5rem' }}>{s.icon}</div>
            <div className="stats-value">{s.value}</div>
            <div className="stats-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="tabs" style={{ marginBottom: 24, width: 'fit-content' }}>
        {['all', 'prediction', 'warning', 'suggestion', 'insight'].map(f => (
          <button key={f} className={`tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filtered.map((insight, idx) => {
          const config = typeConfig[insight.type] || typeConfig.insight;
          const Icon = config.icon;
          return (
            <div key={insight.id} className={`glass-card insight-card ${insight.type}`} style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="flex-between" style={{ marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                <div className="flex-gap">
                  <div style={{ width: 36, height: 36, borderRadius: 'var(--radius)', background: `${config.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} style={{ color: config.color }} />
                  </div>
                  <div>
                    <div className="flex-gap">
                      <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{insight.icon} {insight.title}</span>
                      <span className="badge" style={{ background: `${config.color}22`, color: config.color, fontSize: '0.6rem' }}>{config.label}</span>
                    </div>
                    {insight.ambassador && <span style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)' }}>Re: {insight.ambassador}</span>}
                  </div>
                </div>
                {insight.actionable && <button className="btn btn-secondary btn-sm">Take Action</button>}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>{insight.description}</p>
              <div className="confidence-bar">
                <span style={{ fontSize: '0.7rem', color: 'var(--outline)', whiteSpace: 'nowrap' }}>Confidence</span>
                <div className="bar"><div className="bar-fill" style={{ width: `${insight.confidence}%`, background: config.color }} /></div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: config.color }}>{insight.confidence}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
