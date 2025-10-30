import React from 'react';


export default function ProductCard({ product }) {
const dispatch = useDispatch();
const inCart = useSelector((state) => state.cart.items.some(i => i.id === product.id));


const handleAdd = () => {
if (!inCart) dispatch(addToCart(product));
};


return (
<div className="product-card">
<img src={product.thumbnail} alt={product.name} className="thumb" />
<h3>{product.name}</h3>
<p>${product.price.toFixed(2)}</p>
<button onClick={handleAdd} disabled={inCart} className="add-btn">
{inCart ? 'Added' : 'Add to Cart'}
</button>
</div>
);
}