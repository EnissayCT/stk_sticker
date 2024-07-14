import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Nav';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import ProductList from './components/ProductsList';
import HowItWorks from './components/HowItWorks';
import MyForm from './components/formTest';


const Home = () => (
  <main className='relative'>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>

  </main>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/test" element={<MyForm />} />
      </Routes>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </Router>
  );
};

export default App;
