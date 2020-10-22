import React from "react";

const Comment = (props) => {

  return (
    <div>
      <p dangerouslySetInnerHTML={{__html:props.body}}></p>
    </div>
  )
}

export default Comment;