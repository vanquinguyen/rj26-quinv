import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function BtnRating() {
  const [star, setStar] = useState(0);
  const arr = [1, 2, 3, 4, 5];
  const handleClick = (item: number) => {
    setStar(item);
  };
  return (
    <div>
      {arr.map((item) => {
        return (
          <span key={item} onMouseEnter={() => handleClick(item)} style={{fontSize: "50px"}}>
            {item <= star ? <AiFillStar style={{color: "orange"}} /> : <AiOutlineStar />}
          </span>
        );
      })}
    </div>
  );
}

export default BtnRating;
