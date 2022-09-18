import { BiMessageSquareDots, BiUser } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { TbBooks } from "react-icons/tb";
import { RiDashboardLine } from "react-icons/ri";
import { Outlet, NavLink } from "react-router-dom";
import "./style.scss";
import { useEffect } from "react";
import logo from "../../assets/images/logo.png";

export default function Root() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <img className="logo" src={logo} alt="Profile" />
        <nav>
          <ul>
            <li>
              <NavLink to={"/"} id="dashboard" className="navbar__item" end>
                <RiDashboardLine className="navbar__icon" />
                <span className="navbar__label">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"myScheduler"}
                id="myScheduler"
                activeClassName="navbar__item__active"
                className="navbar__item "
              >
                <HiOutlineCalendar className="navbar__icon" />
                <span className="navbar__label">My Scheduler</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"messages"}
                id="messages"
                activeClassName="navbar__item__active"
                className="navbar__item"
              >
                <BiMessageSquareDots className="navbar__icon" />
                <span className="navbar__label">Messages</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"myCourses"}
                id="myCourses"
                activeClassName="navbar__item__active"
                className="navbar__item"
              >
                <TbBooks className="navbar__icon" />
                <span className="navbar__label">My courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"myAccount"}
                id="myAccount"
                activeClassName="navbar__item__active"
                className="navbar__item"
              >
                <span>
                  <BiUser className="navbar__icon" />
                </span>
                <span className="navbar__label">My account</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="dashboard__right">
        <Outlet />
      </div>
    </div>
  );
}
