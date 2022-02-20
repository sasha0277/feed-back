import React, { useState } from 'react';
import FeedbackData from '../src/data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';

const App = () => {
  const [feedback , setFeedback] = useState(FeedbackData);
  return (
   <>
      <Header  />
    <div>
      <FeedbackList feedback={feedback}/>
    </div>
   </>
  )
}

export default App