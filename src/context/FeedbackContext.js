import { createContext, useEffect, useState } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

const [editFeedback, setEditFeedback] = useState({
  item:{},
  edit:false,
})

useEffect(() => {
fetchFeedbackData();
  
}, []);

// fetch feedback FeedbackData

const fetchFeedbackData = async () => {
  const result = await fetch(`/feedback?_sort=id&_order=desc`);
  const data = await result.json();
  setFeedback(data);
  setLoading(false);
}



// Delete Feedback 
  const deleteFeedback = async (id) => {
    console.log(id);
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE'
      })

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    const result = await fetch(`/feedback`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await result.json();


    setFeedback([data, ...feedback]);

  }

  // update Feedback
  const updateFeedback = async (id,updatedItem)=>{

    const result = await fetch(`/feedback/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)

    })

    const data = await result.json();

    setFeedback(feedback.map((item)=>(item.id === id ? {...item,...data} :item)));

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
    loading
  }}>
    {children}
  </FeedbackContext.Provider>

}

export default FeedbackContext;