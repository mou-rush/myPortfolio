import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";

// projects
import L_AirBnB from "../../assets/img/projects/airbnb-clone.jpeg";
import L_Covid from "../../assets/img/projects/Covid.png";
import L_Netflix from "../../assets/img/projects/netflix-clone.jpeg";
//import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
//import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
//import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
//import L_EXPRESS from "../../assets/img/skills/express.svg";
//import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
//import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
//import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
//import L_DJANGO from "../../assets/img/skills/django.svg";
//import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg"

import "./projects-timeline.styles.css";
//import styled from 'styled-components';

const TimeLine = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}



  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Airbnb Ui Clone */}
          <ImageEvent date="10/8/2020" className="text-center" text="Airbnb" src={L_AirBnB} alt="Airbnb Ui">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> UI clone of Airbnb.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Date picker</li>
                          <li>Search for accommodations according to your liking and budget</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Github API" rounded className="image-style1 m-1"></Image> Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <button className="b" onClick={() => {openInNewTab('https://airbnb-clone-5c9cd.web.app')}}>
                  SEE LIVE
                </button>
                <button className="b" onClick={() => {openInNewTab('https://github.com/mou-rush/airbnb_clone')}}>
                  SOURCE CODE
                </button>
          
              </div>
            </div>
          </ImageEvent>

          {/* Project: Covid-19 Tracker */}
          <ImageEvent date="21/10/2020" className="text-center" text="Covid-19 Tracker" src={L_Covid} alt="Smart Brain Face Detect">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows users to track the current Total cases, Total recoveries and Deaths caused by Covid.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search a Specific country.</li>
                          <li>Can see on Map which countries are affected the most depending on how big the red circle is. </li>
                          <li>Uses Chartjs</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS3" rounded className="image-style1 m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Firebase" rounded className="image-style1 m-1"></Image> FIREBASE
                            </span>
                          </li>
                        </ul>
                        <hr />
                  
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <button className="b" onClick={() => {openInNewTab('https://covid-tracker-3a2fd.web.app')}}>
                  SEE LIVE
                </button>
                <button className="b" onClick={() => {openInNewTab('https://github.com/mou-rush/covid-tracker')}}>
                  SOURCE CODE
                </button>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Neflix-Clone */}

          <ImageEvent date="01/06/2020" className="text-center" text="Netflix" src={L_Netflix} alt="Netflix">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Netflix Ui clone for streaming movies and series.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search Movies</li>
                          <li>Allows users to login</li>
                          <li>Uses an API to Fetch data from themoviedb.org</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                            <Image src={L_HTML5} alt="HTML5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS3" rounded className="image-style1 m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Firebase" rounded className="image-style1 m-1"></Image> FIREBASE
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <button className="b" onClick={() => {openInNewTab('https://netflix-clone-d751b.web.app')}}>
                  SEE LIVE
                </button>
                <button className="b" onClick={() => {openInNewTab('https://github.com/mou-rush/netflix_clone')}}>
                  SOURCE CODE
                </button>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
