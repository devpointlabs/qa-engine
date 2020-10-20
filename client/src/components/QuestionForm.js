import React, {useState} from 'react';
import axios from 'axios';
// import Editor from './Editor'
import ReactQuill, {Quill, Toolbar} from 'react-quill';
// import {AuthConsumer} from '../providers/AuthProvider';

<<<<<<< HEAD
// let Inline = Quill.import('blots/inline');
// class BoldBlot extends Inline { }
// BoldBlot.blotName = 'bold';
// BoldBlot.tagName = 'strong';
// Quill.register('formats/bold', BoldBlot);
// const formats = ["bold", "code-block"]

const QuestionForm = ({history}) => {
=======
const QuestionForm = (props) => {
>>>>>>> 8184bd1ff0a3297d4606e37f9ebe9dd8603d3843
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
      
<<<<<<< HEAD
        console.log("Error problem posting");
        alert("Error saving question");
      });
  }
    const handleQuillChange = (html) => {
  	  setBody(html);
  }




=======
    //     console.log("Error problem posting");
    //     alert("Error saving question");
    //   });
  };
>>>>>>> 8184bd1ff0a3297d4606e37f9ebe9dd8603d3843
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
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link'],
  
  ],
}

QuestionForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet', 'indent',
  'link'
]