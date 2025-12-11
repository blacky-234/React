// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.css'
// import App from './App.tsx'
// import { BrowserRouter  } from 'react-router-dom' 

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )



// Learning/Router

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import RouteApp from './LearningRoute.tsx'
import LearningRendering from './LearningRendering.tsx'
import LearningRQuery from './LearningReactQuery.tsx'
import { BrowserRouter  } from 'react-router-dom' 
import App  from './App.tsx'

export const LearningRouteController = () => {
  return false;
}

export const LearningRenderingController = () =>{
  return false
}

export const LearnignReactQueryController = () => {
  return true
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)