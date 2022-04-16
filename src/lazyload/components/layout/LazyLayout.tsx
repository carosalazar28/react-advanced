import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { About, Home, Users } from "../../pages/Index";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/* Children Routes here */}
      <ul>
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<Navigate replace to="home" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
