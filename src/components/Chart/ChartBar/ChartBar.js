import React from 'react';

import './ChartBar.css';

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = '0%';

  //* Gives the percentage between 0 and 100, by which this bar should be filled
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className='chart-bar'>
      <div className="chart-bar__inner">
        {/* "style" property wants a JS Object as a value */}
        <div className="chart-bar__fill" style={{ height: barFillHeight }}>

        </div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;