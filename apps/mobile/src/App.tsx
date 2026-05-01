import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home";

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
