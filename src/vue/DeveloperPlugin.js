export default {
    install(app, options = {}) {
      const routePath = options.routePath || '/developer';
  
      const DeveloperComponent = {
        name: 'DeveloperPage',
        template: `
          <div style="padding: 20px;">
            <h1>Developer Information</h1>
            <p><strong>Name:</strong> ${options.name || 'Your Name'}</p>
            <p><strong>Email:</strong> ${options.email || 'youremail@example.com'}</p>
            <p>
              <strong>GitHub:</strong>
              <a href="${options.github || '#'}" target="_blank">
                ${options.githubText || 'GitHub'}
              </a>
            </p>
          </div>
        `,
      };
  
      if (options.router) {
        options.router.addRoute({
          path: routePath,
          name: 'Developer',
          component: DeveloperComponent,
        });
      } else {
        console.warn(
          "Vue Router instance not provided. Please pass { router } in options when installing the plugin."
        );
      }
    },
  };
  