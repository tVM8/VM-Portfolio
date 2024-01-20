import React from "react";
import "./about.css";


const About = () =>
{
    return(
        <section id="about">
            <span className="aboutTitle"><span className="skillTitleMy">A</span>bout</span><br/>
            <span className="aboutDesc"><h4>
            Hello! I am Vineet Magdum, a passionate and adaptable individual with a background in Mechanical Engineering and recent certification in  Adavanced Computing/CS/IT  from CDAC. This academic journey sparked my enthusiasm for creating innovative solutions in the ever-evolving tech landscape. <br/> As a fresher entering the professional arena, I bring a fresh perspective, a quick learning ability, and a dedication to contributing meaningfully to projects. I am excited about the prospect of applying my skills in a practical setting and am actively seeking opportunities in the IT industry. </h4></span>

            <div className="aboutBar">
            
                 <div className="aboutBarText">
                    <h2>QUALIFICATION</h2>
                    
                    <p className="desc">
                        •   PG Diploma ( Adavanced Computing/CS/IT ) - 2023 - CDAC - 73.63% <br/>
                        •   B.Tech ( Mechanical ) - 2022 - D Y Patil College of Engineering and Technology, Kolhapur - 80.74% <br/>
                        •   HSC (12th) - 2018 - Sou. S.M. Lohia Jr. College, Kolhapur - 66% <br/>
                        •   SSC (10th) -  2016 - Shri Lal Bahadur Shastri Highschool, Kolhapur -  87.4%
                    </p>
                    
                 
                 {/* <div className="skillBarText"> */}
                    <br/>
                    <h2>KNOWN LANGAUGES</h2>
                    <p className="desc">
                        •	Marathi <br/>
                        •	English <br/>
                        •	Hindi
                    </p>
                 {/* </div> */}
                 {/* <div className="skillBarText"> */}
                    <br/>
                    <h2>HOBBIES</h2>
                    <p className="desc">
                        •	Playing Chess, Cricket & Football <br/>
                        •  	Reading <br/>
                        •	Music <br/>
                        •   Photography/Videography
                    </p>
                 {/* </div> */}
                 </div>
            </div>
             
        </section>
    )
}
export default About;