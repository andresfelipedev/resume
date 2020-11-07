import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Content from '../Content/Content';

const App = () => {
     
    const [lang, setLang] = useState('es');

    useEffect(() => {
        const language = localStorage.getItem('lang');
        if (language) setLang(language);
    }, []);

    const handleChangeLanguage = () => {
        let language = 'es';
        if (lang === 'es') language = 'en';
        setLang(language);
        localStorage.removeItem('lang');
        localStorage.setItem('lang', language);
    };

    return(
        <Container fluid>      
            <Header lang={lang} changeLanguage={handleChangeLanguage} />
            <Content lang={lang} />                
        </Container>
    );
};

export default App;