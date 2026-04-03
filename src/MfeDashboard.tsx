import { ArrowUpRight, ArrowDownRight, Activity, Zap, ShieldCheck } from 'lucide-react';

const DashboardUI = () => {
  return (
    // FIX: Removed `h-full` so the white container expands to fit the chart and nodes automatically.
    <div className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">System Performance</h1>
          <p className="text-slate-500 text-sm">Real-time metrics from your micro-frontend instance.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-bold bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors">Filters</button>
          <button className="px-4 py-2 text-sm font-bold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95">Download PDF</button>
        </div>
      </div>

      {/* 2. Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard 
          icon={<Activity className="text-indigo-600" size={20} />} 
          label="API Latency" 
          value="42ms" 
          trend="+4%" 
          positive={false} 
        />
        <MetricCard 
          icon={<Zap className="text-amber-500" size={20} />} 
          label="Req / Second" 
          value="1.2k" 
          trend="+18%" 
          positive={true} 
        />
        <MetricCard 
          icon={<ShieldCheck className="text-emerald-500" size={20} />} 
          label="Uptime" 
          value="99.99%" 
          trend="Stable" 
          positive={true} 
        />
      </div>

      {/* 3. Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Large Chart Area */}
        <div className="lg:col-span-3 rounded-2xl bg-slate-50 border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Resource Utilization</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span> CPU
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span> Memory
              </div>
            </div>
          </div>
          
          {/* Placeholder for actual Chart logic */}
          <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl relative overflow-hidden bg-white/50">
             <div className="absolute inset-0 flex items-end justify-around px-2 sm:px-8 pt-12">
                {[40, 70, 45, 90, 65, 80, 50, 30, 85, 60].map((h, i) => (
                  <div key={i} className="w-4 sm:w-6 bg-indigo-100 rounded-t-sm transition-all hover:bg-indigo-500" style={{ height: `${h}%` }}></div>
                ))}
             </div>
             <p className="z-10 text-slate-400 font-bold uppercase tracking-widest text-xs">Live Data Stream</p>
          </div>
        </div>

        {/* Small Action List */}
        <div className="lg:col-span-1">
          <h3 className="font-bold text-slate-800 mb-4 px-1">Active Nodes</h3>
          <div className="space-y-3">
            <NodeItem name="auth-service" status="Healthy" load="12%" />
            <NodeItem name="payment-gate" status="Healthy" load="45%" />
            <NodeItem name="user-profile" status="Warning" load="89%" />
            <NodeItem name="search-index" status="Healthy" load="04%" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-components for Cleanliness ---

const MetricCard = ({ icon, label, value, trend, positive }: any) => (
  <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-start justify-between">
    <div>
      <div className="p-2 bg-white rounded-lg inline-block shadow-sm border border-slate-100 mb-3">{icon}</div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
      <h4 className="text-2xl font-black text-slate-900 mt-1">{value}</h4>
    </div>
    <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-lg ${positive ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
      {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
      {trend}
    </div>
  </div>
);

const NodeItem = ({ name, status, load }: any) => (
  <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer group">
    <div className="flex items-center gap-3">
      <div className={`h-2 w-2 rounded-full ${status === 'Healthy' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
      <span className="text-sm font-semibold text-slate-700">{name}</span>
    </div>
    <span className="text-xs font-mono text-slate-400 group-hover:text-slate-900">{load}</span>
  </div>
);

export default DashboardUI;