import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  addWidget,
  removeWidget,
} from "../store/dashboardSlice";
import Category from "./Category";
import SearchBar from "./SearchBar";

import data from "../data/dashboardData.json";
import AddWidgetForm from "./AddWidgetForm";

function Dashboard() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(setCategories(data.categories));
  }, [dispatch]);

  const handleAddWidget = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  const handleSaveWidget = ({ name, text }) => {
    if (selectedCategory) {
      dispatch(
        addWidget({
          categoryId: selectedCategory,
          widget: {
            id: Date.now().toString(),
            name,
            text,
          },
        })
      );
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  return (
    <div className="dashboard">
      <div className="header-section">
        <h1>Dynamic Dashboard</h1>
        <div className="header-subsection">
          <SearchBar search={search} setSearch={setSearch} />

          <button onClick={() => handleAddWidget("choose")}>
            + Add Widget
          </button>
        </div>
      </div>

      {categories.map((category) => (
        <Category
          key={category.id}
          category={{
            ...category,
            widgets: category.widgets.filter((w) =>
              w.name.toLowerCase().includes(search.toLowerCase())
            ),
          }}
          onAddWidget={handleAddWidget}
          onRemoveWidget={handleRemoveWidget}
        />
      ))}

      <AddWidgetForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveWidget}
      />
    </div>
  );
}

export default Dashboard;
