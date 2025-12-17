import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { User } from "./User";
import Login from "./Login&Register/Login";
import Register from "./Login&Register/Register";
import AuthProvider from "./Context/AuthProvider";
import MyProfile from "./Shared/MyProfile";
import ForgetPassword from "./Shared/ForgotPassword";
import LibrarianLayout from "./Librarian/LibrarianLayout";
import AddBooks from "./Librarian/AddBooks";
import MyBooks from "./Librarian/MyBooks";
import EditBooks from "./Librarian/EditBooks";
import PrivateRoute from "./Shared/PrivateRoute";
import AdminLayout from "./Admin/AdminLayout";
import Users from "./Admin/Users";
import AllBooks from "./Admin/AllBooks";
import Home from "./UserSection/Home";
import Coverage from "./UserSection/Coverage";
import AddCoverageArea from "./Admin/AddCoverageArea";
import BookDetails from "./UserSection/BookDetails";
import AllBooksUser from "./UserSection/AllBooksUser";
import MyOrders from "./UserSection/MyOrders";
import Success from "./UserSection/Success";
import Cancel from "./UserSection/Cancel";
import Orders from "./Librarian/Orders";
import Invoices from "./UserSection/Invoices";
import { ToastContainer} from "react-toastify";
import Wishlist from "./UserSection/Wishlist";
import DashboardLayout from "./Dashboard/DashboardLayout";
import LibrarianHome from "./Librarian/LibrarianHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "myprofile", element: <MyProfile /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "coverage", element: <Coverage /> },
      {
        path: "book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      { path: "allbooks", element: <AllBooksUser /> },
      {
        path: "myorders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      { path: "success", element: <Success /> },
      { path: "cancel", element: <Cancel /> },
      { path: "invoices", element: <Invoices /> },
      { path: "wishlist", element: <Wishlist/>}
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
       {
        path: "myorders",
        element: 
  
            <MyOrders />
        
        ,
      },
    ]

  }
  ,
  {
    path: "librarian",
    element: (
      <PrivateRoute>
        <LibrarianLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "", element:<LibrarianHome/>},
      { path: "add-books", element: <AddBooks /> },
      { path: "my-books", element: <MyBooks /> },
      { path: "edit-books/:id", element: <EditBooks /> },
      { path: "myprofile", element: <MyProfile /> },
      { path: "orders", element: <Orders /> },
    ],
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "users", element: <Users /> },
      { path: "all-books", element: <AllBooks /> },
      { path: "add-coverage-area", element: <AddCoverageArea /> },
      { path: "myprofile", element: <MyProfile /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />

      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
