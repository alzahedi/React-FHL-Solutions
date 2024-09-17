import { useState, useEffect } from 'react';

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/0c1e5722-0f7b-4e3d-912e-8b949998fdea');
      if (!response.ok) {
        throw new Error('Failed to fetch the quote');
      }
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Quote of the Day</h1>
      <p style={{ fontSize: '24px', fontStyle: 'italic' }}>Hi: {quote}</p>
    </div>
  );
};

export default QuoteOfTheDay;
