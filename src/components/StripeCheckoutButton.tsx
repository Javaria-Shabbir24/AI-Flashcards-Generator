import React, { useState } from 'react';

const StripeCheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: 'price_1PpXlYJr3J36T4KYldlnDmAE' }), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { url } = await response.json();
      setMessage('Redirecting to checkout...');
      window.location.href = url; // Redirect to Stripe Checkout
    } catch (error) {
      setError('Failed to redirect to checkout. Please try again.');
      console.error('Error redirecting to checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <button
        onClick={handleCheckout}
        style={styles.paymentButton}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Subscribe Now'}
      </button>
      {message && <div style={styles.messageBox}>{message}</div>}
      {error && <div style={styles.errorBox}>{error}</div>}
    </div>
  );
};

// Internal CSS styles for Stripe button
const styles = {
  container: {
    textAlign: 'center',
  },
  paymentButton: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#28a745', // Green for subscription button
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '30px',
    opacity: 0.8,
  },
  messageBox: {
    marginTop: '10px',
    padding: '10px',
    color: '#28a745',
  },
  errorBox: {
    marginTop: '10px',
    padding: '10px',
    color: '#f00',
    backgroundColor: '#fdd',
    border: '1px solid #f00',
    borderRadius: '5px',
  },
};

export default StripeCheckoutButton;
