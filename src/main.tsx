import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from '@/App.tsx'

import { store } from '@/store/store'

import '@/assets/styles/main.scss'
import { devLog } from './services/dev-log.service'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        devLog('Service Worker registered with scope:', registration.scope);
      })
      .catch((err) => {
        devLog('Service Worker registration failed:', err);
      });
  });
}




