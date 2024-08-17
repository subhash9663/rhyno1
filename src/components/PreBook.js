import React, { useState } from 'react';
import '../styles/PreBook.css';

const PreBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'se03-lite',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address ending with .com.';
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful form submission
      alert('Form submitted successfully!');
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        model: 'se03-lite',
      });
      setErrors({});
    }
  };

  return (
    <div className="pre-book">
      <h1>Pre-Book Your Rhyno EV</h1>
      <p>Fill out the form below to pre-book your vehicle. Payment can be made through our secure payment gateway.</p>
      <form className="pre-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <i className="fas fa-user"></i> Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            <i className="fas fa-phone"></i> Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\d{10}"
            maxLength="10" // Ensure no more than 10 digits are entered
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="model">
            <i className="fas fa-car"></i> Vehicle Model:
          </label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          >
            <option value="se03-lite">SE03 Lite</option>
            <option value="se03">SE03</option>
            <option value="se03-max">SE03 Max</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default PreBook;
