import React from "react";
import './intro.css';
import bg from '../../Content/myp.png';
import {Link} from 'react-scroll';
import Resume from '../../Content/myp.png'


const MyPopup  = () =>
{
    alert("Please click on 'Contact Me' (LinkedIn) or email me on 'vineetm8520@gmail.com' this email ID");
}


// const mypopup = () =>
// {
//   <div className="popup">
//         <img src={popup} alt="popup"/>
//         <h2>Thank you for considering me.</h2>
//         <p><b>Please click on 'Contact Me' or email me on 'vineetm8520@gmail.com' on this email ID </b></p>
//         <button type="button">OK</button>
//   </div>
// }

const Intro = () =>
{
    return(
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I am 
                <span className="introName"> Vineet,</span> <br/>
                <span className="fsd">Full Stack Developer</span>
                <p className="introPara">Seeking an entry-level position with growing organization <br/> where I can utilize my analytical thinking, technical & management skills.</p> 
            </span>
            <Link>
                <button className="btn" onClick={MyPopup}>Hire Me</button></Link>
                
               <button  className="btn2"  >  
               
                <a href={Resume} target="_new"> <button className="btn3">Download Resume</button>  </a> 
               
                </button>
              
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    )
}
export default Intro;