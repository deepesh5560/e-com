import React from "react";
import q1 from "./pics/bubble.png";
import q2 from "./pics/truck.png";
import q3 from "./pics/jjk.png";
import q4 from "./pics/business.png";

function Quality() {
  return (
    <div className="quality">
      <div className="q-item-box">
        <div>
          <img src={q2} alt="quality" className="q-pic" />
        </div>
        <div className="item-text">
          <p className="item-h3"> FREE DELIVERY</p>
          <p className="item-p"> for all orders above</p>
        </div>
      </div>

      <div className="q-item-box">
        <div>
          <img src={q1} alt="quality" className="q-pic" />
        </div>
        <div className="item-text">
          <p className="item-h3">24/7 SERVICE CHAT</p>
          <p className="item-p">Delicated 24/7 support</p>
        </div>
      </div>

      <div className="q-item-box">
        <div>
          <img src={q4} alt="quality" className="q-pic" />
        </div>
        <div className="item-text">
          <p className="item-h3">FRIENDLY SERVICES</p>
          <p className="item-p"> 30 day satisfaction gurantee</p>
        </div>
      </div>

      <div className="q-item-box">
        <div>
          <img src={q3} alt="quality" className="q-pic" />
        </div>
        <div className="item-text">
          <p className="item-h3">SAFE PAYMENT</p>
          <p className="item-p">100% secure payment</p>
        </div>
      </div>
    </div>
  );
}

export default Quality;
