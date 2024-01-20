import React, { useRef } from "react";
import "./contact.css";
import FB from "../../Content/fbf.png";
import insta from "../../Content/insta.png";
import lin from "../../Content/linkedin.png";
import emailjs from '@emailjs/browser';


const Contact = () =>
{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_085ipt6', 'template_ppa89kl', form.current, 'kDuAOhXfR5ojG_lYA')
        .then((result) => {
            console.log(result.text);
            alert('email sent');
            e.target.reset();
         
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <section id = " contactPage">
            <div id="contact">
                <h1 className="contactPageTitle"><span className="skillTitleMy">Contact </span> Me</h1>
                <h4 className="contactDesc">Please fill out the form below to discuss any work opportunities</h4>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Enter Your Full Name" name="your_name"/> <br/>
                    <input type="email" className="email" placeholder="enter your email id" name="your_email"/> <br/>
                    <textarea className="msg" name="message" rows="5" placeholder="Text your message"></textarea> <br/>
                    <button type="submit" value="Send" className="submitBtn" >Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/vineet.magadum?mibextid=ZbWKwL" target="_new">
                        <img src={FB}  alt="fb" className="link"/>
                        </a>
                        <a href="https://instagram.com/tigervineet_vm?igshid=NGVhN2U2NjQ0Yg==" target="_new"><img src={insta} target="_new" alt="insta" className="link"/></a>
                        <a href="https://www.linkedin.com/in/vineet-v-magadum-500600195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_new"><img src={lin} target="_new" alt="lin" className="link"/></a>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact;