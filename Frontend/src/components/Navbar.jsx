import { Outlet, Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import '../App.css';



const Navbar = () => {
  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById("mynavbar");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-sm navbarcolor">
      <div className="container-fluid">
        <Link to="/" className="routerlink" >
          DINESH
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span><CgMenuRight className="menuicon" /></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav m-auto d-flex navgap1">
            <Link to="/" className="routerlink" onClick={handleLinkClick}>
              <li className="nav-item routerlink">Home</li>
            </Link>
            <Link to="/experience" className="routerlink" onClick={handleLinkClick}>
              <li className="nav-item routerlink">Experience</li>
            </Link>
            <Link to="/skills" className="routerlink" onClick={handleLinkClick}>
              <li className="nav-item routerlink">Skills</li>
            </Link>
            <Link to="/education" className="routerlink" onClick={handleLinkClick}>
              <li className="nav-item routerlink">Education</li>
            </Link>
            <Link to="/project" className="routerlink" onClick={handleLinkClick}>
              <li className="nav-item routerlink">Project</li>
            </Link>
            <Link to="/contact" className="routerlink" onClick={handleLinkClick}>
              <li className="nav-item routerlink">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
