import React from 'react';
import { Button } from 'react-bootstrap';

export default function AccessibleButton({ label, onClick, type = 'button', variant = 'primary', disabled = false }) {
  return (
    <>
      <style>{`
        .custom-accessible-btn:focus-visible {
          outline: 3px solid #ffbf47 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
        }
      `}</style>
      <Button 
        type={type} 
        variant={variant} 
        onClick={onClick} 
        disabled={disabled}
        className="w-100 py-2 fw-bold custom-accessible-btn"
        aria-disabled={disabled}
      >
        {label}
      </Button>
    </>
  );
}