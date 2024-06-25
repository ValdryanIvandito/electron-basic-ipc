import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('openNewWindow', {
  openUrl: (url) => {
    ipcRenderer.send('openUrl', url)
  }
})

contextBridge.exposeInMainWorld('openFileApi', {
  openFile: () => {
    return ipcRenderer.invoke('open-file')
  }
})

contextBridge.exposeInMainWorld('executeApp', {
  executeApp: async () => {
    return ipcRenderer.invoke('execute-app')
  }
})
