import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Contact,
  HomeLayout,
  Landing,
  Login,
  Register,
  Shop,
  SingleProduct,
  Wishlist,
  Profile,
  Search,
  ThankYou,
  OrderHistory
} from "../../Test/test/src/pages";
import { landingLoader } from "../../Test/test/src/pages/Landing";
import { singleProductLoader } from "../../Test/test/src/pages/SingleProduct";
import { shopLoader } from "../../Test/test/src/pages/Shop";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "shop",
        element: <Shop />,
        loader: shopLoader

      },
      {
        path: "shop/product/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "user-profile",
        element: <Profile />,
      },
      {
        path:"search",
        element: <Search />
      },
      {
        path:"thank-you",
        element: <ThankYou />
      },
      {
        path:"order-history",
        element: <OrderHistory />
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;