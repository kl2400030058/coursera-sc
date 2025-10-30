import React from 'react';


function App() {
return (
<div className="app-root">
<Header />
<main className="main-content">
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/products" element={<ProductList />} />
<Route path="/cart" element={<CartPage />} />
</Routes>
</main>
</div>
);
}


export default App;