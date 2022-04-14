import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { routes } from "./routes";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.Component />}
            />
          ))}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
