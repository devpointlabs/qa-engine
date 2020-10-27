import React, {useState} from "react";
import Axios from "axios";
import ReactQuill, { Quill, Toolbar } from 'react-quill';
import QuestionForm from './QuestionForm';

const AnswerForm = (props) => {

  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAnswer({body: body, question_id: props.questionID, user_id: props.user.id, first_name: props.user.first_name, last_name: props.user.last_name, upvote: 0 })
    // Axios
    //   .post(`/api/questions/${questionID}/answers`, {body: body, question_id: questionID, user_id: user.id })
    //   .then((res) => {
    //     history.push(res.data)
    //   })
    //   .catch((err) =>{
    //     alert("Something went wrong");
    //   });
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
    placeholder="Enter Answer Here"
    name="body"
    type="text"
    required
    value={body}
    formats={QuestionForm.formats}
    modules={QuestionForm.modules}
          // style={{ height: 500 }}
        />
    <button>Submit</button>
  </form>
</>
)
}



export default AnswerForm;


{/* <input 
  label="Body"
  placeholder="Enter Answer Here"
  type="text"
  value={body}
  onChange={(e) => setBody(e.target.value)}
  required  
  /> */}