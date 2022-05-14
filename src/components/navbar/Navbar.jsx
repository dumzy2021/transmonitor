import "./navbar.scss";
import Profile from "../../assets/images/avatar.jpg";
import Bell from "../../assets/icons/Bell.svg";
import SearchIcon from "../../assets/icons/Search.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TransMonitor
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={Profile} alt="Profile sm" className="profile-img-sm" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="px-md-2 d-flex align-items-center">
            <span className="search-icon">
              <img src={SearchIcon} alt="Search Icon" className="" />
            </span>
            <input
              className="form-control navbar-search shadow-none me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 me-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="search-icon">
                  <img src={Bell} alt="Search Icon" className="" />
                  <span className="bell-info">5</span>
                </span>
              </a>
            </li>
          </ul>
          <div className="profile-info d-flex align-items-center">
            <span className="user-info me-2 me-lg-4 d-none d-md-block">
              <span className="greetings"> Hello </span>
              <br />
              <span className="username"> Oluwaleke Ojo </span>
            </span>
            <img src={Profile} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
