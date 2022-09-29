import "./style.scss";
import { TbVideoPlus } from "react-icons/tb";
import { RiMessage3Line } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { DashboardAnalytic, BarChart } from "../../components";

export const Dashboard = () => {
  const Avatar = require("../../assets/images/avatar.jpg");
  const handleNewCourse = () => {
    alert("New course");
  };
  const data = {
    name: "Samantha",
    price: 168.2,
    rating: 4.5,
    students: 1000,
  };
  return (
    <div className="dashboard__full">
      <div className="dashboard__full__left">
        <div className="dashboard__header">
          <span>
            Good morning, <b>{data.name}</b> 😊
          </span>
          <button className="button" onClick={handleNewCourse}>
            <TbVideoPlus fontSize={20} className="icon" />
            <span>New course</span>
          </button>
        </div>
        <div className="dashboard__analytics">
          <DashboardAnalytic
            quantity={data.price}
            type="revenue"
            status="profit"
          />
          <DashboardAnalytic
            quantity={data.rating}
            type="rating"
            status="profit"
          />
          <DashboardAnalytic
            quantity={data.students}
            type="students"
            status="loss"
          />
        </div>
        <div className="dashboard__chart">
          <span className="dashboard__chart__title">Revenue</span>
          <BarChart />
        </div>
        <div className="dashboard__footer">
          <div className="course__stats">
            <span className="course__stats__title">Course stats</span>
          </div>
          <div className="sales_stats">
            <span className="sales_stats__title">Sales stats</span>
          </div>
        </div>
      </div>
      <div className="dashboard__full__right">
        <div className="dashboard__full__right__top">
          <div className="dashboard__full__right__top__left">
            <div className="avatar__container">
              <img
                className="avatar"
                width={40}
                height={40}
                src={Avatar}
                alt="Profile"
              />
            </div>
            <div className="profile__details">
              <span className="profile__details__name">Samantha</span>
              <span className="profile__details__role">English Teacher</span>
            </div>
          </div>  
          <div className="profile__buttons">
            <button
              onClick={() => alert("Messages")}
              className="button__messages"
            >
              <RiMessage3Line size={23} />
            </button>
            <button
              onClick={() => alert("Notifications")}
              className="button__notifications"
            >
              <MdOutlineNotifications size={23} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
