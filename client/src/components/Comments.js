import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import Axios from "axios";


const Comments = (props) => {
  const [comments, setComments] = useState([]);
  
  const getComments = async () => {
    try {
      let response = await Axios.get(`/api/answers/${props.answerID}/comments`)
      setComments(response.data);
    } catch(error) {
      alert("Couldn't get them comments")
    }
  }

  const addComment = (comment) => {
    Axios
    .post(`/api/answers/${props.answerID}/comments`, comment)
    .then((res) => {
      setComments([...comments, res.data]);
    })
    .catch((err) => {
      alert("No comment posted")
    });
  }
  

  useEffect(() => {
    getComments();
  }, []);

  const deleteComment = (id) => {
    Axios.delete(`/api/answers/${props.answerID}/comments/${id}`, {params:{id:id}}).then(res => {
      console.log(res);

      setComments(comments.filter((comment) => comment.id !== id));
    })
  };

  const renderComments = () => {
    return comments.map((com) => (
      <div key={com.id}>
        <p dangerouslySetInnerHTML={{__html: com.body}}></p>
        <button variant="danger" onClick={() => deleteComment(com.id)}>Delete Comment</button>
      </div>
      
    ));
  };





  return(
    <div>
      <p>Comments:</p>
      <p>{renderComments()}</p>
      <CommentForm answerID={props.answerID} addComment={addComment} userID={props.userID} />
      
    </div>
  )

};

export default Comments;