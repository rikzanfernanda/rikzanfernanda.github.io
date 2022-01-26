import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import BG from "../../assets/img/bg-jumbotron.jpg";
import {Badge, Card, Col, Row, SplitButton, Dropdown} from "react-bootstrap";
import ec7 from "../../assets/img/portfolio/eidaladha_character7.jpg";
import ec8 from "../../assets/img/portfolio/eidaladha_character8.jpg";
import ec12 from "../../assets/img/portfolio/eidaladha_character12.jpg";
import ec14 from "../../assets/img/portfolio/eidaladha_character14.jpg";
import move16 from "../../assets/img/portfolio/move16.jpg";
import lp1 from "../../assets/img/portfolio/landing_page_1.jpg";
import lp2 from "../../assets/img/portfolio/landing_page_2.jpg";
import editing1 from "../../assets/img/portfolio/page_layout.jpg";
import editing2 from "../../assets/img/portfolio/merge.jpg";
import editing3 from "../../assets/img/portfolio/manipulasi_1.jpg";
import editing4 from "../../assets/img/portfolio/bag_2.jpg";
import editing5 from "../../assets/img/portfolio/cod.jpg";
import editing6 from "../../assets/img/portfolio/kingedit.jpg";
import editing7 from "../../assets/img/portfolio/lipstick.jpg";
import editing8 from "../../assets/img/portfolio/smoothing3.jpg";
import sm1 from "../../assets/img/portfolio/feed_122220_2.jpg";
import sm2 from "../../assets/img/portfolio/feed_122220_1.jpg";
import sm3 from "../../assets/img/portfolio/feedig_3.jpg";
import sm4 from "../../assets/img/portfolio/feedig_2.jpg";
import sm5 from "../../assets/img/portfolio/feedig_1.jpg";
import sm6 from "../../assets/img/portfolio/food_3.jpg";
import sm7 from "../../assets/img/portfolio/food_2.jpg";
import sm8 from "../../assets/img/portfolio/food_1.jpg";
import sm9 from "../../assets/img/portfolio/quiz_1.jpg";
import sm10 from "../../assets/img/portfolio/shapess_2.jpg";
import sm11 from "../../assets/img/portfolio/fathers day 17a.jpg";
import sm12 from "../../assets/img/portfolio/sosmed-text.jpg";
import sm13 from "../../assets/img/portfolio/sosmed6.jpg";
import sm14 from "../../assets/img/portfolio/sosmed5-m.jpg";
import sm15 from "../../assets/img/portfolio/sosmed4-m.jpg";
import sm16 from "../../assets/img/portfolio/sosmed3-m.jpg";
import poster1 from "../../assets/img/portfolio/poster_1.jpg";
import web1 from "../../assets/img/portfolio/portofolio1.jpg";
import web2 from "../../assets/img/portfolio/portofolio2.jpg";
import web3 from "../../assets/img/portfolio/rikzanfe.jpg";
import web4 from "../../assets/img/portfolio/web-donasi.jpg";
import web5 from "../../assets/img/portfolio/wedoshancok.jpg";

const Jumbotron = styled.div`
    background-color: grey;
    padding: 40px 40px 90px 40px;
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

const Overview = styled.div`
    position: relative;
    height: 180px;
    .overview-container{
        position: absolute;
        width: 100%;
        top: -50px;
    }
    .overview-card{
        max-height: 180px;
        overflow: auto;
        width: 80vw;
        background-color: white;
        margin: auto;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 10px 10px 43px -28px rgba(0,0,0,0.75);
    }
`;

const GraphicDesign = () => {
    let ini_data = [
        {
            img: ec7,
            title: "Islamic themed banner background.",
            tools: ["Photoshop", "Illustrator"],
            category: "Illustration"
        },
        {
            img: ec8,
            title: "Islamic themed banner background.",
            tools: ["Photoshop", "Illustrator"],
            category: "Illustration"
        },
        {
            img: ec12,
            title: "Islamic themed banner background.",
            tools: ["Photoshop", "Illustrator"],
            category: "Illustration"
        },
        {
            img: ec14,
            title: "Islamic themed banner background.",
            tools: ["Photoshop", "Illustrator"],
            category: "Illustration"
        },
        {
            img: move16,
            title: "Islamic themed banner background.",
            tools: ["Photoshop", "Illustrator"],
            category: "Illustration"
        },
        {
            img: lp1,
            title: "Christmas themed background for landing page.",
            tools: ["Illustrator"],
            category: "Illustration"
        },
        {
            img: lp2,
            title: "Christmas themed background for landing page.",
            tools: ["Illustrator"],
            category: "Illustration"
        },
        {
            img: editing1,
            title: "Make page layout design for annual book page. Include some photos and text and add effect into photos.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: editing2,
            title: "Merge 4 photos into one photo and edit them to realistic looks.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: editing3,
            title: "Photo manipulation of client requests.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: editing4,
            title: "Bag product photo editing, the left is before editing and the right is after editing. Looks smoother.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: editing5,
            title: "The editing of COD game wallpaper photo is changing the real head into someone else's head. See the difference.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: editing6,
            title: "Photo manipulation, the difference is visible by marked with a red circle.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: editing7,
            title: "Recoloring for pink lipstick products and add gloss to the lips.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: editing8,
            title: "Smoothes a woman's face.",
            tools: ["Photoshop"],
            category: "Photo Editing"
        },
        {
            img: sm1,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm2,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm3,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm4,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm5,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm6,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm7,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm8,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm9,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm10,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm11,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm12,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm13,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm14,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm15,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: sm16,
            title: "Instagram puzzle feed for happy mother's day content.",
            tools: ["Photoshop", "Canva"],
            category: "Social Media"
        },
        {
            img: poster1,
            title: "Posters about the importance of safety for tailors (in Indonesian).",
            tools: ["Photoshop"],
            category: "Poster"
        },
        {
            img: web1,
            title: "Company profile web creation.",
            tools: ["Photoshop"],
            category: "Web"
        },
        {
            img: web2,
            title: "Personal web.",
            tools: ["Photoshop"],
            category: "Web"
        },
        {
            img: web3,
            title: "Personal web.",
            tools: ["Photoshop"],
            category: "Web"
        },
        {
            img: web4,
            title: "Web donasi (demo): https://proyekrikzan.000webhostapp.com/",
            tools: ["Photoshop"],
            category: "Web"
        },
        {
            img: web5,
            title: "Web about online assignments for teachers and students. Especially for assignments.",
            tools: ["Photoshop"],
            category: "Web"
        },
    ];
    const [data, setData] = useState(ini_data);
    const [ctg, setCtg] = useState("all");
    const [refresh, setRefresh] = useState(true);

    const pilih = (p) => {
        setCtg(p);
        setRefresh(true);
    }

    useEffect(() => {
        if (refresh) {
            let new_data = ini_data.filter(item => {
                if (ctg !== "all") {
                    return item.category.toLowerCase() === ctg.toLowerCase();
                }
                return true;
            });
            setData(new_data);
            setRefresh(false);
        }
    }, [refresh]);

    return (
        <>
            <Jumbotron>
                <div className="text-center">
                    <h1>Welcome to Rikzan's Graphic Design and Photo Editing Portfolios</h1>
                    <p>
                        let me see your impression after seeing my portfolio
                    </p>
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                </div>
            </Jumbotron>
            <Overview>
                <div className="overview-container">
                    <div className="overview-card">
                        <p>
                            The tools I use are Adobe Illustrator and Photoshop. I have more than 3 years
                            experience in graphic design. Making a quality design requires several
                            considerations such as the target audience and creative content. In making designs,
                            I like to make designs that are modern, simple, clean, functional, stylish and keep
                            up with the times. Like some of my work at: <a
                            href="https://www.behance.net/rikzan_fernanda"
                            target="_blank" rel="noreferrer">https://www.behance.net/rikzan_fernanda</a>
                        </p>
                    </div>
                </div>
            </Overview>

            <div className="ps-md-5 pe-md-5 ps-2 pe-2 pb-5">
                <div className="text-end mb-4">
                    <SplitButton style={{marginRight: 'auto'}}
                                 variant="outline-primary"
                                 title="All Category"
                                 id="segmented-button-dropdown-2"
                                 onClick={() => {
                                     pilih("all")
                                 }}
                    >
                        <Dropdown.Item href="#" onClick={() => {
                            pilih("Illustration")
                        }}>Illustration</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {
                            pilih("Photo Editing")
                        }}>Photo Editing</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {
                            pilih("Social Media")
                        }}>Social Media</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {
                            pilih("Poster")
                        }}>Poster</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {
                            pilih("Web")
                        }}>Web</Dropdown.Item>
                    </SplitButton>
                </div>

                <Row xs={2} md={4} className="g-1 g-md-4">
                    {
                        data.map((item) => (
                            <Col>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={item.img}/>
                                    <Card.Body>
                                        <Card.Text>
                                            {item.title}
                                        </Card.Text>
                                        <Badge bg="success" style={{marginRight: '4px'}}>{item.category}</Badge>
                                        {
                                            item.tools.map(tool => {
                                                return (
                                                    <Badge bg="secondary"
                                                           style={{marginRight: '4px'}}>{tool}</Badge>
                                                )
                                            })
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}

export default GraphicDesign;