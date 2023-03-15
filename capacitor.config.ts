import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.babytracker.app',
  appName: 'baby-ui',
  webDir: 'build',
  bundledWebRuntime: false,
  server : {
    url: 'http://10.0.0.159:5173/',
    cleartext: true
  }
};

export default config;
