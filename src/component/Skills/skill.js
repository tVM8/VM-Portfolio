import React from "react";
import "./skill.css";


const Skills = () =>
{
    return(
        <section id="skill">
            <span className="skillTitle"><span className="skillTitleMy">My </span>Skills</span><br/>
        
            <div className="skillBar">
            
                 <div className="skillBarText1">
                    <h2>
                    <ul className="skilldesc">
                    <p className="desct1">JAVA8</p>
                    <p className="desct2">OOPS</p>
                    <p className="desct3">HTML5</p>
                    <p className="desct4">CSS3 </p>
                    <p className="desct5">JavaScript</p>
                    <p className="desct6">ReactJS </p> 
                    </ul>
                    </h2>
                 </div>
                 <div className="skillBarText2">

                    <h2>
                    <ul className="skilldesc">
                    <p className="desct7">MySQL DB</p> 
                    <p className="desct8">DSA</p> 
                    <p className="desct9">Solution oriented </p>
                    <p className="desct10">Co-operative </p>
                    <p className="desct11">Management</p> 
                    <p className="desct12">MS office suite </p>
                    </ul>
                    </h2>
                 </div>
                
            </div>
             
        </section>
    )
}
export default Skills;