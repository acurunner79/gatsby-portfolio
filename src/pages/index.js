import React from "react"
import { Layout, Seo } from "components"
import { Link } from 'gatsby'
import '../styles/landing.css'


const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <div>
        </div>
        <div className="container">
            <div className="logo">
                <img className="logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1616873759/website_logo_transparent_background_2_ahhr1g.png" alt="landing-logo"/>
            </div>
            
          <Link to="/main">
            <button className="button"><h3>Enter Site</h3></button>
          </Link>
        </div>
        </div> 
    </Layout>
  )
}

export default Index
