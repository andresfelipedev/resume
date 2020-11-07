import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Header.css';
import { languages, images } from '../../config';


const Header = ({ lang, changeLanguage }) => {    

    return(
        <>        
            <Row className="justify-content-md-center header">
                <Col xs={12} className="language-button">
                    {
                        lang === 'es' ?
                        <Button onClick={changeLanguage}>
                            English
                        </Button> :
                        <Button onClick={changeLanguage}>
                            Español
                        </Button>
                    }
                </Col>                       
                <Col xs={12} className="profile">
                    <img src={images.profile_picture} title="Andrés Felipe" alt="Andrés Felipe" />                                                    
                    <h1>Andrés Felipe Pérez Rodríguez</h1>                                    
                    <h2>{languages[lang].career}</h2>  
                    <h3>andresfelipejob@gmail.com</h3>                     
                    <a 
                        href={'https://github.com/andresfelipedev'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href={'https://linkedin.com/in/andrés-felipe-pérez-rodríguez-a039841ba'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}>
                        <i className="fab fa-linkedin"></i>
                    </a>                    
                </Col>    
            </Row>
        </>
    );
};

export default Header;