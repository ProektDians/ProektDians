import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  NavMenu
} from "./navBarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                DIANS PROEKT
            </NavLogo>
           
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Почетна
                </NavLink>
                <NavLink to="/prebaruvajne" activeStyle>
                    Пребарувај
                </NavLink>
                <NavLink to="/about" activeStyle>
                    За Нас
                </NavLink>
               
               
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;