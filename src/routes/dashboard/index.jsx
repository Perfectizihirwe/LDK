import "./style.scss";
import { TbVideoPlus } from "react-icons/tb";
import { DashboardAnalytic, BarChart } from "../../components";

export const Dashboard = () => {
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
      </div>
      <div className="dashboard__full__right">
        <span>Right</span>
      </div>
    </div>
  );
};
