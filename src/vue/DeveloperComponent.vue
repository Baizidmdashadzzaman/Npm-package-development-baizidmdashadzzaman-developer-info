<template>
    <div style="padding: 20px;">
      <h1>System Developer Information:</h1>
      <p v-if="name"><strong>Developer name:</strong> {{ name }}</p>
      <p v-if="email"><strong>Email:</strong> {{ email }}</p>
      <p v-if="github">
        <strong>GitHub:</strong>
        <a :href="github" target="_blank">{{ github }}</a>
      </p>

      <p v-if="cv">
        <strong>CV:</strong>
        <a target="_blank" :href="cv">Download CV now</a>
      </p>

      <iframe v-if="portfolio" :src="portfolio" width="100%" height="1000"></iframe>

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
        default: ''
      },
      cv: {
        type: String,
        default: ''
      },
      portfolio: {
        type: String,
        default: ''
      },
    }
  };
  </script>
  