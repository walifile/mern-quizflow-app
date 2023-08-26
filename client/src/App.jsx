import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { validateUser } from "./helper/helper";
function App() {
  /** react routes */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/quiz",
      element: (
        // <validateUser>
        <Quiz></Quiz>
        // </validateUser>
      ),
    },
    {
      path: "/result",
      element: (
        <validateUser>
          <Result></Result>
        </validateUser>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
