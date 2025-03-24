import React from 'react';

const DeveloperPage = ({
  name = '',
  email = '',
  github = '',
  cv='',
  portfolio='',
}) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>System Developer Information:</h1>
      {name && <p><strong>Developer name:</strong> {name}</p>}
      {email && <p><strong>Email:</strong> {email}</p>}
      {github && (
        <p>
          <strong>GitHub:</strong>{' '}
          <a href={github} target="_blank" rel="noopener noreferrer">
            {github}
          </a>
        </p>
      )}
      {cv && (
        <p>
          <strong>CV:</strong>{' '}
          <a target="_blank" href={cv} rel="noopener noreferrer">
            Download CV now
          </a>
        </p>
      )}
      {portfolio && (
        <iframe
          className="borderRadSection"
          src={portfolio}
          width="100%"
          height="1000"
          title="Portfolio"
        ></iframe>
      )}
    </div>
  );
};

export default DeveloperPage;
