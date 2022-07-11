import { NavLink } from "react-router-dom";
import Burger from "./Burger";

const Header = () => {
    return(
     
        <nav>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4j_t0ol_opHLbffHi6cW4psxkbM4AxUNseTyJQtZupZX_mwg08kJw3VV6SoFXEyGc-iI&usqp=CAU" alt="logo"></img>
            <div className="nav-link" >
               <NavLink to="/">Main</NavLink>
               <NavLink to="/Services">Services</NavLink> 
            </div>
            <Burger></Burger>
        </nav>
 
    )
}

export default Header;