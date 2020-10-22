import React, { useState } from 'react';
import Axios from "axios";


const Button = ({ increment, onClick }) => {

  const handleClick = () => {
    onClick(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

const Upvote = () => {


    //hand the id from 

    //Alter number-- 
    // .then((res) => {
    //   alert("Voted");
    // })
    // .catch((err) => {
    //   alert("Error Voting")
    // });


  const [count, setCount] = useState(0)

  const incrementCount= increment => {
    setCount(count + increment)
    Axios
    .patch(`/api/question/vote`)
  }

  return (
    <div>
      <Button increment={1} onClick={incrementCount} />
      {count}
    </div>
  )
}




export default Upvote;