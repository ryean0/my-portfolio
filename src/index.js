import * as React from 'react';
import * as ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HomeName from './components/HomeName';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";



const router = createBrowserRouter(
  [
    {
      path:"/my-portfolio",
      element: <Home/>,
      children: [
        {
          path:"about",
          element: <About/>,
        },
        {
          path:"projects",
          element: <Projects/>,
        },
        {
          path:"contact",
          element: <Contact/>,
        }
      ]
    },
]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
