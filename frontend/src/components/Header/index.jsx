/**
 * @file index.jsx
 * @description Composant React affichant l'en-tête avec la navigation et le logo.
 */

import "./header.scss";
import Logo from "../../assets/img/logo.svg";
import { NavLink, useParams } from "react-router-dom";
import ScrollbarHover from "../../hooks/scrollbarHover"; // Importation du hook

/**
 * Composant affichant l'en-tête avec le logo et la barre de navigation.
 * Utilise le hook `ScrollbarHover` pour gérer l'effet de survol sur la barre de défilement.
 * @returns {JSX.Element} Le composant Header avec la navigation.
 */
function Header() {
  const { id } = useParams();
  const scrollbarRef = ScrollbarHover(); // Initialisation du hook

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
