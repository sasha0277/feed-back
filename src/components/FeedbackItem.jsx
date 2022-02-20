import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './common/Card';


const FeedbackItem = ({item, handleDelete}) => {

  


  return (
   
    <Card >

    <div className="num-display">{item.rating}</div>
    <button onClick={()=>handleDelete(item.id)} className="close">
      <FaTimes color='black'/>
    </button>
    <div className="text-display">
      {item.text}
    </div>

    </Card>
  )
}

export default FeedbackItem