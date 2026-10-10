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
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white" aria-label="Consultation Booking Form">
      <h3 className="fw-bold mb-3 text-dark">Book a Consultation Slot</h3>
      
      {submitted && (
        <Alert variant="success" aria-live="polite">
          Consultation successfully requested! Check your email for confirmation details.
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="studentName">
        <Form.Label className="fw-bold text-dark">Full Name <span className="text-danger" aria-hidden="true">*</span></Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter your full name" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required 
          aria-required="true"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="studentEmail">
        <Form.Label className="fw-bold text-dark">Email Address <span className="text-danger" aria-hidden="true">*</span></Form.Label>
        <Form.Control 
          type="email" 
          placeholder="name@university.edu.ph" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required 
          aria-required="true"
        />
        {/* Changed text-muted to a high-contrast dark gray */}
        <Form.Text style={{ color: '#495057', fontWeight: 500 }}>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="consultDate">
        <Form.Label className="fw-bold text-dark">Preferred Date & Time <span className="text-danger" aria-hidden="true">*</span></Form.Label>
        <Form.Control 
          type="datetime-local" 
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required 
          aria-required="true"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="consultNotes">
        <Form.Label className="fw-bold text-dark">Reason for Consultation</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="Briefly describe your topic or inquiry..." 
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </Form.Group>

      <AccessibleButton type="submit" variant="primary" label="Confirm Booking" />
    </Form>
  );
}