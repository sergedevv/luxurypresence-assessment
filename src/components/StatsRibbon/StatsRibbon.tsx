import React from 'react';
import './StatsRibbon.css';

interface StatMetric {
  value: string;
  label: string;
}

const STATS_DATA: StatMetric[] = [
  { value: '30+', label: 'Years of Experience' },
  { value: '$28.5M', label: 'In Volume (2021)' },
  { value: '90+', label: 'Happy Clients' },
  { value: '#1', label: 'Residential Sales Last 5 Years' },
];

export const StatsRibbon: React.FC = () => {
  return (
    <section className="stats-ribbon" aria-label="Key Performance Statistics">
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-number">
                {stat.value === '#1' ? <><span aria-hidden="true">#</span><span className="stat-rank-number">1</span></> : stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
