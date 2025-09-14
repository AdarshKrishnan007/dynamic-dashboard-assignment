import React from "react";
import PieChartWidget from "./PieChartWidget";
import BarChartWidget from "./BarChartWidget";

function Widget({ widget, onRemove }) {
  return (
    <div className="widget-card">
      <h4>{widget.name}</h4>

      {widget.type === "bar" && <BarChartWidget />}
      {widget.type === "pie" && <PieChartWidget />}

      {widget.type === "text" && <p>{widget.text}</p>}

      <button onClick={onRemove}>✖</button>
    </div>
  );
}

export default Widget;
