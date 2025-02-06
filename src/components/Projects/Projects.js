import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import employee from "../../Assets/Projects/employee.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import weatherActivity from "../../Assets/Projects/weatherActivity.png";
import card from "../../Assets/Projects/card-guessing.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Card Guessing Game"
              description="The objective of this project is to create a card guessing game using Node.js.  Users should be able to select two cards at a time, if they match they remain open, if they don’t match they flip to hide their contents again. The game is won when all cards are successfully matched to their corresponding cards."
              ghLink="https://github.com/Khensani-Lebese/card-guessing-game.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Resturant App(Group Project)"
              description="The objective of this project is to create a restaurant reservation platform with an admin dashboard that multiple restaurants can access (to be able to manage their restaurant and view their restaurant statistics). The platform should allow users to view restaurants, search for restaurants, view available reservation slots, and make reservations.
              Contributors:Arthur Maatlane-https://github.com/TonyStagon//
                           Jesse Mashoana-https://github.com/J3ZZ3                       "
              ghLink="https://github.com/Khensani-Lebese/ResturantApplication.git"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherActivity}
              isBlog={false}
              title="TravelTides webApp(Group Project)"
              description="a web or mobile app that helps users plan trips based on weather conditions in their chosen destinations. The app should integrate APIs to fetch real-time weather data and suggest activities or recommendations accordingly."
              ghLink="https://github.com/Khensani-Lebese/weather-travel-planner-backend.git(Backend)"
              demoLink="https://weather-travel-planner-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="EmployeeApp"
              description="Create a simple admin portal by an organisation. The organisation wants to be able to easily track the current employees they have on this portal. The portal should track the following main details about all employees"
              ghLink="https://github.com/Khensani-Lebese/EmployeeApp.git"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=" Hotel App"
              description="an interactive React application with CRUD operations that integrate with Firebase to assess understanding of everything learnt so far.utilise React’s core concepts (State management, reusable components) everywhere applicable."
              ghLink="https://github.com/Khensani-Lebese/HotelApp.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ImageGalleryApp"
              description=" a gallery application that allows users to capture and  view images, displaying  the locations they were taken on a map using geolocation. Additionally, the application should use SQLite for local data storage."
              ghLink="https://github.com/Khensani-Lebese/ImageGalleryApp.git"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
