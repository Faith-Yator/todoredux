import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './context/userContext/Context.jsx'
import { UIContextProvider } from './context/todoContext/Context.jsx'
import store from './Redux/store'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextProvider>
      <UIContextProvider >
        <App />
        
      </UIContextProvider>
    </ContextProvider>
    </Provider>
  </React.StrictMode>,
)

