import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />
  
  }, 
  {
    path: "/directors",
    element: <Directors />

  },
  {
    path: "/actors",
    element: <Actors/>
    
  },
  {
    path: "/movie/:id",
    element: <Movie />
    
  },
  {
    path: "*",
    element: <ErrorPage />
    
  }
  ];

export default routes;