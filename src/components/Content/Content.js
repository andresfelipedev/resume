import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Content.css'
import { languages } from '../../config';

const Content = ({ lang }) => (    
    <Row className="justify-content-md-center content">
        <Col xs={12} lg={10}>   
            <Row>        
                <Col xs={12} lg={6}>
                    <Row>                    
                        <Col xs={12}>
                            <Card>
                                <Card.Header>{languages[lang].profile}</Card.Header>
                                <Card.Body>                                    
                                    <Card.Text style={{textAlign: "justify"}}>
                                        {languages[lang].profile_description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>                   
                        </Col>                   
                        <Col xs={12}>
                            <Card>
                                <Card.Header>{languages[lang].skills}</Card.Header>
                                <Card.Body>                                                                        
                                    <Row>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={12} sm={6} md={6} lg={12}>
                                                    <span>{languages[lang].skills_front_end}</span>
                                                    <ul>
                                                        <li>HTML5</li>
                                                        <li>CSS3</li>                                                    
                                                        <li>Sass</li>                                                        
                                                        <li>Bootstrap</li>
                                                        <li>JavaScript</li>
                                                        <li>jQuery</li>
                                                        <li>React</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} sm={6} md={6} lg={12}>                                                    
                                                    <span>{languages[lang].skills_back_end}</span>
                                                    <ul>
                                                        <li>Node JS</li>
                                                        <li>Express</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={12} sm={6} md={6} lg={12}>                                      
                                                    <span>{languages[lang].skills_databases}</span>
                                                    <ul>
                                                        <li>MySQL</li>
                                                        <li>MongoDB</li>                                                                                                        
                                                    </ul>
                                                </Col>                                                                                                                            
                                                <Col xs={12} sm={6} md={6} lg={12}>                                      
                                                    <span>{languages[lang].skills_others}</span>
                                                    <ul>
                                                        <li>Git/GitHub</li>                                                    
                                                        <li>Firebase</li>
                                                        <li>Heroku</li>
                                                        <li>SEO</li>
                                                        <li>SCRUM</li>
                                                        <li>Kanban</li>                                                    
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>                                    
                                </Card.Body>
                            </Card>        
                        </Col> 
                        <Col xs={12}>
                            <Card>
                                <Card.Header>{languages[lang].competences}</Card.Header>
                                <Card.Body>                                    
                                    <Row>
                                        {
                                            languages[lang].competences_title_list.map((value, index) => {
                                                return (
                                                    <Col xs={12} key={value} style={{textAlign: "justify"}}>
                                                        <span>{value} - </span>
                                                        {languages[lang].competences_description_list[index]}
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                </Card.Body>
                            </Card>        
                        </Col>                   
                    </Row>
                </Col>                
                <Col xs={12} lg={6}>
                    <Row>                    
                        <Col xs={12}>
                            <Card>
                                <Card.Header>{languages[lang].personal_projects}</Card.Header>
                                <Card.Body>    
                                    <Row> 
                                        <Col xs={12} className="project-credentials">
                                            <span>{languages[lang].personal_projects_description}</span>
                                            <ul>
                                                <li>Username: <b>testuser</b></li>
                                                <li>Password: <b>testuser</b></li>
                                            </ul>
                                        </Col>                                        
                                        {
                                            languages[lang].personal_projects_list.map((project, index) => {
                                                return (
                                                    <Col xs={12} className="project" key={project}>
                                                        <a
                                                            href={project.url}
                                                            target={'_blank'}
                                                            rel={'noopener noreferrer'}
                                                            className="title">
                                                            {project.title}
                                                        </a>
                                                        <p>
                                                            {project.description}<br />
                                                            {project.technologies}<br />
                                                            GitHub:
                                                            <a 
                                                                href={project.gh_front_end}
                                                                target={'_blank'}
                                                                rel={'noopener noreferrer'}
                                                                className="link">
                                                                Front-end
                                                            </a>|
                                                            <a
                                                                href={project.gh_back_end}
                                                                target={'_blank'}
                                                                rel={'noopener noreferrer'}
                                                                className="link">
                                                                Back-end
                                                            </a>
                                                        </p>                                        
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>                                                                    
                                </Card.Body>
                            </Card>        
                        </Col>          
                        <Col xs={12}>
                            <Card>
                                <Card.Header>{languages[lang].achievements}</Card.Header>
                                <Card.Body>                                    
                                    <Row>
                                        {
                                            languages[lang].achievements_list.map((value, index) => {
                                                return(
                                                    <Col xs={12} key={value}>
                                                        - {value}
                                                    </Col>
                                                );
                                            })
                                        }                               
                                    </Row>                                    
                                </Card.Body>
                            </Card>       
                        </Col>
                        <Col xs={12}>
                            <Card>
                                <Card.Header>{languages[lang].education}</Card.Header>
                                <Card.Body>                                    
                                    <Row>
                                        {
                                            languages[lang].education_title_list.map((value, index) => {
                                                return(
                                                    <Col xs={12} key={value}>
                                                        <span>{value}</span>
                                                        <p>{languages[lang].education_description_list[index]}</p>
                                                    </Col>
                                                );
                                            })
                                        }                               
                                    </Row>                                    
                                </Card.Body>
                            </Card>        
                        </Col>                     
                    </Row>
                </Col>    
            </Row> 
        </Col>      
    </Row>
);

export default Content;