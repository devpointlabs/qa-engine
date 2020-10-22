import React, {useState} from 'react';
import axios from 'axios';
import ReactQuill, { Quill, Toolbar } from 'react-quill';
// import {AuthConsumer} from '../providers/AuthProvider';

const QuestionForm = (props) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    // history.addQuestion({body: body, title:title})
    props.addQuestion({title: title, body: body});
  }

    const handleQuillChange = (html) => {
  	  setBody(html);
  }




    //     console.log("Error problem posting");
    //     alert("Error saving question");
    //   });
  
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
        <ReactQuill
          theme="snow"
          onChange={handleQuillChange}
          label="Body"
          placeholder="Ask your Question here"
          name="body"
          type="text"
          value={body}
          formats={QuestionForm.formats}
          modules={QuestionForm.modules}
          // style={{ height: 500 }}
        />
        <br />
        <br />
         <button>Submit</button>
      </form>
    </>
  );
  };


export default QuestionForm;

QuestionForm.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}],
    
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link']
  
  ],
}

QuestionForm.formats = [
  'header',  
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet',
  'link'
];