import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./preloader.css";

const Preloader = () =>
{
    useEffect(() => {
    preLoaderAnim()
    },[]
    );
    return(
        <div className="preloader">
            <div className="texts-container" >
                <span>Welcome </span>
                <span>to</span>
                <span>the</span>
                <span>Vineet's</span>
                <span>Profile</span>
            </div>
            
        </div>
    )
}

export default Preloader;