import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
addToCart(state, action) {
const product = action.payload;
const existing = state.items.find((i) => i.id === product.id);
if (!existing) {
state.items.push({ ...product, quantity: 1 });
}
recalcTotals(state);
},
increaseQuantity(state, action) {
const id = action.payload;
const item = state.items.find((i) => i.id === id);
if (item) item.quantity += 1;
recalcTotals(state);
},
decreaseQuantity(state, action) {
const id = action.payload;
const item = state.items.find((i) => i.id === id);
if (item) {
item.quantity -= 1;
if (item.quantity <= 0) {
state.items = state.items.filter((i) => i.id !== id);
}
}
recalcTotals(state);
},
removeItem(state, action) {
const id = action.payload;
state.items = state.items.filter((i) => i.id !== id);
recalcTotals(state);
},
clearCart(state) {
state.items = [];
recalcTotals(state);
},
},
});


export const { addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;