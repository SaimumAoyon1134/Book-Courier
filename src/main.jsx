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

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "myprofile", element: <MyProfile /> },
      { path: "forget-password", element: <ForgetPassword/> },
    ],
  },
  {
    path:"librarian",
    element: <PrivateRoute><LibrarianLayout/></PrivateRoute>,
    children:[
      { path: "add-books", element: <AddBooks/> },
      { path: "my-books", element: <MyBooks/> },
      { path: "edit-books/:id", element: <EditBooks/>}

    ]
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
