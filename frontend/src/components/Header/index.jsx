import "./header.scss";
import Logo from "../../assets/img/logo.svg";
import { NavLink, useParams } from "react-router-dom";
import ScrollbarHover from "../../hooks/scrollbarHover";

function Header() {
  const { id } = useParams();
  const scrollbarRef = ScrollbarHover();

  return (
    <header className="header" ref={scrollbarRef}>
      <NavLink to="/">
        <img className="header-logo" src={Logo} alt="Logo SportSee" />
      </NavLink>
      <nav className="nav-header">
        <ul className="nav-ul">
          <li>
            <NavLink to={`/user/${id}`} className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={`/user/${id}/profil`} className="nav-link">
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to={`/user/${id}/settings`} className="nav-link">
              Réglages
            </NavLink>
          </li>
          <li>
            <NavLink to={`/user/${id}/community`} className="nav-link">
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
