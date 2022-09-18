import "./style.scss";
import { NavLink } from "react-router-dom";

export const MyAccount = () => {
  return (
    <div>
      <h1>MyAccount</h1>
      <NavLink to="/editProfile">Edit Profile</NavLink>
    </div>
  );
};
