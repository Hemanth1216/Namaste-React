import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload.id;
      const index = state.items.findIndex((item) => {
        return item.item.id === itemId;
      });

      if (index !== -1) {
        state.items[index].count++;
      } else {
        const data = {
          item: action.payload,
          count: 1,
        };
        state.items.push(data);
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item) => {
        return item.item.id === itemId;
      });
      if (state.items[index].count == 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].count--;
      }
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
