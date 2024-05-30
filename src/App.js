
import Header from './components/layout/header';
import Footer from './components/layout/footer';
 import Home from './components/Home';
 import About from './components/About';
 import Courses from './components/Courses';
 import Contact from './components/Contact';
 import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);
function App() {
  return (
    <>
     <Header />
     <div className='main'>
       <RouterProvider router={router} />
     </div>
     <Footer />
    </>
  );
}

export default App;
