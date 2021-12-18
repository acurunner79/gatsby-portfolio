import React from 'react' 
import Layout from '../components/Layout/index'
import Seo  from '../components/Seo/index'
// import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaNode, FaNpm, FaDocker, FaUbuntu, FaGithub, FaWindows, FaReact} from '@react-icons/all-files'
import { FaCss3 }from '@react-icons/all-files/fa/FaCss3'
import { FaHtml5 }from '@react-icons/all-files/fa/FaHtml5'
import { FaJs } from '@react-icons/all-files/fa/FaJs'
import { FaBootstrap } from '@react-icons/all-files/fa/FaBootstrap'
import { FaNode } from '@react-icons/all-files/fa/FaNode'
import { FaNpm } from '@react-icons/all-files/fa/FaNpm'
import { FaDocker } from '@react-icons/all-files/fa/FaDocker'
import { FaUbuntu } from '@react-icons/all-files/fa/FaUbuntu'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaWindows } from '@react-icons/all-files/fa/FaWindows'
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql'
import { GrGatsbyjs } from '@react-icons/all-files/gr/GrGatsbyjs'
import { CgFileDocument } from '@react-icons/all-files/cg/CgFileDocument'
import { SiRuby } from '@react-icons/all-files/si/SiRuby'
import { SiPostman } from '@react-icons/all-files/si/SiPostman'
import { SiRails } from '@react-icons/all-files/si/SiRails'
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql'
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb'
import { SiRubygems } from '@react-icons/all-files/si/SiRubygems'
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import '../styles/main.css'


const Index = () => {
    
  return (
    <Layout>
      <Seo title="Home" />
        <div className="main-container">
          <h1 id="my-name">Jorge Soto</h1>
          <img src="https://res.cloudinary.com/acurunner79/image/upload/v1609628595/a41da708-81e9-4ec3-9364-9d8748f7063d-abefd9c3-2fd7-4408-9b0a-a57280c0ca82-v1_iaim8e.png" alt="Jorge Soto"></img>
          <div className="click-icons">
          <h2 id="my-title" >Software Engineer</h2>
            <div id="home-icons">
              <a className="icon-hover" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1cHCoiVcES6uHkpnJ37Y4np6dteilCvuEUfaUDPhMQdY/edit?usp=sharing">
                  {/* <h2>Resume</h2> */}
                  <CgFileDocument className="icon" size="40" color="#32bacc"/>   
              </a>
              <a className="icon-hover" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jorgelsotojr/">
                  {/* <h2>Linkedin</h2> */}
                  <AiOutlineLinkedin className="icon" size="40" color="#32bacc"/>
              </a>
              <a className="icon-hover" target="_blank" rel="noreferrer" href="https://github.com/acurunner79">
                  {/* <h2>GitHub</h2> */}
                  <FaGithub className="icon" size="40" color="#32bacc"/>
              </a>
            </div>
          </div>
          <div>
            <p id="statement">Software Engineer and professional dancer who is always looking for ways to improve in all aspects. I use React to develop responsive applications with cleaner code. Eager to create unique web applications that challenge me to deliver an even greater product</p>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <p id="skills-description">I've listed my skills in the section below. Please feel free to hover over the sections to learn more.</p>
        </div>
        <div className="skills-main">
            <div className="skills-container">
                <h1>Front-End</h1>
            <div className="front-end">
                <section className="icons">
                    <FaReact size="70" color="light blue"/>
                    <p className="hidden-text">React</p>
                </section>
                <section className="icons">
                    <FaHtml5 size="70" color="orange"/>
                    <p className="hidden-text">HTML5</p>
                </section>
                <section className="icons">
                    <FaCss3 size="70" color="blue"/>
                    <p className="hidden-text">CSS3</p>
                </section>
                <section className="icons">
                    <FaJs size="70" color="#c8ce0a"/>
                    <p className="hidden-text">JavaScript</p>
                </section>
                    <p className="hidden-text">Here is a list of front end languages and frameworks in which I've worked with on all of my projects. I've also worked with some libraries such as React Styled Components, React Bootstrap, and React Icons. I am also experienced in using Netlify for all of my front end deployments. </p>
                <section className="icons">
                    <FaBootstrap size="70" color="purple"/>
                    <p className="hidden-text">Bootstrap</p>
                </section>
                <section className="icons">
                    <FaNode size="70" color="green"/>
                    <p className="hidden-text">NodeJS</p>
                </section>
                <section className="icons">
                    <FaNpm size="70" color="red"/>
                    <p className="hidden-text">NPM</p>
                </section>
                <section className="icons">
                    <GrGatsbyjs size="70" color="purple"/>
                    <p className="hidden-text">GatsbyJs</p>
                </section>
            </div>
            </div>
            <div className="skills-container">
                <h1>Back-End</h1>
                <div className="back-end">
                    <section className="icons">
                        <SiRuby size="70" color="red"/>
                        <p className="hidden-text">Ruby</p>
                    </section>
                    <section className="icons">
                        <SiPostgresql size="70"/>
                        <p className="hidden-text">PostgreSQL</p>
                    </section>
                    <section className="icons">
                        <SiRails size="70" color="red"/>
                        <p className="hidden-text">Ruby On Rails</p>
                    </section>
                    <section className="icons">
                        <SiPostman size="70" color="#DD6D05"/>
                        <p className="hidden-text">Postman</p>
                    </section>
                        <p className="hidden-text">Proficient in working with SQL relational databases, NoSQL non-relational databases, and have worked with Heroku's container-based cloud platform for deployments. I've also created projects with full CRUD capabilities and have used tools like Postman to test my routes are functioning properly.</p>
                    <section className="icons">
                        <SiMongodb size="70" color="#036B03"/>
                        <p className="hidden-text">MongoDB</p>
                    </section>
                    <section className="icons">
                    <SiGraphql size="70" color="#d000ff"/>
                    <p className="hidden-text">GraphQL</p>
                </section>
                <section className="icons">
                    <SiRubygems size="70" color="red"/>
                    <p className="hidden-text">Ruby Gems</p>
                </section>
                </div>
            </div>
            <div className="skills-container">
                <h1>Tech Stuff</h1>
                <div className="tech-stuff">
                    <section className="icons">
                        <FaGithub size="70" color="#d000ff"/>
                        <p className="hidden-text">GitHub</p>
                    </section>
                    <section className="icons">
                        <FaWindows size="70"/>
                        <p className="hidden-text">Windows</p>
                    </section>
                    <section className="icons">
                        <FaUbuntu size="70" color="orange"/>
                        <p className="hidden-text">Ubuntu</p>
                    </section>
                    <section className="icons">
                        <img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622747987/3525127881551941184-512_xr1x1y.png"/>
                        <p className="hidden-text">Linux</p>
                    </section>
                        <p className="hidden-text">My passion for tech goes beyond coding! I currently have my own at home server that is currently running UnRAID. UnRAID has introduced me to things like, XML, Dockers, Plugins, KVM Templates, and so on. It's also allowed me to be able to inprove my skills on Windows, Linux, and MacOS. I'm also very comfortable using GitHub with all my projects including the use of dev branches while working on team projects.</p>
                    <section className="icons">
                        <img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622747599/UnRAID-Icon_aycrd6.png"/>
                        <p className="hidden-text">UnRAID</p>
                    </section>
                    <section className="icons">
                        <FaDocker size="70" />
                        <p className="hidden-text">Dockers (UnRAID)</p>
                    </section>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Index
