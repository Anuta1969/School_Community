import React from 'react';

function Comment({comment}) {
  return (
    <div>
      <div> {comment.text} </div>
      <div>Подробнее</div>
      <div><a href={`/profile/${comment.author}`} >{comment.authorName}</a></div>
    </div>
  );
}

export default Comment;


