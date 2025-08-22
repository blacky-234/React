import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/Learning/Route/home/home";
import { Navbar } from './components/Learning/Route/Navbar/navbar';
import './components/Learning/Route/css/route.css';
import { OrderSummary } from './components/Learning/Route/OrderSummary';
import { NoMatch } from './components/Learning/Route/NoMatch';
import { Products } from './components/Learning/Route/product/Product';
import { FeatureProducts } from './components/Learning/Route/product/FeatureProducts';
import { NewProducts } from './components/Learning/Route/product/NewProducts';
import { Users } from './components/Learning/Route/user/Users';
import { UserDetails } from './components/Learning/Route/user/UserDeatails';
import { Admin } from './components/Learning/Route/user/Admin';
import { Profile } from './components/Learning/Route/user/Profile';
import React from 'react';

const LazyAbout = React.lazy(() => import('./components/Learning/Route/about/About'));

function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeatureProducts />} /> 
          <Route path='featured' element={<FeatureProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={<Profile />} />
      </Routes>
    </>
  )
}


export default App;

/**
 * <Route index element={<FeatureProducts />} /> url:localhost:3000/products
 * default loading features
 */