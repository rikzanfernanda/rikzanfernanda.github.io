import React from "react";
import styled from "styled-components";
import BG from "../../assets/img/bg-jumbotron.jpg"
import Profile from "../../assets/img/resmi_1.jpg";
import {Col, ListGroup, Row} from "react-bootstrap";
import BG_portfolios from "../../assets/img/ui/liquid-cheese.svg";
import {Link} from "react-router-dom";

const Jumbotron = styled.div`
    background-color: grey;
    height: 60vh;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    h1{
        font-size: 30px;
    }
    div{
        margin: auto;
        width: 80%;
        padding-top: 60px;
    }
    
    @media only screen and (min-width: 576px){
        h1{
            font-size: 60px;
        }
    }
`;

const CV = styled.div`
    position: relative;
    height: 670px;
    .cv-card{
        position: absolute;
        width: 100%;
        top: -100px;
        padding-left: 20px;
        padding-right: 20px;
        z-index: 1;
    }
    .cv-content{
        box-shadow: 10px 10px 43px -28px rgba(0,0,0,0.75);
        border-radius: 10px;
        padding: 20px;
        background-color: white;
        height: 700px;
        overflow: auto;
    }
    
    @media only screen and (min-width: 576px){
        .cv-card{
            padding-left: 80px;
            padding-right: 80px;
        }
        .cv-content{
            padding: 40px;
        }
    }
`;

const Portfolios = styled.div`
    background-image: url(${BG_portfolios});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px;
    color: white;
`;

const Home = () => {
    return (
        <>
            <Jumbotron>
                <div className="text-center">
                    <h1>Welcome to Rikzan's Portfolios</h1>
                    <p>
                        let me see your impression after seeing my portfolio
                    </p>
                </div>
            </Jumbotron>
            <CV>
                <div className="cv-card">
                    <div className="cv-content">
                        <Row>
                            <Col md={4} className="mb-4">
                                <img src={Profile} className="img-fluid" alt="profile"/>
                            </Col>
                            <Col md={8}>
                                <div className="mb-4">
                                    <h4>About Me</h4>
                                    <p className="fst-italic">
                                        I am graphic designer and web developer from Indonesia. With graphic designer, I
                                        have 4
                                        years experience about photo editing, photo manipulation, create illustration,
                                        etc. My
                                        favorite tool is Adobe Photoshop and Adobe Illustrator. Currently, I'm working
                                        as web
                                        developer since 2019. I am expert at PHP language and laravel/CI framework. And
                                        currently, i am informatic engineering student at Dian Nuswantoro University.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <h4>Education</h4>
                                    <Row>
                                        <Col>
                                            <h6 className="text-primary">Computer Science</h6>
                                            <div style={{fontSize: '12px'}}>
                                                <b>Dian Nuswantoro University</b> <br/>
                                                <i className="fas fa-map-marker-alt"></i> Semarang, Central Java
                                            </div>
                                        </Col>
                                        <Col>
                                            <h6 className="text-primary">Multimedia</h6>
                                            <div style={{fontSize: '12px'}}>
                                                <b>Budi Utomo Senior High School</b> <br/>
                                                <i className="fas fa-map-marker-alt"></i> Jombang, East Java
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="">
                                    <h4>Skills</h4>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>PHP</li>
                                                <li>HTML</li>
                                                <li>CSS/SCSS</li>
                                                <li>Javascript</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li>Codeigniter</li>
                                                <li>Laravel</li>
                                                <li>JQuery</li>
                                                <li>React JS</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li>Database</li>
                                                <li>Wordpress</li>
                                                <li>Adobe Photoshop</li>
                                                <li>Adobe Illustrator</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </CV>

            <Portfolios>
                <h1 className="text-center text-white mb-4">Portfolios</h1>
                <Row>
                    <Col className="p-md-5">
                        <h1>Web Development</h1>
                        <p>
                            I am skilled at creating php/mySQL, javascript/jQuery, web sites/applications. I
                            have made several applications, some using CodeIgniter 3 and others using laravel 8.
                            Almost all of my projects use jQuery and bootstrap.
                        </p>
                        <Link to="/web" className="btn btn-primary">View Portfolios</Link>
                    </Col>
                    <Col className="p-md-5">
                        <h1>Graphic Design and Photo Editing</h1>
                        <p>
                            The tools I use are Adobe Illustrator and Photoshop. I have more than 3 years
                            experience in graphic design. Making a quality design requires several
                            considerations such as the target audience and creative content. In making designs,
                            I like to make designs that are modern, simple, clean, functional, stylish and keep
                            up with the times. Like some of my work at: behance.net/rikzan_fernanda
                        </p>
                        <Link to="/graphic-design" className="btn btn-primary">View Portfolios</Link>
                    </Col>
                </Row>
            </Portfolios>

            <div className="container p-5">
                <h1 className="text-center mb-5">Contact</h1>
                <Row>
                    <Col md={8}>
                        <iframe className="mb-4"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3920975409656!2d109.52659184952269!3d-6.9073190209047555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fd8e232c31673%3A0x6bd0fa0c8b35fe30!2sGg.%20Ontorejo%2C%20Pesadangan%2C%20Ujunggede%2C%20Kec.%20Ampelgading%2C%20Kabupaten%20Pemalang%2C%20Jawa%20Tengah%2052364!5e1!3m2!1sid!2sid!4v1632839621353!5m2!1sid!2sid"
                                 allowFullScreen="" loading="lazy" style={{width: '100%', height: '400px'}}></iframe>
                    </Col>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item>
                                <i className="fas fa-phone-alt"></i> +62 85157660753
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className="fas fa-envelope"></i> fernandarikzan@gmail.com
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className="fas fa-map-marker-alt"></i> Pemalang, Indonesia
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Home;