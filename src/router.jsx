import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProductLayout from './layouts/ProductLayout';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
        <Route exact path="/products">
          <ProductLayout>
            <ProductListing />
          </ProductLayout>
        </Route>
        <Route path="/products/:id">
          <ProductLayout>
            <ProductDetails />
          </ProductLayout>
        </Route>
        <Route path="/about">
          <MainLayout>
            <AboutUs />
          </MainLayout>
        </Route>
        <Route path="/contact">
          <MainLayout>
            <ContactUs />
          </MainLayout>
        </Route>
        {/* Add more routes here if needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
