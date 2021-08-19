import React from 'react';
import './Quotes.css';

const Quote = () => {
  const text = 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics. — Katherine Johnson, African-American mathematician';

  return (
    <div className="quote">
      <p>{text}</p>
    </div>
  );
};

export default Quote;
