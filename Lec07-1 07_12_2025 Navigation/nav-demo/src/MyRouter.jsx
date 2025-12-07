import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Page3 from "./Page3";
import Page1 from "./Page1";
import Page2 from "./Page2";


export default function MyRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/page1",
          element: <Page1 />,
        },
        {
          path: "/page2",
          element: <Page2 />,
        },
      ]
    },
    {
      path: "/page3/:userId",
      element: <Page3 />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
