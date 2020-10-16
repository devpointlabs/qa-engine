import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import Axios from "axios"


const Comment = (answer) => {
  const [comments, setComments] = useState([]);
  
  const getComments = async () => {
    try {
      let response = await Axios.get(`/api/answers/${answer.answer}/comments`)
      setComments(response.data);
    } catch(error) {
      alert("Couldn't get them comments")
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  const renderComments = () => {
    return comments.map((com) => (
      <p>{com.body}</p>
    ));
  };

  // const addComment = (comment) => {
  //   Axios
  //   .post(`api/questions/${question.id}/answers/${answer.id}/comments`, comment)
  //   .then((res) => {
  //     setComments([...comments, res.data]);
  //   })
  //   .catch((err) => {
  //     alert("No comment posted")
  //   });
  // }


  return(
    <div>
      <p>Comments:</p>
      <p>{renderComments()}</p>
    </div>
  )

};

export default Comment;