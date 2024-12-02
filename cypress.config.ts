import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configura o plugin de cobertura de código do Cypress
      codeCoverageTask(on, config);

      return config;
    },
    baseUrl: 'http://localhost:3000', // Ajuste a URL base para seu app Next.js
  },
});

