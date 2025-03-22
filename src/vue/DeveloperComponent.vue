<template>
    <div style="padding: 20px;">
      <h1>Developer Information</h1>
      <p><strong>Developer name:</strong> {{ name??'Baizid MD Ashadzzaman' }}</p>
      <p><strong>Email:</strong> {{ email??'baizid.md.ashadzzaman@gmail.com' }}</p>
      <p>
        <strong>GitHub:</strong>
        <a :href="github??'https://github.com/Baizidmdashadzzaman'" target="_blank">{{ githubText??'https://github.com/Baizidmdashadzzaman' }}</a>
      </p>

      <p>
        <strong>CV:</strong>
        <a target="_blank" href="https://drive.google.com/file/d/1HuLXxOB6dL58AcupKZ9qhRr7739EXLML/view" >Download CV now</a>
      </p>

      <iframe src="https://baizidmdashadzzaman-next.vercel.app/" width="100%" height="1000"></iframe>

    </div>
  </template>
  
  <script>
  export default {
    name: 'DeveloperComponent',
    props: {
      name: {
        type: String,
        default: ''
      },
      email: {
        type: String,
        default: ''
      },
      github: {
        type: String,
        default: '#'
      },
      githubText: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  