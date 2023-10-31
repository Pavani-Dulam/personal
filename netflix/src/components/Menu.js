import React from "react";
import "./Menu.css";
import net from "../assests/net.mp4";
import net2 from "../assests/net2.mp4";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div className="App">

            <div className="one">
                <div className="head">
                    <h1>NETFLIX</h1>
                    <div className="signout">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                <i class="fa-solid fa-globe"></i> English
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><i class="fa-solid fa-globe"></i> हिंदी</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                         <Button variant="outline-danger" className="bbb">signout</Button>

                    </div>


                </div>
                <div className="write">
                    <h6>Welcome back !</h6>
                    <h3>Laughter. Tears. Thrills. Find it all on Netflix</h3>
                    <p className="cancel">Endless entertainments starts at just ₹149. Cancel anytime</p>
                    <Link to="/page"><button className="bb">Finish Sign Up</button></Link>
                </div>
            </div>

            <div className="two ">
                <div className="twoone">
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on smart TVS, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </p>
                </div>
                <div>
                    <video src={net} type="video/mp4" width="300" height="200" muted autoPlay={"autoplay "} loop preLoad="auto" />
                </div>
            </div>

            <div className="three">
                <div>
                    <img width="400" height="200" src="https://netflixc.netlify.app/images/misc/home-imac.jpg" />
                </div>
                <div className="threeone">
                    <h1>Download your shows to watch online</h1>
                    <p>Save your favourites easily and always have something to watch. </p>
                </div>
            </div>

            <div className="four">
                <div className="twoone">
                    <h1>Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone,tablet, laptop, and TV</p>
                </div>
                <div>
                    <video src={net2} type="video/mp4" width="400" height="200" muted autoPlay={"autoplay "} loop preLoad="auto" />
                </div>
            </div>

            <div className="five">
                <div>
                    <img width="300" height="200" src="https://d2fy2et424xkoh.cloudfront.net/blog/wp-content/uploads/2020/03/netflix-kids-shows.jpg" />
                </div>
                <div className="fiveone">
                    <h1>Create profiles for kids</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them --free with your membership </p>
                </div>
            </div>
            <div className="six" style={{ display: "flex", flexDirection: "column" }}>
                <div >
                    <h1>Frequently Asked Quetions</h1>
                </div>
                <div style={{ backgroundColor: "black", display: "flex", flexDirection: "column" }}>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >What is Netflix</Accordion.Header>
                            <Accordion.Body variant="secondary">
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How much does Netflix cost</Accordion.Header>
                            <Accordion.Body>
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>

            </div>
        </div>



    )
}
export default Menu;