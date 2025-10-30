import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage() {
return (
<div className="landing" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1400&q=80)', backgroundSize: 'cover' }}>
<div className="landing-content">
<h1>Plant Shop</h1>
<p>Your home for beautiful houseplants. We curate quality plants and offer easy delivery.</p>
<Link to="/products"><button className="cta">Get Started</button></Link>
</div>
</div>
);
}