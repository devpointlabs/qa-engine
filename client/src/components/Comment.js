import React from "react";

const Comment = (props) => {

  return (
    <div>

      <p>User {props.first_name}:</p>
      <p dangerouslySetInnerHTML={{__html:props.body}}></p>

    </div>
  )
}

export default Comment;