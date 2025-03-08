import "./style/global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/404";
import UserLayout from "./pages/UserLayout";
import UserDashboard from "./pages/UserDashboard";
import UserProfil from "./pages/UserProfil";
import UserReglage from "./pages/UserReglage";
import UserCommunaute from "./pages/UserCommunaute";

/**
 * Composant principal de l'application.
 *
 * Il configure les différentes routes de l'application à l'aide de React Router.
 *
 * @returns {JSX.Element} Le composant Router avec les routes configurées.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />

        <Route path="/user/:id/" element={<UserLayout />}>
          <Route index element={<UserDashboard />} /> {/* Route par défaut */}
          <Route path="profil" element={<UserProfil />} />
          <Route path="reglage" element={<UserReglage />} />
          <Route path="communaute" element={<UserCommunaute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
