import React from 'react'
import './Page.css'
import  left from '../Assets/left.png';
import right from '../Assets/right.png';
import cap from '../Assets/cap.png';
const Welcome = () => {
    return(
        <div className="welcome">
            <div className="div">
            <div className="header">
                <img className="top-left" alt="" src={left} />
                <img className="top-right" alt="" src={right} />
            </div>
            <div className="label">
                <div className="text">eduLearn</div>
            </div>
            <div className="stuimg">
                <img src={cap} alt="" />
            </div>
            <div className="label1">Welcome</div>
            <div className="text1">Enhance your skills in no time </div>
            <div className="frame">
               <div className="frame-content">
                  <div className="text-content">Lets Go</div>
               </div>
        </div>
        </div>
        </div>
    )
}
export default Welcome;