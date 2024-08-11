
import React from 'react';

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>Admin Panel</h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>© 2024 Your Company</p>
    </footer>
  </div>
);

export default Layout;
