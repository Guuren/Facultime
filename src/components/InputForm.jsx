import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import AccessibleButton from './AccessibleButton';

export default function InputForm() {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border border-2 border-dark rounded shadow bg-white" aria-label="Consultation Booking Form">
      <style>{`
        .custom-input {
          border: 2px solid #212529 !important;
          color: #000000 !important;
          background-color: #ffffff !important;
        }
        .custom-input::placeholder {
          color: #495057 !important;
          opacity: 1;
        }
        .custom-label {
          color: #000000 !important;
          font-weight: 700 !important;
        }
      `}</style>

      {/* Changed from h3 to h2 */}
      <h2 className="fw-bold mb-3 text-black fs-3">Book a Consultation Slot</h2>
      
      {submitted && (
        <Alert variant="success" aria-live="polite" className="fw-bold text-black border border-dark">
          Consultation successfully requested! Check your email for confirmation details.
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="studentName">
        <Form.Label className="custom-label">Full Name <span className="text-danger" aria-hidden="true">*</span></Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter your full name" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required 
          aria-required="true"
          className="custom-input py-2"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="studentEmail">
        <Form.Label className="custom-label">Email Address <span className="text-danger" aria-hidden="true">*</span></Form.Label>
        <Form.Control 
          type="email" 
          placeholder="name@university.edu.ph" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required 
          aria-required="true"
          className="custom-input py-2"
        />
        <Form.Text className="text-black fw-semibold mt-1 d-block" style={{ fontSize: '0.85rem' }}>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="consultDate">
        <Form.Label className="custom-label">Preferred Date & Time <span className="text-danger" aria-hidden="true">*</span></Form.Label>
        <Form.Control 
          type="datetime-local" 
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required 
          aria-required="true"
          className="custom-input py-2"
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="consultNotes">
        <Form.Label className="custom-label">Reason for Consultation</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="Briefly describe your topic or inquiry..." 
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="custom-input"
        />
      </Form.Group>

      <AccessibleButton type="submit" variant="dark" label="Confirm Booking" />
    </Form>
  );
}