import { lazy, LazyExoticComponent } from "react";
import { ProfileNoLazy } from "../lazyload/pages/ProfileNoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

// Lazyload definition with personalize chunk names
const LazyLayoutHome = lazy(
  () => import("../lazyload/components/layout/LazyLayout")
);
// const LazyAbout = lazy(() => import("../lazyload/pages/About"));
// const LazyUsers = lazy(() => import("../lazyload/pages/Users"));

export const routes: Route[] = [
  {
    to: "/lazyload",
    // For react router dom v6 this is the way for render children routes
    path: "/lazyload/*",
    Component: LazyLayoutHome,
    name: "LazyLoad",
  },
  // {
  //   to: "/about",
  //   path: "about",
  //   Component: LazyAbout,
  //   name: "About",
  // },
  // {
  //   to: "/users",
  //   path: "users",
  //   Component: LazyUsers,
  //   name: "Users",
  // },
  {
    to: "/profile-no-lazy",
    path: "profile-no-lazy",
    Component: ProfileNoLazy,
    name: "Profile No Lazy",
  },
];
