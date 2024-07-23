import { useRoutes } from "react-router-dom";
import Products from "pages/Products/Products";
import ProductsById from "pages/ProductsById/ProductsById";
import NotFound from "pages/NotFound/NotFound";
import ProductsLayout from "./Components/ProductsLayout/ProductsLayout";
import Main from "pages/Main/Main";
import Protected from "helpers/Protected/Protected";
import Card from "pages/Card/Card";

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Main />,
    },

    {
      path: "/card",
      element: <Card/>
    },
    {
      path: "/products",
      element: <ProductsLayout />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: ":id",
          element: <ProductsById />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
