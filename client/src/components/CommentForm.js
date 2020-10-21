import React, {useState} from "react";
import Axios from "axios";

const CommentForm = (props) => {

  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      props.addComment({body: body, user_id: props.user.id, answer_id: props.answerID})
  };

return (
<>
  <form onSubmit={handleSubmit}>
    <input 
      label="Body"
      placeholder="Enter comment here"
      type="text"
      value={body}
      onChange={(e) => setBody(e.target.value)}
      required  
    />
    <button>Submit</button>
  </form>
</>
)
}



export default CommentForm;