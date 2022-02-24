import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import AboutIcon from './components/AboutIcon';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';
import About from './pages/About';


const App = () => {

return (
    <FeedbackProvider>

    <Router>
     <AboutIcon/>
       
        <NavLink to="/" activeclassname="active" style={{marginRight:'15px'}}>
        Home
        </NavLink>
        <NavLink to="/about" activeclassname="active" style={{marginRight:'15px'}}>
        About
        </NavLink>
        

      <Header />



      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
            <FeedbackForm  />
            <FeedbackStats  />
            <FeedbackList  />

            </>
          }>
            
          </Route>
          <Route exact path="/about" element={<About />} />
        </Routes>

      </div>

    </Router>
    </FeedbackProvider>
  )
}

export default App