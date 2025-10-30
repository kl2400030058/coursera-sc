import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem, clearCart } from '../features/cart/cartSlice';


export default function CartPage() {
const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
const dispatch = useDispatch();


return (
<div className="cart-page">
<h2>Your Cart</h2>
<p>Total items: {totalQuantity}</p>
<p>Total cost: ${totalPrice.toFixed(2)}</p>


<div className="cart-items">
{items.length === 0 && <p>Your cart is empty.</p>}
{items.map((it) => (
<div key={it.id} className="cart-item">
<img src={it.thumbnail} alt={it.name} className="thumb-small" />
<div className="info">
<h4>{it.name}</h4>
<p>Unit price: ${it.price.toFixed(2)}</p>
<div className="qty-controls">
<button onClick={() => dispatch(decreaseQuantity(it.id))}>-</button>
<span>{it.quantity}</span>
<button onClick={() => dispatch(increaseQuantity(it.id))}>+</button>
</div>
</div>
<div className="actions">
<button onClick={() => dispatch(removeItem(it.id))}>Delete</button>
</div>
</div>
))}
</div>


<div className="cart-actions">
<button onClick={() => alert('Coming Soon!')}>Checkout</button>
<button onClick={() => dispatch(clearCart())}>Clear Cart</button>
</div>
</div>
);
}