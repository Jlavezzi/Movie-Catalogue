import React from 'react';
import Header from './Header.layout';
import Footer from './Footer.layout';

function Layout({children}) {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main> 
    </div>
  )
}

export default Layout