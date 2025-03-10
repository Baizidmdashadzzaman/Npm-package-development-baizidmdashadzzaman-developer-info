// react/DeveloperPage.js
import React from 'react';

const DeveloperPage = ({
  name = 'Your Name',
  email = 'youremail@example.com',
  github = '#',
}) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Developer Information</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      </p>
    </div>
  );
};

export default DeveloperPage;
