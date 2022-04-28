import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/store" className="navbar-item">
              Store
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/signin" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
