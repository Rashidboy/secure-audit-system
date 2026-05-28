import React, { useState, useEffect } from 'react';

function App() {
  const [logs, setLogs] = useState([]);
  const [action, setAction] = useState('');
  const [role, setRole] = useState('Operator');
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:8000/api/logs";

  const fetchLogs = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setLogs(data);
    } catch (err) {
      console.error("Loglarni yuklashda xatolik:", err);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!action.trim()) return;
    setLoading(true);
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, user_role: role }),
      });
      setAction('');
      fetchLogs();
    } catch (err) {
      console.error("Log yozishda xatolik:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', padding: '30px' }}>
        
        <h2 style={{ color: '#1e293b', marginBottom: '10px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          🛡️ GuardianLog — Enterprise Audit System
        </h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '25px' }}>
          Oliy xavfsizlik talablariga mos amaliy mikroloyiha: <strong>FastAPI (Python) + React + PostgreSQL + Docker Compose</strong>.
          Tizimdagi har bir amalni real vaqt rejimida xavfsiz jurnalga muhrlaydi.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <input
            type="text"
            placeholder="Amal turi (masalan: Foydalanuvchi bloklandi, Parol o'zgartirildi)"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', fontSize: '14px', cursor: 'pointer' }}
          >
            <option value="Admin">🔑 Admin</option>
            <option value="Operator">🎧 Operator</option>
            <option value="Manager">📈 Manager</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '12px 24px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}
          >
            {loading ? 'Yozilmoqda...' : 'Log Yozish'}
          </button>
        </form>

        <h3 style={{ color: '#334155', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          📜 Real-Time Audit Jurnali (PostgreSQL)
        </h3>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1e293b', color: '#fff' }}>
                <th style={{ padding: '12px' }}>ID</th>
                <th style={{ padding: '12px' }}>Bajarilgan Amal</th>
                <th style={{ padding: '12px' }}>Tizim Rolli</th>
                <th style={{ padding: '12px' }}>Sana / Vaqt</th>
              </tr>
            </thead>
            <tbody>
              {logs.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#94a3b8' }}>Hech qanday audit logi topilmadi.</td>
                </tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#fff' }}>
                    <td style={{ padding: '12px', color: '#64748b', fontWeight: 'bold' }}>#{log.id}</td>
                    <td style={{ padding: '12px', color: '#334155' }}>{log.action}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        backgroundColor: log.user_role === 'Admin' ? '#fee2e2' : log.user_role === 'Manager' ? '#dcfce7' : '#e0f2fe',
                        color: log.user_role === 'Admin' ? '#ef4444' : log.user_role === 'Manager' ? '#22c55e' : '#0ea5e9'
                      }}>
                        {log.user_role}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: '#64748b' }}>{new Date(log.timestamp).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default App;