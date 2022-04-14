import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

// Lazyload definition with personalize chunk names
const LazyHome = lazy(
  () => import(/* webpackChunkName: Home */ "../lazyload/pages/Home")
);
const LazyAbout = lazy(
  () => import(/* webpackChunkName: About */ "../lazyload/pages/About")
);
const LazyUsers = lazy(
  () => import(/* webpackChunkName: Users */ "../lazyload/pages/Users")
);

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
