import "./style.scss";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineShowChart } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";

export const DashboardAnalytic = ({ quantity, type, status }) => {
  const textClassName =
    status === "profit"
      ? "dashboard__analytic__profit"
      : "dashboard__analytic__loss";
  console.log(textClassName);
  return (
    <div className="dashboard__analytics__item">
      <div className="dashboard__analytics__item__header">
        {type === "revenue" ? (
          <>
            <RiMoneyDollarCircleLine fontSize={30} className="icon" />
            <span className={textClassName}>${quantity}</span>
          </>
        ) : null}
        {type === "rating" ? (
          <>
            <BsStarHalf fontSize={30} className="icon" />
            <span className={textClassName}>{quantity}/5</span>
          </>
        ) : null}
        {type === "students" ? (
          <>
            <TbUsers fontSize={30} className="icon" />
            <span className={textClassName}>{quantity}</span>
          </>
        ) : null}
      </div>
      <div className="dashboard__analytics__item__footer">
        {type === "revenue" ? (
          <>
            <span className="dashboard__analytic__title">Total Revenue</span>
          </>
        ) : null}
        {type === "rating" ? (
          <>
            <span className="dashboard__analytic__title">Average Rating</span>
          </>
        ) : null}
        {type === "students" ? (
          <>
            <span className="dashboard__analytic__title">Total Students</span>
          </>
        ) : null}
        {status === "profit" ? (
          <MdOutlineShowChart fontSize={30} className="icon" color="#cdeabc" />
        ) : null}
        {status === "loss" ? (
          <MdOutlineShowChart
            fontSize={30}
            className="icon-flip"
            color="#f8d7da"
          />
        ) : null}
      </div>
    </div>
  );
};
