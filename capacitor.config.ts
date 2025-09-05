import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a3208cf9a37ed47dfb90779a48a924ddb',
  appName: 'chrono-age-tracker-live',
  webDir: 'dist',
  server: {
    url: "https://3208cf9a-37ed-47df-b907-79a48a924ddb.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;