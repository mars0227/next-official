import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <>
    <Header fixed />
      {props.children}
    <Footer />
  </>  
);

export default Layout;