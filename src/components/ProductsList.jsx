import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../assets/products.json';

const ProductList = () => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setFilter(category);
    } else {
      setFilter('All');
    }
  }, [location.search]);

  const filteredProducts = products.filter(product => {
    if (filter === 'All') return true;
    return product.category === filter;
  });

  return (
    <div>
      <div className="flex justify-center space-x-4 my-4">
        <button onClick={() => setFilter('All')} className="btn btn-ghost bg-red-600 text-white text-xl">All</button>
        <button onClick={() => setFilter('Men')} className="btn btn-ghost bg-red-600 text-white text-xl">Men</button>
        <button onClick={() => setFilter('Women')} className="btn btn-ghost bg-red-600 text-white text-xl">Women</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} props={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
