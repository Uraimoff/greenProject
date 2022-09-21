import React from "react";
// import flower from "./../../assets/png/barberton.png"
import "./Cardstyle.css";

function Card({ flower, Name, price, nonprice }) {
  return (
    <>
      <div>
        <div className="bgOfImg">
          <img src={flower} alt="flower" />
        </div>
        <div className="stOfTxt">{Name}</div>
        <div className="gg">
          <div className="price">${price}</div>
          <div className="nonprice">${nonprice}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
