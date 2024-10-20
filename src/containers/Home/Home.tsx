import { NavLink } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid m-3">
        <a className="navbar-brand" href="#">
          Find movie
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/TopMovies"
                >
                  Top Movies
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/Actors"
                >
                  Actors
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/MovieBar"
                >
                  Portfolio
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Home;
