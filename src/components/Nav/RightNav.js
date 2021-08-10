import React from 'react'
import { Link } from "gatsby"
import '../../styles/RightNav.css'



const RightNav = (props) => {
  
  
    return (     
    <div className="links-container">
        <Link to="/main">
          <li className="links" onClick={props.handleClick}>
            Home
          </li>
        </Link>
        <Link to="/projects">
          <li className="links" onClick={props.handleClick}>
            Projects
          </li>
          </Link>
          {/* <Link to="/blog">
          <li className="links" onClick={props.handleClick}>
            Blog
          </li>
          </Link>   */}
          <Link to="/contact">
            <li className="links" onClick={props.handleClick}>
              Contact
            </li>
          </Link>      
    </div>
    )
}

export default RightNav
