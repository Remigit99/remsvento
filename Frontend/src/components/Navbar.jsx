
import "../../styles/navStyle.css"
import { navLinks } from "../../utlis/navlinks"

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <div className="logo">
            <h3>rem<span>Vento</span></h3>
          </div>
        </div>

        <div className="nav__container-left">
          <div className="menu__links">
            {
              navLinks.map(({ id, title }) => <navLinks key={id}>{title}</navLinks>)
            }
          </div>

          <div className="reg_login">
            <button>Login</button>
            <button>Signup</button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar