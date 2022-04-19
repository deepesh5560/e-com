import React from "react";
import flag from "./pics/flag.png";
import vec1 from "./pics/Vector1.png";
import vec2 from "./pics/Vector 2.png";
import vec3 from "./pics/Vector 3.png";
import vec4 from "./pics/Vector4.png";

function Nav1() {
  return (
    <div className="nav1-box">
      <nav className="nav1">
        <img
          src={flag}
          alt="flag"
          height={28}
          width={28}
          className="flag-img"
        />

        <div className="drop">English</div>
        <hr className="hr1" />

        <div className="currency">USD</div>

        <img src={vec1} className="vec-1" alt="vec" />
        <div className="vec-1-text">My Account</div>
        <hr className="hr-2" />
        <img src={vec2} className="vec-2" alt="vec" />
        <div className="vec-2-text">Wishlist</div>
        <hr className="hr-3" />
        <img src={vec3} alt="vec" className="vec-3" />
        <div className="vec-3-text">Checkout</div>
        <hr className="hr-4" />
        <img src={vec4} alt="vec" className="vec-4" />
        <div className="vec-4-text">Log in</div>
      </nav>
    </div>
  );
}

export default Nav1;
