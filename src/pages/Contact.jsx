import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate success
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h1 className="mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>

      {submitted && <Alert variant="success">Thank you for your message! We will get back to you soon.</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contact-name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact-email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact-phone">
          <Form.Label>Phone (optional)</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact-message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 rounded-pill">
          Send Message
        </Button>
      </Form>

      <div className="mt-5 text-center">
        <h5>Contact Information</h5>
        <p><FaMapMarkerAlt /> IARE cheruvu, Hyderabad, India</p>
        <p><FaPhone /> +91 70320 23269</p>
        <p><FaEnvelope /> contact@pottapalga.com</p>
        <div className="d-flex justify-content-center gap-3 fs-4 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="mt-5">
        <iframe
          title="Potta Palga Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.48667131512345!3d17.38504431234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c123456789%3A0x123456789abcdef!2sPotta%20Palga!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
