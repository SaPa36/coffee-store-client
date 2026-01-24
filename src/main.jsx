import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';

import Users from './components/Users.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Main from './Layout/Main.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
    path: "/",
    element: <App></App>,
    loader: () => fetch('coffee-store-server-mwf4-8f385vin6-nur-sapas-projects.vercel.app/coffee')
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`coffee-store-server-mwf4-8f385vin6-nur-sapas-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>
  },
  {
    path: "/sign-in",
    element: <SignIn></SignIn>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('coffee-store-server-mwf4-8f385vin6-nur-sapas-projects.vercel.app/user')
  }
  ]
}
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
