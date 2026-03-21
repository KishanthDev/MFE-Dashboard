// src/Dashboard.tsx (Remote App)
export default function Dashboard() {
  const stats = [
    { label: "Total Users", value: "1,284", color: "#818CF8" },
    { label: "Revenue", value: "$45,210", color: "#34D399" },
    { label: "Active Sessions", value: "432", color: "#FBBF24" },
  ];

  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#1E293B',
      border: '1px solid #334155',
      marginTop: '20px'
    }}>
      <h2 style={{ color: '#F1F5F9', marginBottom: '20px' }}>📊 Remote Dashboard Shell</h2>

      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{
            flex: '1',
            minWidth: '150px',
            padding: '15px',
            backgroundColor: '#334155',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            borderLeft: `4px solid ${stat.color}`
          }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#94A3B8' }}>{stat.label}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#F1F5F9' }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#312E81', borderRadius: '8px', color: '#A5B4FC', border: '1px solid #4F46E5' }}>
        <strong>Live Status:</strong> Successfully Loaded from Vercel Edge
      </div>
    </div>
  );
}