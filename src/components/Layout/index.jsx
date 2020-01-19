import React from 'react';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';

const Layout = ({ children }) => (
  <div className="container-fluid">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
