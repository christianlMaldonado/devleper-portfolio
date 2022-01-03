import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/intro.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>WebIT Consulting </h2>
          <h1> by Chrisitian Maldonado</h1>
          <h3> Take Your Imagination To The Web</h3>        
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
        
        
        </div> 
        </div>
    )
}