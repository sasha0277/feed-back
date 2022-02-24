import React, { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './common/Card';


const FeedbackItem = ({item}) => {

  const {deleteFeedback,showFeedback} = useContext(FeedbackContext);


  return (
   
    <Card >

    <div className="num-display">{item.rating}</div>
    <button onClick={()=>deleteFeedback(item.id)} className="close">
      <FaTimes color='black'/>
    </button>
    <button onClick={()=>showFeedback(item)} className="edit">
      <FaEdit color='black'/>
    </button>
    <div className="text-display">
      {item.text}
    </div>

    </Card>
  )
}

export default FeedbackItem