import React, {useState} from 'react';
import ReactQuill from 'react-quill';
// import axios from 'axios';

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(value) {
    this.setState({ body: value })
  }
 
  render() {
    return (
      <ReactQuill
      theme="snow"
      onChange={this.handleChange}
      label="Body"
      name="body"
      type="text"
      value={this.state.body}
      // style={{ height: 500 }}
      />
    )
  }
}

export default Editor;




// const Editor = ({history}) => {
//   const [body, setBody] = useState("")

//   // constructor(props) {
//   //   super(props)
//   //   this.state = { body: '' } 

//   //   this.handleChange = this.handleChange.bind(this)
//   // }
 
//   const handleChange =(html) => {
//     this.setState({ body: html });

//     html.preventDefault()
//     axios
//       .post("/api/questions", {body})
//       .then((res) => {
//         history.push("/questions");
//       })
//       .catch((err) => {
      
//         console.log("Error problem posting");
//         alert("Error saving question");
//       });
//   }
 
   
//     return (
//       <ReactQuill
//         theme="snow"
//         onChange={this.handleChange}
//         label="Body"
//         name="body"
//         type="text"
//         value={this.state.body}
//         style={{ height: 200 }}
//       />
//     )
  
// }


// export default Editor;