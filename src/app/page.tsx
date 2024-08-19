"use client"; // Add this line to indicate a Client Component

import { useState } from 'react';
import { fetchAnswer } from '../utils/api'; // Import the API function
import StripeCheckoutButton from '../components/StripeCheckoutButton'; // Import the Stripe button component

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Submitting question:', question); // Debugging line

    try {
      const result = await fetchAnswer(question);
      setAnswer(result);
    } catch (error) {
      setError('Failed to fetch answer.');
      console.error('Error fetching answer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.homepage}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Welcome to FlashCardForge</h1>
        <p style={styles.paragraph}>
          Effortlessly create and manage your flashcards to enhance your learning experience.
        </p>
      </header>
      <main>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question here..."
            style={styles.input}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Creating...' : 'Create Flashcard'}
          </button>
        </form>
        {answer && <div style={styles.answerBox}>{answer}</div>}
        {error && <div style={styles.errorBox}>{error}</div>}
        <StripeCheckoutButton /> {/* Add the Stripe button component */}
      </main>
    </div>
  );
}

// Internal CSS styles
const styles = {
  homepage: {
    textAlign: 'center',
    background: 'linear-gradient(to right, #fbc2eb, #a6c0fe)',
    color: '#333',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh', // Ensure the height covers the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center' // Center content vertically
  },
  header: {
    marginBottom: '30px'
  },
  heading: {
    fontSize: '3em',
    color: '#fff'
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#fff',
    margin: '20px 0'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    border: '2px solid #ddd',
    borderRadius: '5px',
    width: '300px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  answerBox: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff'
  },
  errorBox: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #f00',
    borderRadius: '5px',
    backgroundColor: '#fdd'
  }
};
