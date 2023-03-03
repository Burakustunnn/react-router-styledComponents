// import { Link } from "react-router-dom";
import "./Navbar.styled"
// import { NavLink } from "react-router-dom";
import { Div,XD } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Div>
          <XD to="/">HOME</XD>
          <XD to="about">ABOUT ME</XD>            
          <XD to="project">MY PROJECTS</XD>    
          <XD to="contact" target="true">CONTACT</XD>      
    </Div>
  )
}

export default Navbar
