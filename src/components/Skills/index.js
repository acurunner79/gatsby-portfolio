import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap, FaNode, FaNpm, FaDocker, FaUbuntu, FaGithub, FaWindows,   } from 'react-icons/fa'
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr";
import { SiRubygems, SiMongodb, SiPostgresql, SiRuby, SiRails, SiPostman } from "react-icons/si";
import './style.css'


const Skills = () => {

    return (
        <div>
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
                    <GrGraphQl size="70" color="#d000ff"/>
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
        </div>
    )
}

export default Skills