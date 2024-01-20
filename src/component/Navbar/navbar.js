import React from "react";
import './navbar.css';
import vm from '../../Content/vm.jpg'
import {Link} from 'react-scroll';

const Navbar = () =>
{
    return(
        <nav className="navbar">
        <a className="desktopMenuBtn2" href=" "><img src={vm} alt="vm" className="vm"/></a>
            
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true}  offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="about" spy={true}  offset={-15} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="skill" spy={true}  offset={-20} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass="active" to="works" spy={true}  offset={-20} duration={500} className="desktopMenuListItem">Work</Link>
                
            </div>
            <Link>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView();
            }}> Contact Me</button> </Link>
        </nav>
    )
}

export default Navbar;