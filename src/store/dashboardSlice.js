import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { categories: [] },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) category.widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
  },
});

export const { setCategories, addWidget, removeWidget } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
