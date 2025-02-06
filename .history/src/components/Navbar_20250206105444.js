import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
<<<<<<< HEAD
  AiOutlineBulb,
  AiOutlineCode,
  AiOutlineMessage,
  AiOutlineSchedule,
=======
  AiTwotoneTrophy,
  AiTwotoneCode,
  AiFillMessage,
  AiTwotoneSchedule,
>>>>>>> cf1a7cc959a5db8aa8f3ba0f3ac9e01b3a0d64e8
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
<<<<<<< HEAD
=======
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
>>>>>>> cf1a7cc959a5db8aa8f3ba0f3ac9e01b3a0d64e8
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Personal
                Information
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
<<<<<<< HEAD
                <AiOutlineBulb style={{ marginBottom: "2px" }} /> Skills Matrix
=======
                <AiTwotoneTrophy style={{ marginBottom: "2px" }} /> Skills
                Matrix
>>>>>>> cf1a7cc959a5db8aa8f3ba0f3ac9e01b3a0d64e8
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/assessments"
                onClick={() => updateExpanded(false)}
              >
<<<<<<< HEAD
                <AiOutlineCode style={{ marginBottom: "2px" }} />
=======
                <AiTwotoneCode style={{ marginBottom: "2px" }} />
>>>>>>> cf1a7cc959a5db8aa8f3ba0f3ac9e01b3a0d64e8
                Assessments
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/feedback"
                onClick={() => updateExpanded(false)}
              >
<<<<<<< HEAD
                <AiOutlineMessage style={{ marginBottom: "2px" }} />
=======
                <AiFillMessage style={{ marginBottom: "2px" }} />
>>>>>>> cf1a7cc959a5db8aa8f3ba0f3ac9e01b3a0d64e8
                FeedBack/Reflections
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/goals"
                onClick={() => updateExpanded(false)}
              >
<<<<<<< HEAD
                <AiOutlineSchedule style={{ marginBottom: "2px" }} />
=======
                <AiTwotoneSchedule style={{ marginBottom: "2px" }} />
>>>>>>> cf1a7cc959a5db8aa8f3ba0f3ac9e01b3a0d64e8
                Goals
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
