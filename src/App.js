import React, { useState } from 'react';
import FeedbackData from '../src/data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

const App = () => {
  const [feedback , setFeedback] = useState(FeedbackData);
const deleteFeedback = (id)=>{
  console.log(id);
  if(window.confirm('Are you sure you want to delete?')){

    setFeedback(feedback.filter((item)=> item.id!==id));
  }
}

  return (
   <>
      <Header  />
    <div>
    <FeedbackStats  feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
   </>
  )
}

export default App