import StatItem from 'components/StatItem/StatItem';
import React from 'react';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
