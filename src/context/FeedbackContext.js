import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is Feed back Item-1",
      rating: 10

    },
    {
      id: 2,
      text: "this is Feed back Item-2",
      rating: 8

    },
    {
      id: 3,
      text: "this is Feed back Item-3",
      rating: 9

    }
  ]);
const [editFeedback, setEditFeedback] = useState({
  item:{},
  edit:false,
})

// Delete Feedback 
  const deleteFeedback = (id) => {
    console.log(id);
    if (window.confirm('Are you sure you want to delete?')) {

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);

  }

  // update Feedback
  const updateFeedback = (id,updatedItem)=>{
    setFeedback(feedback.map((item)=>(item.id === id ? {...item,...updatedItem} :item)));

  }



  //Edit  preview show Feedback in the form

  const showFeedback = (item) => {
    setEditFeedback({
      item,
      edit:true,
    })
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    showFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>

}

export default FeedbackContext;