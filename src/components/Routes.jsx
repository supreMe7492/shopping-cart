import App from "./App";
import Home from "./Home";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:name",
    element: <App />,
  },
];

export default routes;
