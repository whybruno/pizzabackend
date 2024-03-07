import React, { useState } from 'react';

function FeedbackForm({ onAddFeedback }) {
  const [formData, setFormData] = useState({
    name: '',
    profileImage: '',
    message: '',
  });

  const [formVisible, setFormVisible] = useState(true); // New state to control form visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID for new feedback
    const id = new Date().getTime();
    const newFeedback = { id, ...formData };
    // Call the callback function to add the new feedback
    onAddFeedback(newFeedback);
    // Clear form fields after submission
    setFormData({ name: '', profileImage: '', message: '' });
    // Store feedback in localStorage
    localStorage.setItem(`feedback_${id}`, JSON.stringify(newFeedback));
    // Hide the form after submission
    setFormVisible(false); 
  };

  return (
    <div className={`col-12 col-lg-5 bg-color-4 mx-auto p-5 rounded-3 ${formVisible ? '' : 'd-none'}`}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-5">First Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label fs-5">Photo URL</label>
          <input type="text" className="form-control" id="profileImage" name="profileImage" value={formData.profileImage} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label fs-5">Message</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-paynow">SUBMIT</button>
      </form>
    </div>
  );
}

export default FeedbackForm;