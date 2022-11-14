import React, { useState } from 'react'
import { AiOutlineLike ,AiFillLike} from 'react-icons/ai';

function BtnLike() {
    const [isLike, setIsLike] = useState<boolean>(true);
    const handleClick = () =>{
        setIsLike(!isLike);
    }

  return (
    <div onClick={handleClick} style={{fontSize: "50px"}}>
        {isLike ? <AiOutlineLike/> : <AiFillLike/>}
    </div>
  )
}

export default BtnLike