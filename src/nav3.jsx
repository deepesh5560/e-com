import React from "react";
import vec9 from "./pics/vector9.png";

function Nav3() {
  return (
    <div>
      <nav className="nav-3">
        <img src={vec9} alt="vec" className="vec-9" />
        <h3 className="nav3-item1">SHOP BY CATAGORIES</h3>
        <hr className="hr-11" />
        <h3 className="nav3-item2">Men</h3>
        <hr className="hr-12" />
        <h3 className="nav3-item3">Woman</h3>
        <hr className="hr-13" />
        <h3 className="nav3-item4">Kidswear</h3>
        <hr className="hr-14" />
        <h3 className="nav3-item5">Electronics</h3>
        <hr className="hr-15" />
        <h3 className="nav3-item6">Sports,Fitness & Outdoor</h3>
        <hr className="hr-16" />
        <h3 className="nav3-item7">Best Seller</h3>
        <hr className="hr-17" />
        <h3 className="nav3-item8">Computer & Smartphones</h3>

        <hr className="hr-18" />
        <h3 className="nav3-item9">Deals</h3>
      </nav>
    </div>
  );
}
export default Nav3;
