import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from "./common/Spinner";
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { feedback, loading } = useContext(FeedbackContext);
  if (!loading && (!feedback || feedback.length === 0)) {
    return "No feedback yet";
  }



  return (
    
      loading ? <Spinner /> : (
      <div className="feedback-list">
        <AnimatePresence>
          {
            feedback.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

              >

                <FeedbackItem key={item.id} item={item} />
              </motion.div>

            ))}
        </AnimatePresence>


      </div>
      )
    
  )



  // return (
  //   <div className="feedback-list">
  //   {
  //     feedback.map((item)=>(

  //     <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //     ))
  //   }
  //   </div>
  // )
}

export default FeedbackList