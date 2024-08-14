import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../views/Home";
import AboutPage from "../views/About";
import BlogPage from "../views/Blog";
import Navbar from "../components/Navbar";
import Contactpage from "../views/Contact";
import ServicesPage from "../views/Services";
import SingleBlog from "../views/SinglePost";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <ScrollToTop />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      }
    >
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="blog" element={<BlogPage />}></Route>
      <Route path="contact" element={<Contactpage />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
      <Route path="singleblog" element={<SingleBlog />}></Route>
    </Route>
  )
);
export default function Router() {
  return <RouterProvider router={router} />;
}
