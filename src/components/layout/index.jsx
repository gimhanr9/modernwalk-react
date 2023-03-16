import React from 'react';
import Header from './Header';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className='main-content'>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
