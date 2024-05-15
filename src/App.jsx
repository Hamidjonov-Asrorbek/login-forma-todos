import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import LoginSignUp from "./pages/Login-SignUp";

function App() {
  function Redirect({ children }) {
    let user = localStorage.getItem("user") ?? false;
    
    return user ? children : <Navigate to="/" />
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginSignUp />}></Route>

        <Route
          path="/layout"
          element={
            <Redirect>
              <Layout />
            </Redirect>
          }></Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
