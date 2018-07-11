import Home from "./pages/home/Home";
import Pricing from "./pages/home/pricing/Pricing";

export default [
  {
    name: "Home",
    link: "/",
    component: Home
  },
  {
    name: "Login",
    link: "/login",
    component: ""
  },
  {
    name: "Pricing",
    link: "/#pricing",
    component: Pricing
  },
  {
    name: "Features",
    link: "/#features",
    component: "Features"
  },
  {
    name: "Gallery",
    link: "/gallery",
    component: "Gallery"
  }
];
