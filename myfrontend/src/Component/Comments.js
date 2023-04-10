import React from 'react'
import Avtar from './Comment/Avtar'
import CommentSection from './Comment/CommentSection'
import './Comment/Comment.css';
function Comments() {
  return (
    <div className='Containter'>
      <Avtar></Avtar>
    <CommentSection/>
    </div>
  )
}

export default Comments
