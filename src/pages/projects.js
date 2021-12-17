import React from 'react'
import Layout from '../components/Layout/index'
import Card from 'react-bootstrap/Card'
import Accordion  from 'react-bootstrap/Accordion'
import projects from "../json/projects.json"
import '../styles/projects.css'


const Projects = () => {

    return (
        <Layout>
           <div>
                <h1>Projects</h1>
            <div className="card-container">
                {projects.map(project => {
                    return ( 
                        <div key={project.id}>
                        <h2>{project.name}</h2>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="project-image" src={project.image} />
                                <Accordion >
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <div className="button-container">
                                            <button className="card-button" variant="secondary" ><h4><a target="_blank" rel="noreferrer" href={project.live}>Go To Site</a></h4></button>
                                            <button className="card-button" variant="secondary" ><h4><a target="_blank" rel="noreferrer" href={project.github}>GitHub</a></h4></button>
                                        </div>
                                            <h4>Description</h4>
                                        <div class="center-con">
                                            <div class="round">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="descr-style">{project.description}</Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                                    <Card.Body className="card-body">
                                        <Card.Title></Card.Title>
                                            <Card.Text className="card-text">
                                           {/* {project.description} */}
                                            </Card.Text>
                                </Card.Body>
                        </Card>
                    </div>
                    )
                })}
            </div>
            </div>
        </Layout>
    )
}


export default Projects