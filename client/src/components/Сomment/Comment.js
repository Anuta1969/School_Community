import React,{useState} from 'react';
import './comment.css'

function Comment({comment}) {
  // console.log(comment.text);
  const[textComment, setTextComment]= useState()
  // const[commentObj]
  const allcommentHandler =() =>{
    const commentObj = comment.text.split('')
    console.log(commentObj);
    let commenObjText
    let commentReturnText
   
    if(commentObj.length>50){
      commenObjText = commentObj.splice(0,50)
      commentReturnText = commenObjText.join("")
      setTextComment(commentReturnText)
    }
    // console.log(commentObj);
    
  }


  return (
    <div className="comment-title">
      <div className="comment-item comment-item-text "> 
      {/* {commentObj.length>50 && textComment} */}
       </div>
      <div className="comment-item" onClick={allcommentHandler}>Подробнее</div>
      <div className="comment-item"><a href={`/profile/${comment.author}`} >{comment.authorName}</a></div>
    </div>
  );
}

export default Comment;


