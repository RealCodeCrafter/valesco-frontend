import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
// import App from './App.jsx'
import "./lang/i18n.js"
const App = lazy(() => import("./App.jsx"))
import { BrowserRouter } from 'react-router-dom'
import Leazy from './components/leazy/Leazy.jsx'
import { Provider } from 'react-redux'
import { store } from './context/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Leazy/>}>
     <Provider store={store}>
       <BrowserRouter>
         <App />
      </BrowserRouter>
     </Provider>
    </Suspense>
  </StrictMode>,
)
