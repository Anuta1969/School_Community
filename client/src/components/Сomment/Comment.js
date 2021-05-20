import React,{useState} from 'react';
import './comment.css'

function Comment({comment}) {
  // console.log(comment.text);
  const[button, setButton] = useState(false)
  
  const commentObj = comment.text.split('')
  // commentObj.length>50 && setButton(true)

  let commentFiveword = commentObj.splice(0,50)
console.log(comment);

  const [textTrue, setTextFalse] = useState(false)
  const allcommentHandler =() =>{   
    setTextFalse(true)
  }


  return (
    <div className="comment-title">
      <div className="comment-item comment-item-text "> 
      {((commentObj.length>=0) && !textTrue) && commentFiveword.join('')}
      {textTrue && comment.text}
       </div>
      {commentObj.length>=49 &&<div className="comment-item comment-item__btn" onClick={allcommentHandler}>Подробнее</div>}
      
      <div className="comment-item-User"><a href={`/profile/${comment.author}`} >{comment.authorName}</a></div>
    </div>
  );
}

export default Comment;


