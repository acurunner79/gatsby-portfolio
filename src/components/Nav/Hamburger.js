import React, { useState } from 'react'
import RightNav from './RightNav'
import '../../styles/Hamburger.css'



const Hamburger = () => {
    const [open, setOpen] = useState(false)


    const handleClick = () => {
      setOpen(!open)
    }
    const isOpen = () => {
    return (
        <>
          <div className="hamburger open" open={open} onClick={handleClick}>
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </div>
          <div className="outside open" onClick={handleClick}></div>
          <div className="right-nav open">
            <RightNav handleClick={handleClick}/>
          </div>
        </>
    )
    }
    const isClosed = () => {
        return (
          <>
            <div className="hamburger" open={open} onClick={handleClick}>
                <div id="one"></div>
                <div id="two"></div>
                <div id="three"></div>
            </div>
            <div className="outside"></div>
            <div className="right-nav">
              <RightNav handleClick={handleClick}/>
            </div>
          </>
        )
    }
    
    return (
        open ? isOpen() : isClosed()
    )
}

export default Hamburger