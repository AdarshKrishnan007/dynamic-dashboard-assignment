import React from "react";
import Widget from "./Widget";

function Category({ category, onAddWidget, onRemoveWidget }) {
  return (
    <div className="category">
      <h2>{category.name}</h2>

      <div className="widget-list">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => onRemoveWidget(category.id, widget.id)}
          />
        ))}
        {category.widgets.length < 3 && (
          <button
            onClick={() => onAddWidget(category.id)}
            className="widget-list-button"
          >
            + Add Widget
          </button>
        )}
      </div>
    </div>
  );
}

export default Category;
