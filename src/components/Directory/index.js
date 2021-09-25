import React from "react";
import "./styles.scss";
import ShopMen from "../../assets/shopMens.jpg";
import ShopWomen from "../../assets/shopWomens.jpg";

function Directory() {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url('${ShopMen}')` }}>
          <a href=".">Shop Men</a>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url('${ShopWomen}')` }}
        >
            <a href=".">Shop Women</a>
        </div>
      </div>
    </div>
  );
}

export default Directory;
