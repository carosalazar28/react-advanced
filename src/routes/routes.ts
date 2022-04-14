import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

// Lazyload definition
const LazyHome = lazy(() => import("../lazyload/pages/Home"));
const LazyAbout = lazy(() => import("../lazyload/pages/About"));
const LazyUsers = lazy(() => import("../lazyload/pages/Users"));

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: LazyHome,
    name: "Home",
  },
  {
    to: "/about",
    path: "about",
    Component: LazyAbout,
    name: "About",
  },
  {
    to: "/users",
    path: "users",
    Component: LazyUsers,
    name: "Users",
  },
];
