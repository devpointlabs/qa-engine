import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Button, Icon, Label, Image } from 'semantic-ui-react'




const Upvote = (props) => {

  const [count, setCount] = useState()

    //hand the id from 
    //Alter number-- 
    // .then((res) => {
    //   alert("Voted");
    // })
    // .catch((err) => {
    //   alert("Error Voting")
    // });
  useEffect(() => {
    Axios.get(`/api/${props.mString}/${props.mId}/get_vote`)
    // /question/:id/get_vote
      .then(res => {
      setCount(res.data)
      })
      .catch((err) => {
        console.log(err)
    })
    // setCount(props.upvote)
  }, [])
  
  
  
  const incrementCount = increment => {
    // debugger
    setCount(count + increment)
    Axios
    .put(`/api/${props.mString}/${props.mId}/vote`)
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

  const LikeButton = ({ increment, onClick}) => {

  
 
    const handleClick = () => {
      // debugger
      onClick(increment)
    }
    
    return(
      <div>
      <Button onClick={handleClick} as='div' labelPosition='right'>
        <Button size='mini' color='red'>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic color='red' pointing='left'>
       {count}
        </Label>
      </Button>
      </div>
      )
    // return <button onClick={handleClick}>+{increment}</button>
  }

  return (
    <div>
      <LikeButton size='mini' increment={1} onClick={incrementCount}>{count}</LikeButton>
      
    </div>
  )
}






export default Upvote;