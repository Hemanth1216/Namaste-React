import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import Offline from "./components/Offline";
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="pt-24">
      <Header></Header>
      {onlineStatus ? <Outlet /> : <Offline />}
    </div>
  );
};

const Grocery = lazy(() => import("./components/Groceries"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (<Suspense fallback={<Shimmer />}>
          <About />
        </Suspense>)
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/groceries",
        element: <Grocery />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
