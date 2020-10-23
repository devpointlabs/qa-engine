import React, { useState, useEffect } from 'react';
import Axios from "axios";


const Button = ({ increment, onClick }) => {

  const handleClick = () => {
    // debugger
    onClick(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

const Upvote = (props) => {


    //hand the id from 
    //Alter number-- 
    // .then((res) => {
    //   alert("Voted");
    // })
    // .catch((err) => {
    //   alert("Error Voting")
    // });
  useEffect(() => {
    Axios.get(`/api/question/${props.qId}/get_vote`)
    // /question/:id/get_vote
      .then(res => {
      setCount(res.data)
      })
      .catch((err) => {
        console.log(err)
    })
    // setCount(props.upvote)
  }, [])
  
  const [count, setCount] = useState()
  
  const incrementCount = increment => {
    // debugger
    setCount(count + increment)
    Axios
    .put(`/api/question/${props.qId}/vote`)
      .then(res => { 
        if (count === res.data) {
          alert("already voted")
        }
        setCount(res.data)
    })
    .catch((err) => {
      alert('already voted')
      console.log(err)
   })
      
    // toggleLoaded();
    // Axios
    //   .put(`/api/questions/${props.qId}`, {
    //     question: { upvote: props.question.upvote + 1 },
    //   })
    //   .then((res) => {
    //     // debugger
    //     const newCount = res.data.upvote;
    //     setCount(newCount);
    //   });
  };

  return (
    <div>
      <Button increment={1} onClick={incrementCount} />
      {count}
    </div>
  )
}




export default Upvote;