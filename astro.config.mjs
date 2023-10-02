import { defineConfig } from "astro/config";

// Example: astro.config.mjs
export default {
  // ... other config settings
  routes: [
    {
      path: "/", // Root path
      component: "src/pages/index.astro", // Example: Use an existing component for the root page
    },
    {
      path: "/liste", // URL path for the new page
      component: "src/pages/liste.astro", // Use the component you created
    },
    // ... other routes
  ],
};
