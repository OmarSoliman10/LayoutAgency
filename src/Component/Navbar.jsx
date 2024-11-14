import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/img/Asset 1.png';

export default function Navbar() {

  const handleNavItemClick = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <Link to='/' style={{width: "20%"}}>
            <img src={Logo} alt="Logo" style={{ maxWidth: "100%", height: "auto" }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 fw-bolder fs-5">
              <li className="nav-item ms-3">
                <Link className="nav-link" to="/" onClick={handleNavItemClick}>الرئيسية</Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link" to="OfferYou" onClick={handleNavItemClick}>اعمالنا</Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link" to="service" onClick={handleNavItemClick}>خدماتنا</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="contact" onClick={handleNavItemClick}>تواصل معنا</Link>
              </li>
            </ul>
          </div>

          <Link className="btn-custom" to="contact">تواصل معنا</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon m-0"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
