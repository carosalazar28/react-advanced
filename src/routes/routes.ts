import { Home, About, Users } from "../lazyload/pages/Index";

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
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
