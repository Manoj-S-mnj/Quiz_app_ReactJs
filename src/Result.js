import React from 'react';

function Result({ score, total }) {
  return (
    <div className="result-section">
      <h1>Thank You For your Attention!</h1>
      You scored {score} out of {total}
    </div>
  );
}

export default Result;
