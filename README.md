# baizidmdashadzzaman-developer-info

A simple npm package that automatically creates a developer information page for Vue or React projects.

## Features

- **Vue Plugin:** Automatically registers a `/developer` route with your Vue Router.
- **React Component:** A ready-to-use component for displaying developer information.

## Installation

```bash
npm install baizidmdashadzzaman-developer-info
npm link baizidmdashadzzaman-developer-info
```

## How to use it in React JS

```bash
   import { DeveloperPage } from 'baizidmdashadzzaman-developer-info';
```

```bash
    <DeveloperPage
         name="Baizid MD Ashadzzaman"
         email="baizid.md.ashadzzaman@gmail.com"
         github="https://github.com/Baizidmdashadzzaman"
         cv="https://drive.google.com/file/d/1HuLXxOB6dL58AcupKZ9qhRr7739EXLML/view"
         portfolio="https://baizidmdashadzzaman-next.vercel.app/"
    />
```

## How to use it in Vue JS as Component

Using the Standalone Component,register the standalone component globally or locally in your Vue components.

```bash
   import { DeveloperComponent } from 'baizidmdashadzzaman-developer-info';
   app.component('DeveloperComponent', DeveloperComponent);
```

```bash
    <DeveloperComponent
         name="Baizid MD Ashadzzaman"
         email="baizid.md.ashadzzaman@gmail.com"
         github="https://github.com/Baizidmdashadzzaman"
         cv="https://drive.google.com/file/d/1HuLXxOB6dL58AcupKZ9qhRr7739EXLML/view"
         portfolio="https://baizidmdashadzzaman-next.vercel.app/"
    />
```


## How to use it in Vue JS as pages

```bash
   import router from './router';
   import { DeveloperPlugin } from 'baizidmdashadzzaman-developer-info';
   app.use(DeveloperPlugin, {
     router,
     name: 'Baizid MD Ashadzzaman',
     email: 'baizid.md.ashadzzaman@gmail.com',
     github: 'https://github.com/Baizidmdashadzzaman',
     routePath: '/developer'
   });
```

Now, when you navigate to http://localhost:8080/developer (or your configured port), you'll see the developer information page.

npm run build and npm publish to publish it to npmjs.com
