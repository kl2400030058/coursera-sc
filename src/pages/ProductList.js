import React, { useMemo } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';


export default function ProductList() {
const grouped = useMemo(() => {
return products.reduce((acc, p) => {
if (!acc[p.category]) acc[p.category] = [];
acc[p.category].push(p);
return acc;
}, {});
}, []);


return (
<div className="product-list">
<h2>Products</h2>
{Object.keys(grouped).map((category) => (
<section key={category} className="category-section">
<h3>{category}</h3>
<div className="grid">
{grouped[category].map((p) => (
<ProductCard product={p} key={p.id} />
))}
</div>
</section>
))}
</div>
);
}