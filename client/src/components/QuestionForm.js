import React, {useState} from 'react';
import axios from 'axios';
// import {AuthConsumer} from '../providers/AuthProvider';

const QuestionForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addQuestion({body: body, title:title})
    // axios
    //   .post("/api/questions", {title, body})
    //   .then((res) => {
    //     history.push("/questions");
    //   })
    //   .catch((err) => {
      
    //     console.log("Error problem posting");
    //     alert("Error saving question");
    //   });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          label="Title"
          placeholder="Question Title"
          type="string"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required  
        />
        <input 
          label="Body"
          placeholder="Describe your question"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required  
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default QuestionForm;