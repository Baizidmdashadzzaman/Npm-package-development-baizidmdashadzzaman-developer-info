import React from 'react';

const DeveloperPage = ({
  name = 'Your Name',
  email = 'youremail@example.com',
  github = '#'
}) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Developer Information</h1>
      <p><strong>Name:</strong> {name??'Baizid MD Ashadzzaman'}</p>
      <p><strong>Email:</strong> {email??'baizid.md.ashadzzaman@gmail.com'}</p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a href={github??'https://github.com/Baizidmdashadzzaman'} target="_blank" rel="noopener noreferrer">
          {github??'https://github.com/Baizidmdashadzzaman'}
        </a>
      </p>
    </div>
  );
};

export default DeveloperPage;
