<template>
    <div style="padding: 20px;">
      <h1>Developer Information</h1>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p>
        <strong>GitHub:</strong>
        <a :href="github" target="_blank">{{ githubText }}</a>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeveloperComponent',
    props: {
      name: {
        type: String,
        default: 'Your Name'
      },
      email: {
        type: String,
        default: 'youremail@example.com'
      },
      github: {
        type: String,
        default: '#'
      },
      githubText: {
        type: String,
        default: 'GitHub'
      }
    }
  };
  </script>
  