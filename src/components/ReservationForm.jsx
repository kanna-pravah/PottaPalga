import React, { useState } from 'react';

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1) newErrors.guests = 'At least one guest is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setSubmitted(true);
      setFormData({ name: '', date: '', time: '', guests: 1 });
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="p-3 rounded shadow-sm bg-white" style={{ maxWidth: '500px', margin: 'auto' }}>
      {submitted && <div className="alert alert-success">Reservation submitted successfully!</div>}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className={`form-control rounded-pill ${errors.name ? 'is-invalid' : ''}`}
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          className={`form-control rounded-pill ${errors.date ? 'is-invalid' : ''}`}
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="time" className="form-label">Time</label>
        <input
          type="time"
          className={`form-control rounded-pill ${errors.time ? 'is-invalid' : ''}`}
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time && <div className="invalid-feedback">{errors.time}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="guests" className="form-label">Number of Guests</label>
        <input
          type="number"
          className={`form-control rounded-pill ${errors.guests ? 'is-invalid' : ''}`}
          id="guests"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
        />
        {errors.guests && <div className="invalid-feedback">{errors.guests}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100 rounded-pill">Submit Reservation</button>
    </form>
  );
};

export default ReservationForm;
