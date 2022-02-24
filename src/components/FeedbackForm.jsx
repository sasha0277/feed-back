import React, { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Button from './common/Button';
import Card from './common/Card';
import RatingSelect from './RatingSelect';


const FeedbackForm = () => {

const {addFeedback,editFeedback,updateFeedback} = useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisable, setBtnDisable] = useState(true);
  const [infoMessage, setInfoMessage] = useState('');

  useEffect(() => {
    if(editFeedback.edit===true){
      setBtnDisable(false);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
      
    }
    
  }, [editFeedback]);

const handleInput = (e)=>{
if(text===''){
  setBtnDisable(true);
  setInfoMessage(null);
} else if (text!=='' && text.trim().length<=10){
  setBtnDisable(true);
  setInfoMessage("Text should be at least 10 characters");
} else{
  setBtnDisable(false);
  setInfoMessage(null);
}
 setText(e.target.value);
}

const submitHandler = (e) => {
  e.preventDefault();
  if(text.trim().length >10){
    const newFeedback ={
      text,
      rating
    }

    if(editFeedback.edit===false){

      addFeedback(newFeedback);
    }else{

      updateFeedback(editFeedback.item.id, newFeedback);
    }

    setText('');
  }

}


  return (
    <Card>
  <form onSubmit={submitHandler}>

  <RatingSelect  select={(rating)=>setRating(rating)}/>
  <h4> Give us Rating and write comments ,How happy you are with our service</h4>
  <div className="input-group">
  <input type="text" value={text} onChange={handleInput} placeholder="write you comments " className="form-control"/>
  <Button isDisabled={btnDisable} type="submit">Send</Button>
  </div>

  {infoMessage && <div className="message">{infoMessage}</div>}




  </form>
</Card>
  )
}

export default FeedbackForm