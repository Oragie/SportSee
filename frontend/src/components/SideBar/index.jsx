/**
 * @file index.jsx
 * @description Composant React affichant une barre latérale avec des icônes de navigation pour différentes activités sportives.
 */

import "./sideBar.scss";
import Fitness from "../../assets/img/dumbbell.svg";
import Yoga from "../../assets/img/yoga.svg";
import Natation from "../../assets/img/natation.svg";
import Bike from "../../assets/img/bike.svg";
import { NavLink } from "react-router-dom";
import ScrollbarHover from "../../hooks/scrollbarHover"; // Importation du hook

/**
 * Composant affichant une barre latérale de navigation avec des icônes de sports.
 * @returns {JSX.Element} Composant SideBar.
 */
function SideBar() {
  return (
    <>
      <aside className="sideBar" ref={ScrollbarHover()}>
        {" "}
        {/* utilisation du Hook*/}
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
