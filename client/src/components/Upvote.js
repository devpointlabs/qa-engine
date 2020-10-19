import React, { useState } from 'react';


const Button = ({ increment, onClick }) => {

  const handleClick = () => {
    onClick(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

const Upvote = () => {
  const [count, setCount] = useState(0)

  const incrementCount= increment => {
    setCount(count + increment)
  }

  return (
    <div>
      <Button increment={1} onClick={incrementCount} />
      {count}
    </div>
  )
}




export default Upvote;