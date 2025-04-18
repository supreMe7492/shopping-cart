import App from "./App";
import Home from "./Home";
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:name",
    element: <App />,
  },
];

export default routes;
