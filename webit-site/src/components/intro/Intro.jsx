import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Developer", "Designer", "Content Creation", "Marketing"],
      });
    }, []);
    
    return (
      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/intro.png" alt="" />
          </div>
        </div>
      
      <div className="right">
        <div className="wrapper">
          <h1>WebIT Consulting </h1>
          <h2> Take Your Imagination To The Web </h2>
          <h3>
            Business <span ref={textRef}></span> 
          </h3>        
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
        
        
        </div> 
        </div>
    )
}