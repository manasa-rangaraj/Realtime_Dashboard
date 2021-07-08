import React from 'react';
import Stock from './Stock';
import Plot2 from './Plot2'

const Content= () => {
  return (
    <div className="content">
        <div className="container-fluid">
          <div className="row">
          <div className="column">
            <h4 className="card-title"><Stock></Stock></h4>
            </div>
            <div className="column">
            <h4 className="card-title"><Plot2></Plot2></h4>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Content;
