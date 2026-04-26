import { useState } from 'react';
import { Plus, Calendar, Users, CheckCircle2, Clock, XCircle, Eye } from 'lucide-react';
import TopBar from '../components/TopBar';
import { tasks, submissions } from '../data/mockData';

export default function TaskManagement() {
  const [tab, setTab] = useState('all');
  const [showCreate, setShowCreate] = useState(false);
  const [showSub, setShowSub] = useState(null);

  const filtered = tab === 'all' ? tasks : tasks.filter(t => t.status === tab);
  const statusColor = { active: 'var(--success)', pending: 'var(--warning)', completed: 'var(--primary-light)' };
  const priorityColor = { high: 'var(--error)', medium: 'var(--warning)', low: 'var(--on-surface-variant)' };

  return (
    <div className="animate-in">
      <TopBar title="Task Management" />
      <div className="flex-between" style={{ marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <div className="tabs">
          {['all', 'active', 'pending', 'completed'].map(s => (
            <button key={s} className={`tab ${tab === s ? 'active' : ''}`} onClick={() => setTab(s)}>
              {s.charAt(0).toUpperCase() + s.slice(1)} {s !== 'all' && `(${tasks.filter(t => t.status === s).length})`}
            </button>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => setShowCreate(true)}><Plus size={16} /> Create Task</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filtered.map(t => (
          <div key={t.id} className="glass-card no-hover" style={{ padding: 20 }}>
            <div className="flex-between" style={{ marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div className="flex-gap" style={{ marginBottom: 4 }}>
                  <h3 style={{ fontSize: '1rem' }}>{t.title}</h3>
                  <span className="badge" style={{ background: `${priorityColor[t.priority]}22`, color: priorityColor[t.priority] }}>{t.priority}</span>
                </div>
                <p style={{ fontSize: '0.813rem', color: 'var(--on-surface-variant)' }}>{t.description}</p>
              </div>
              <span className="badge" style={{ background: `${statusColor[t.status]}22`, color: statusColor[t.status] }}>{t.status}</span>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: '0.813rem', color: 'var(--on-surface-variant)' }}>
              <span className="flex-gap"><Calendar size={14} /> {t.deadline}</span>
              <span className="flex-gap"><Users size={14} /> {t.totalAssigned} assigned</span>
              <span className="flex-gap"><CheckCircle2 size={14} /> {t.submissions}/{t.totalAssigned} submitted</span>
              <span style={{ color: 'var(--secondary-light)', fontWeight: 600 }}>+{t.points} pts</span>
              <span className="badge badge-elite" style={{ fontSize: '0.65rem' }}>{t.category}</span>
            </div>
            {submissions.filter(s => s.taskId === t.id).length > 0 && (
              <div style={{ marginTop: 16, borderTop: '1px solid var(--glass-border)', paddingTop: 12 }}>
                <div className="flex-between" style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--on-surface-variant)' }}>Submissions</span>
                </div>
                {submissions.filter(s => s.taskId === t.id).map(s => (
                  <div key={s.id} className="flex-between" style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <div className="flex-gap">
                      <span style={{ fontSize: '0.813rem', fontWeight: 500 }}>{s.ambassadorName}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--outline)' }}>{s.submittedAt}</span>
                    </div>
                    <div className="flex-gap">
                      <span className={`badge badge-${s.status === 'approved' ? 'active' : 'pending'}`} style={{ fontSize: '0.6rem' }}>{s.status}</span>
                      {s.status === 'pending' && (
                        <>
                          <button className="btn btn-success btn-sm"><CheckCircle2 size={12} /> Approve</button>
                          <button className="btn btn-danger btn-sm"><XCircle size={12} /> Reject</button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showCreate && (
        <div className="modal-overlay" onClick={() => setShowCreate(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Create New Task</h2>
            <div className="form-group"><label>Task Title</label><input placeholder="Enter task title" /></div>
            <div className="form-group"><label>Description</label><textarea rows={3} placeholder="Describe the task..." style={{ width: '100%', resize: 'vertical' }} /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="form-group"><label>Deadline</label><input type="date" /></div>
              <div className="form-group"><label>Points</label><input type="number" placeholder="100" /></div>
            </div>
            <div className="form-group"><label>Priority</label>
              <select><option>High</option><option>Medium</option><option>Low</option></select>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setShowCreate(false)}>Create Task</button>
              <button className="btn btn-secondary" onClick={() => setShowCreate(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
