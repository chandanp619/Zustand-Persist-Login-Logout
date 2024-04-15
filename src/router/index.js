import {createBrowserRouter} from "react-router-dom";

import HomeComponent from '../components/HomeComponent';
import ErrorComponent from '../components/ErrorComponent';
import LoginComponent from "../components/LoginComponent";
import LogoutComponent from "../components/LogoutComponent";

const MyRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomeComponent />,
    },
    {
        path: '/login',
        element: <LoginComponent />
    },
    {
        path: '/logout',
        element: <LogoutComponent />
    },
    {
      path: '*',
      element: <ErrorComponent />
    }
  ]);
export default MyRouter;  