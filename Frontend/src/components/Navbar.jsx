import { Link } from "react-router-dom"
import "../../styles/navStyle.css"
import { navLinks } from "../../utlis/navlinks"

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <Link to="/" className="logo">
            <h3>rem<span>Vento</span></h3>
          </Link>
        </div>

        <div className="nav__container-left">
          <div className="menu__links">
            {
              navLinks.map(({ id, title, path }) => <Link to={path} key={id}>{title}</Link>)
            }
          </div>


        </div>

        <div className="reg_login">
          <Link to="/login" className="btn loginBtn">Login</Link>
          <Link to="/register" className="btn regBtn" >Sign Up</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar