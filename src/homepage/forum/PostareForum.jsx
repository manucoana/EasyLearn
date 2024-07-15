import React, { useState } from 'react';
import ButonReutilizabil from '../../elemente/butoane/ButonReutilizabil';
import "./PostareForum.css"
import TextReutilizabil from '../../elemente/text/TextReutilizabil';

const PostareForum = ({ onSubmit, userId = 1 }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const newPost = {
      titlu: title,
      text,
      user_id: userId,
    };
  
    onSubmit(newPost);
    setTitle('');
    setText('');
  
    setIsSubmitting(false);
  };
  

  return (
    <form onSubmit={handleSubmit} className="question-form">
      <TextReutilizabil className='text-mic' text='Postează o întrebare adresată profesorilor de pe platformă' />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required/>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Scrie aici intrebarea" required/>
      <ButonReutilizabil className='buton-inregistrare' text='Postează întrebarea' disabled={isSubmitting} />
    </form>
  );
};

export default PostareForum;
