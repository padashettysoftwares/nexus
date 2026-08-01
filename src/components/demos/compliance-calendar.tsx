"use client";

import { Calendar as CalendarIcon, Clock } from "lucide-react";

export function ComplianceCalendar() {
  const dates = [
    { date: "15", month: "Aug", title: "Provident Fund (EPF) Return", status: "upcoming", type: "Labor" },
    { date: "20", month: "Aug", title: "GSTR-3B Filing (Monthly)", status: "upcoming", type: "Tax" },
    { date: "30", month: "Aug", title: "Advance Tax Payment (Q2)", status: "warning", type: "Tax" },
    { date: "05", month: "Sep", title: "TDS/TCS Payment", status: "pending", type: "Tax" },
    { date: "30", month: "Sep", title: "ROC Annual Filing (AOC-4)", status: "pending", type: "Corporate" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-border shadow-card overflow-hidden">
      <div className="bg-primary p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <CalendarIcon className="w-6 h-6 text-secondary" />
          <h3 className="text-2xl font-bold font-plus-jakarta">Compliance Calendar</h3>
        </div>
        <p className="text-white/80">Never miss a critical deadline again.</p>
      </div>

      <div className="p-8">
        <div className="space-y-6">
          {dates.map((item, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-surface-alt border border-border shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                <span className="text-lg font-bold leading-none">{item.date}</span>
                <span className="text-xs font-medium uppercase tracking-wider">{item.month}</span>
              </div>
              
              <div className="flex-grow pb-6 border-b border-border border-dashed last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-text-primary text-lg">{item.title}</h4>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                    item.status === 'upcoming' ? 'bg-primary/10 text-primary' : 
                    item.status === 'warning' ? 'bg-secondary/20 text-secondary' : 
                    'bg-surface-alt text-text-secondary border border-border'
                  }`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-secondary mt-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-border" />
                    {item.type} Compliance
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Alerts ON
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
