import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'pnpm exec nx run @fit-tracker/frontend:dev',
        production: 'pnpm exec nx run @fit-tracker/frontend:preview',
      },
      ciWebServerCommand: 'pnpm exec nx run @fit-tracker/frontend:preview',
      ciBaseUrl: 'http://localhost:3333',
    }),
    baseUrl: 'http://localhost:3333',
  },
});
