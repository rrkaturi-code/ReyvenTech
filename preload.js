const { contextBridge } = require('electron');
const os = require('os');

contextBridge.exposeInMainWorld('electronAPI', {
  getPlatform: () => os.platform(),
  getRelease: () => os.release(),
});
