// import { lazy, LazyExoticComponent } from "react";
// import { ProfileNoLazy } from "../lazyload/pages/ProfileNoLazy";
import { Home, About, Users } from "../lazyload/pages/Index";

type JSXComponent = () => JSX.Element;

/*
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}
*/ // Interface deinition for a route that is not lazy loaded and lazy loaded

interface Route {
  to: string;
  path: string;
  Component: JSXComponent;
  name: string;
}

/*Lazyload definition with personalize chunk names
const LazyLayoutHome = lazy(
  () => import("../lazyload/components/layout/LazyLayout")
);*/ // Lazyload definition for a module that hace nested routes

// const LazyAbout = lazy(() => import("../lazyload/pages/About"));
// const LazyUsers = lazy(() => import("../lazyload/pages/Users"));

export const routes: Route[] = [
  // {
  //   to: "/lazyload",
  //   // For react router dom v6 this is the way for render children routes
  //   path: "/lazyload/*",
  //   Component: LazyLayoutHome,
  //   name: "LazyLoad",
  // },
  {
    to: "/",
    path: "/",
    Component: Home,
    name: "Home",
  },
  {
    to: "/about",
    path: "about",
    Component: About,
    name: "About",
  },
  {
    to: "/users",
    path: "users",
    Component: Users,
    name: "Users",
  },
];
