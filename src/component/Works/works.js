import React from "react";
import "./works.css";
// import Portfolio1 from "../../Content/myp.png";
import Portfolio from "../../Content/portfolio.avif";
const SeeMore = () =>
{
    alert("now only these projects have been done")
}
const Works = () =>
{
    return (
        <section id="works">
            <h2 className="worksTitile"><span className="skillTitleMy">My </span> Work</h2>
            <div className="worksImgs">
                <div className="worksImg11">
                <a href=" " ><img  src={Portfolio} alt="Portfolio1" className="worksImg1"/></a>
                <h3 className="Desctext">This is my personal portfolio</h3>
                <p  className="Desctext">Technologies : HTML, CSS, JS, ReactJs</p>
                </div>
                {/* <img src={Portfolio1} alt="" className="worksImg"/> */}
                {/* <img src={Portfolio1} alt="" className="worksImg"/> */}
            </div>
            
                  <button className="workBtn" onClick={SeeMore} >See More</button>
        
        </section>
    )
}
export default Works;