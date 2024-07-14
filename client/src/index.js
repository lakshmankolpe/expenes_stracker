import ReactDOM from 'react-dom/client';
import './index.css';
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './views/Home/Home';
import LogIn from './views/LogIn/LogIn';
import SignUp from "./views/SignUp/SignUp";




const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LogIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "*", 
    element: <h1>404 not found</h1>
  }
]);


root.render(<RouterProvider router={router} />);






