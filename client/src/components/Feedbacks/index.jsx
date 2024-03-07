import React, { useEffect, useState } from 'react';
import feedbacksData from '../../feedbacksData.json';
import FeedbackForm from '../FeedbackForm';

function Feedbacks() {
  const [combinedFeedbacks, setCombinedFeedbacks] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to control form display
  // Function to combine feedbacks from localStorage with feedbacksData

  const combineFeedbacks = () => {
    const localStorageFeedbacks = Object.values(localStorage).filter(item => item.startsWith('feedback_')).map(item => JSON.parse(item));
    const allFeedbacks = [...feedbacksData, ...localStorageFeedbacks];
    // Remove feedbacks duplicados com base no ID
    const uniqueFeedbacks = allFeedbacks.filter((feedback, index, self) =>
      index === self.findIndex((t) => (
        t.id === feedback.id
      ))
    );
    setCombinedFeedbacks(uniqueFeedbacks);
  };

  // Updates the combined list of feedbacks every time the page is loaded
  useEffect(() => {
    combineFeedbacks();
  }, []);

  const handleAddFeedback = (newFeedback) => {
    // Logic for adding new feedback to your feedback list
    console.log('Novo feedback:', newFeedback);
    // Adds the new feedback to the combined feedback list
    setCombinedFeedbacks(prevFeedbacks => [...prevFeedbacks, newFeedback]);
  };
  
  const toggleFormVisibility = () => {
    setShowForm(!showForm); // Toggle between showing and hiding the form
  };

  return (
    <div id="Feedbacks" className='container-fluid p-5 bg-color-2'>
      <div className='row mb-4 ps-md-5 ps-lg-0'>
        <h2 className='display-5 color-4 fw-bold'>Customers Feedbacks</h2>
      </div>
      <div className='row gap-5 px-md-5 px-lg-0'>
        {combinedFeedbacks.map((feedback) => (
          <div className="col-12 mx-auto col-lg-5 d-flex align-items-center bg-color-4 rounded-3 p-3" key={feedback.id}>
            <img src={feedback.profileImage} className='rounded-circle me-3 border border-5 border-light img-fluid' width={135} height={135} alt="" />
            <p className='fs-5 py-0'>{feedback.message}</p>
          </div>
        ))}
      </div>
      <div className='row gap-5 px-md-5 px-lg-0 mt-5'>
        {!showForm && ( // Render the button only if the form is not visible
          <button className="col-12 col-md-6 col-lg-4 col-xl-3 mx-auto btn fs-5 p-3 btn-feedback" onClick={toggleFormVisibility}>LEAVE US YOUR FEEDBACK</button>
        )}
        {showForm && <FeedbackForm onAddFeedback={handleAddFeedback} />}
      </div>
    </div>
  );
};

export default Feedbacks;