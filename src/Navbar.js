import React from 'react';

const Navbar= () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
    <div className="container-fluid">
      <div className="navbar-wrapper">
        <a className="navbar-brand" href="">Market Analysis</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <form className="navbar-form">
          <div className="input-group no-border">
            <input type="text" className="form-control" placeholder="Search..."/>
            <button type="submit" className="btn btn-white btn-round btn-just-icon">
              <i className="material-icons">search</i>
              <div className="ripple-container"></div>
            </button>
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="material-icons">person</i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
              <a className="dropdown-item" href="#">Profile</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
