<template>
    <div style="padding: 20px;">
      <h1>Developer Information</h1>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p>
        <strong>GitHub:</strong>
        <a :href="github" target="_blank">{{ githubText }}</a>
      </p>

      <p>
        <strong>CV:</strong>
        <a target="_blank" href="https://drive.google.com/file/d/1HuLXxOB6dL58AcupKZ9qhRr7739EXLML/view" >Download CV now</a>
      </p>

      <iframe className='borderRadSection' src="https://baizidmdashadzzaman-next.vercel.app/" width="100%" height="1000"></iframe>

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
  