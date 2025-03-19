import "./sideBar.scss";
import Fitness from "../../assets/img/dumbbell.svg";
import Yoga from "../../assets/img/yoga.svg";
import Natation from "../../assets/img/natation.svg";
import Bike from "../../assets/img/bike.svg";
import { NavLink } from "react-router-dom";
import ScrollbarHover from "../../hooks/scrollbarHover";

function SideBar() {
  return (
    <>
      <aside className="sideBar" ref={ScrollbarHover()}>
        {" "}
        <nav className="navSideBar">
          <NavLink to="#">
            <div className="iconContent">
              <img className="sideBarIcon" src={Yoga} alt="Icon yoga" />
            </div>
          </NavLink>
          <NavLink to="#">
            <div className="iconContent">
              <img className="sideBarIcon" src={Natation} alt="Icon natation" />
            </div>
          </NavLink>
          <NavLink to="#">
            <div className="iconContent">
              <img className="sideBarIcon" src={Bike} alt="Icon bike" />
            </div>
          </NavLink>
          <NavLink to="#">
            <div className="iconContent">
              <img className="sideBarIcon" src={Fitness} alt="Icon halter" />
            </div>
          </NavLink>
        </nav>
        <p className="copyright">Copyright, SportSee 2020</p>
      </aside>
    </>
  );
}

export default SideBar;
