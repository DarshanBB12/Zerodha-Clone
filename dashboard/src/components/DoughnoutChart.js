import React from "react";

export const DoughnutChart = ({ data }) => {
  return (
    <div className="doughnut-chart">
      <h4>Doughnut Chart</h4>
      <p>Labels: {data?.labels?.length || 0}</p>
    </div>
  );
};

export default DoughnutChart;
