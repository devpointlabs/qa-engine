import React, { useState, useEffect, useContext } from 'react';
import CommentForm from './CommentForm';
import Axios from "axios";
import Comment from './Comment';
import { AuthContext } from "../providers/AuthProvider";



const Comments = (props) => {
  const { user } = useContext(AuthContext);
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


  const isUserMatching = (userId, comId) => {
    if (props.authUser.id === userId){
     return <button variant="danger" onClick={() => deleteComment(comId)}>Delete Comment</button>;
    }
  }

//   const handleQuillChange = (html) => {
//     setBody(html);
// }


  const renderComments = () => {
    return comments.map((com) => (
      <div key={com.id}>
        <Comment {...com} >{com.body}</Comment>
        {isUserMatching(com.user_id, com.id)}
      </div>
      
    ));
  };





  return(
    <div>
      <p>Comments: </p>
      {renderComments()}
      
      <CommentForm answerID={props.answerID} addComment={addComment} user={user} />
      
    </div>
  )

};

export default Comments;