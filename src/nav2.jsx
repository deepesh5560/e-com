import React from "react";
import vec5 from "./pics/Vector5.png";
import vec6 from "./pics/vector6.png";
import vec7 from "./pics/vector7.png";
import vec8 from "./pics/vector8.png";

function Nav2() {
  return (
    <div>
      <nav className="nav-2">
        <img src={vec5} alt=" vec" className="vec-5" />
        <img src={vec6} alt="vec" className="vec-6" />
        <div className="hello">hello</div>
        <div className="location-text">Select your address</div>

        <input type="search" className="search" />
        <img src={vec7} alt="vec" className="vec-7" />
        <div className="vec8-box">
          <img src={vec8} alt="vec" className="vec-8" />
        </div>
        <div>
          <h3 className="cart-text1">SHOPPING CART</h3>
          <p className="cart-text2">0 Item (s)</p>
        </div>
      </nav>
    </div>
  );
}

export default Nav2;
