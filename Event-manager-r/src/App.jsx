// import { createBrowserRouter, RouterProvider, Routes} from 'react-router-dom'
// import { routes } from './routes/Routes'
// import './App.css'
// import Navbar from './components/Navbar'


// const router = createBrowserRouter(routes)

// function App() {
 
//   return (
//     <> 


//       <Navbar/>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'
import './App.css'

const router = createBrowserRouter(routes)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

