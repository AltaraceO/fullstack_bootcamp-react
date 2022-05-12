import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((el) => el.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
          key={point.label}
        />
      ))}
    </div>
  );
};
