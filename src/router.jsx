import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { NavBar } from "./NavBar";
import { TeamNav } from "./TeamNav";
import { NewTeamMember } from "./pages/NewTeamMember";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    // outputs error if there is one, can be placed on each link to debug, prevered on childs
    errorElement: <h1>error</h1>,
    children: [
      { path: "*", element: <Navigate to="/"/>}, // if link doesnt exist,  redirects back to home page
      // { path: "*", element: <h1>404 ERROR</h1> }, // if link doesnt exist outputs 404 error
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamNavLayout/>,
        children: [
          { index: true, element: <Team /> },
          // regular way
          // { path: "joe", element: <TeamMember name="joe" /> },
          // { path: "sally", element: <TeamMember name="sally" /> },
          // map users from json file
          {path: ":memberId", element: <TeamMember/>},
          {path: "new", element: <NewTeamMember/>}
    
        ],
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <NavBar />
      <Outlet  context="context from outlet"/> {/*useContext inside router*/}
    </>
  );
}
function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context="context from outlet"/>
    </>
  );
}
