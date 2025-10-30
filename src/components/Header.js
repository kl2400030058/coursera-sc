import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
const totalQty = useSelector((state) => state.cart.totalQuantity);
const location = useLocation();


return (
<header className="header">
<div className="header-left">
<Link to="/" className="brand">Plant Shop</Link>
</div>
<nav className="nav">
<Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
<Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
🛒 <span className="cart-count">{totalQty}</span>
</Link>
</nav>
</header>
);
}