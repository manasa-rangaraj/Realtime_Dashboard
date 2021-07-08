import React from 'react';
import Navbar from './Navbar';
import Content from './Content';

const MainPanel= () => {
  return (
    <div className="main-panel">
      <Navbar/>
      <Content/>
    </div>
  );
}

export default MainPanel;
