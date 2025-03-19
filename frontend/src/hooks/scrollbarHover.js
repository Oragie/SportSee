/**
 * @file scrollbarHover.js
 * @description Hook personnalisé permettant d'ajouter un effet de survol sur les barres de défilement (scrollbars).
 * @returns {React.RefObject} Une référence (`ref`) à l'élément ciblé pour appliquer l'effet de survol de la scrollbar.
 */

import { useEffect, useRef } from "react";

function ScrollbarHover() {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      const handleMouseMove = (e) => {
        const {
          offsetWidth,
          clientWidth,
          offsetHeight,
          clientHeight,
          offsetLeft,
          offsetTop,
        } = content;
        const scrollbarWidth = offsetWidth - clientWidth; // Largeur de la scrollbar verticale
        const scrollbarHeight = offsetHeight - clientHeight; // Hauteur de la scrollbar horizontale

        // Vérifie si la souris est sur la scrollbar verticale
        const isOnVerticalScrollbar =
          e.clientX > offsetLeft + clientWidth - scrollbarWidth;

        // Vérifie si la souris est sur la scrollbar horizontale
        const isOnHorizontalScrollbar =
          e.clientY > offsetTop + clientHeight - scrollbarHeight;

        if (isOnVerticalScrollbar || isOnHorizontalScrollbar) {
          content.classList.add("hover-scrollbar");
        } else {
          content.classList.remove("hover-scrollbar");
        }
      };

      const handleMouseLeave = () => {
        content.classList.remove("hover-scrollbar");
      };

      // Ajoute les écouteurs d'événements
      content.addEventListener("mousemove", handleMouseMove);
      content.addEventListener("mouseleave", handleMouseLeave);

      // Nettoyage des écouteurs d'événements à la fin
      return () => {
        content.removeEventListener("mousemove", handleMouseMove);
        content.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []); // Le tableau vide [] garantit que cet effet est exécuté une fois après le montage

  return contentRef;
}

export default ScrollbarHover;

/* Appeler le Hook dans le "html" avec l'attribut "ref"
<div className="classOfMyContainer" ref={ScrollbarHover()}></div>
*/
