import React from 'react';
import Topbar from './topbar';
import Footer from './footer';
import './styles/main.scss';

const Layout = ({ children }) => {
  return(
  <main style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, minHeight: '100vh' }}>
      <Topbar />
      { children }
    </div>
    <Footer />
  </main>
  );
}
export default Layout;