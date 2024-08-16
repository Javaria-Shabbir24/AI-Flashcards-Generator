// src/pages/index.tsx

export default function Home() {
  return (
    <div style={styles.homepage}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Welcome to FlashCardForge</h1>
        <p style={styles.paragraph}>
          Effortlessly create and manage your flashcards to enhance your learning experience.
        </p>
      </header>
      <main>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Enter your question here..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Create Flashcard</button>
        </form>
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
  }
};
