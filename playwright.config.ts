import { defineConfig } from '@playwright/test'

/*
  Layout tests. They drive the site in a real browser (your installed Chrome) across a matrix of devices,
  from small phones to 4K monitors (see tests/devices.ts).

    npm run test:layout            all devices, all pages
    npm run test:layout -- --grep "Home"      only the Home page checks
    npm run test:layout -- --grep "27-inch"   only one device (any name from tests/devices.ts)

  The tests reuse a dev server that is already running on port 5173, or start one for the run.
*/
export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  fullyParallel: true,
  workers: 3,
  retries: 1, // a dev-server reload in the middle of a test is not a layout bug; a real bug fails twice
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:5173',
    channel: 'chrome',
    launchOptions: { args: ['--force-device-scale-factor=1'] },
  },
  webServer: {
    command: 'npm run dev -- --port 5173 --host 127.0.0.1',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: true,
    timeout: 60_000,
  },
})
