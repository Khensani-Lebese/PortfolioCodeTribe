import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Name: <span className="purple">Khensani Lebese </span>
            Occupation:{" "}
            <span className="purple"> Saulsville,Pretoria,South Africa.</span>
            <br />I am currently a trainee at{" "}
            <a href="https://codetribe.co.za/">
              <b>CodeTribe</b>
            </a>{" "}
            CodeTribe and a final year student at{" "}
            <a href="https://www.tut.ac.za/">TUT</a>.
            <br />I am also an alumni of the
            <a href="https://www.linkedin.com/in/nka-thuto-edupropeller-232830147/">
              Nka'thuto EduPropeller NPO
            </a>
            <br />
            <br />
            <p>
              CodeTribe has been an incredible journey of growth, learning, and
              innovation for me. From day one, I was immersed in a dynamic and
              collaborative environment that challenged me to push my boundaries
              and think creatively. The program provided hands-on experience in
              coding, problem-solving, and building real-world applications,
              which helped sharpen my technical skills and boost my confidence
              as a developer. The mentorship and support from experienced
              professionals at CodeTribe were invaluable, offering guidance and
              insights that enriched my learning experience. Beyond the
              technical aspects, CodeTribe also emphasized teamwork,
              communication, and adaptability, preparing me to thrive in the
              ever-evolving tech industry. My time here has been transformative,
              equipping me with the tools and mindset to tackle challenges and
              embrace opportunities in my career with enthusiasm.
            </p>
            <br />
            <p>
              My aspirations are to become a highly skilled and innovative
              software developer, creating impactful solutions that solve
              real-world problems and make a difference in people’s lives. I aim
              to work on projects that push the boundaries of technology,
              leveraging my skills to develop applications that are efficient,
              user-friendly, and transformative. I aspire to continuously grow
              both personally and professionally by staying up to date with the
              latest advancements in the tech industry, mastering new tools, and
              contributing to meaningful innovations. Ultimately, I hope to
              inspire others through my work, mentor aspiring developers, and
              play a role in shaping a future where technology is accessible and
              beneficial to everyone.
            </p>
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""Innovation distinguishes between a leader and a follower.""{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
