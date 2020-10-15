import React, {useState} from "react";
import Axios from "axios";

const AnswerForm = ({history, question}) => {

  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    Axios
      .post(`/api/questions/${question.id}/answers`, {body})
      .then((res) => {
        history.push(res.data)
      });
  }

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

