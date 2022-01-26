import React from "react";
import styled from "styled-components";
import BG from "../../assets/img/bg-jumbotron.jpg";
import {Badge, Col, Figure, ListGroup, Row} from "react-bootstrap";
import saving from "../../assets/img/web/saving.png";
import ataboy from "../../assets/img/web/ataboy.png";
import ecsms from "../../assets/img/web/ecsmc.png";
import {Link} from "react-router-dom";

const Jumbotron = styled.div`
    background-color: grey;
    padding: 40px;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    h1{
        font-size: 30px;
    }
    
    @media only screen and (min-width: 576px){
        h1{
            font-size: 60px;
        }
    }
`;

const data = [
    {
        title: "saving",
        description: "Personal finance management app, built using laravel 8 (backend) and bootstrap 4 (frontend) and integrates with several jquery plugins. As core developer in app development who builds all the features that there is an application and how it looks",
        date: "Jul 2021 - Nov 2021",
        img: saving,
        tools: ["Laravel 8", "Bootstrap", "jQuery"],
        link: "https://www.savingid.my.id/"
    },
    {
        title: "ATAboy",
        description: "Disaster donation management application in Boyolali, built using codeigniter 3 (backend) and bootstrap (frontend). Contribute as a junior developers in application development, including making a slider in the menu home, create a CRUD feature for disaster submission, create data filters for downloads, etc.",
        date: "Jun 2021 - Agu 2021",
        img: ataboy,
        tools: ["Codeigniter", "Bootstrap", "jQuery"],
        link: "https://ataboy.id/index.php/Home"
    },
    {
        title: "E-CSMS",
        description: "Project administration application, built using codeigniter 3 (backend) and bootstrap (frontend). Contribute as a junior developer in development applications, including creating forms, making download features for pdf files and excel. The application has authentication, authorization, and integrated database features.",
        date: "Sep 2020 - Jan 2021",
        img: ecsms,
        tools: ["Codeigniter", "Bootstrap", "jQuery"],
        link: "http://ecsms.sikembang.com/"
    }
];

const Web = () => {
    return (
        <>
            <Jumbotron>
                <div className="text-center">
                    <h1>Welcome to Rikzan's Web Development Portfolios</h1>
                    <p>
                        let me see your impression after seeing my portfolio
                    </p>
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                </div>
            </Jumbotron>

            <div className="container mt-5 mb-5">
                <ListGroup variant="flush">
                    {
                        data !== null && (
                            <>
                                {
                                    data.map((item, id) => {
                                        return (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col md={4}>
                                                        <Figure>
                                                            <Figure.Image
                                                                width={400}
                                                                src={item.img}
                                                            />
                                                        </Figure>
                                                    </Col>
                                                    <Col md={8}>
                                                        <h1>{item.title}</h1>
                                                        <i style={{fontSize: '12px'}}>{item.date} </i>
                                                        {
                                                            item.tools.map(tool => {
                                                                return (
                                                                    <Badge bg="primary"
                                                                           style={{marginRight: '4px'}}>{tool}</Badge>
                                                                )
                                                            })
                                                        }
                                                        <p>{item.description}</p>
                                                        <a href={item.link}
                                                           target="_blank" rel="noreferrer">{item.link}</a>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </ListGroup>
            </div>
        </>
    )
}

export default Web;