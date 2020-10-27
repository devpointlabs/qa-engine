import React, {useState} from "react";
import Axios from "axios";
import ReactQuill, { Quill, Toolbar } from 'react-quill';
import QuestionForm from './QuestionForm';

const CommentForm = (props) => {

  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      props.addComment({body: body, user_id: props.user.id, first_name: props.user.first_name, last_name: props.user.last_name, answer_id: props.answerID, upvote: 0 })
  };

  const handleQuillChange = (html) => {
    setBody(html);
}

return (
<>
  <form onSubmit={handleSubmit}>
    <ReactQuill
      theme="snow"
      onChange={handleQuillChange}
      label="Body"
      placeholder="Enter Comment Here"
      name="body"
      type="text"
      required
      value={body}
      formats={QuestionForm.formats}
      modules={QuestionForm.modules}
      />
    <button>Submit</button>
  </form>
</>
)
}



export default CommentForm;


{/* <input 
  label="Body"
  placeholder="Enter comment here"
  type="text"
  value={body}
  onChange={(e) => setBody(e.target.value)}
  required   */}