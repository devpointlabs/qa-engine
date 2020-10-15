import React, {useState} from "react";
import Axios from "axios";

const AnswerForm = (props) => {

  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAnswer({body: body, question_id: props.questionID, user_id: props.user.id })
    // Axios
    //   .post(`/api/questions/${questionID}/answers`, {body: body, question_id: questionID, user_id: user.id })
    //   .then((res) => {
    //     history.push(res.data)
    //   })
    //   .catch((err) =>{
    //     alert("Something went wrong");
    //   });
  };

return (
<>
  <form onSubmit={handleSubmit}>
    <input 
      label="Body"
      placeholder="Answer question here"
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



export default AnswerForm;

