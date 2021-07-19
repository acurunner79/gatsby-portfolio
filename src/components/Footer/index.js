import React from 'react' 
import logo from '../../images/favicon-icon.png'
import '../../styles/footer.css'


const Footer = () => {
    return (
        <div className="footer-main">
            <img id="footer-icon"src={logo} alt="footer-logo"/>
            <div>
                <label>Copyright</label>
            </div>
                
        </div>
    )
}


export default Footer