import './topbar.scss'
import { Mail} from "@material-ui/icons"
// import {Person} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> Christian Maldonado</a>
                    {/* This allows to have phone number show up on topbar  */}
                    {/* <div className="itemcontainer">
                        <Person className="icon"/>
                        <span> 831-578-4909 </span>
                    </div> */}
                    <div className="itemcontainer">
                        <Mail className="icon"/>
                        <span> Chris.maldonado99@gmail.com </span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
