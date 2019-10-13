/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import MediaQuery from 'react-responsive';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Skills from '../Skills';


function Home() {
  return (
    <Container>
      <Row>
        <Col lg={2} className="ai-side-bar">
          <Row>
            <div className="ai-headshot-wrapper">
              <img
                src="../../../static/assets/adil-pic-placeholder.png"
                alt="The majestic Adil Iqbal."
                className="img-fluid rounded"
              />
            </div>
            <Button variant="primary mx-auto my-3">Download Resume</Button>
          </Row>
          <MediaQuery minWidth={992}>
            <Skills />
          </MediaQuery>
        </Col>
        <Col lg={10}>
          <Row>
            <Container className="ai-cover-letter-wrapper">
              <h3>{'Introduction'}</h3>
              <p>{"If you're here, you may be looking to hire a talented, experienced, and detailed-oriented web developer. As you'll see by visiting my portfolio projects, I have experience efficiently coding websites and applications using modern HTML, CSS, and Javascript."}</p>
              <h3>{"What I'm Bringing to the Table"}</h3>
              <p>{'Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. I actively seek out new technologies and stay up-to-date on industry trends and advancements.'}</p>
              <p>{"The modern end user has high expectations. My approach is to stay ahead of that expectation at all times. That means building single page applications that are responsive and accessible. That's why I'm proficient in React, React Router, Redux, and its related ecosystem of modules."}</p>
              <h3>{'Next Steps:'}</h3>
              <p>{"You can check out my resume for detailed and concise information about my skill-set and experience. The portfolio section will give you a good idea of the kind of projects I've produced in the past. One of my personal hobbies is solving recreational mathematics and algorithm problems; my blog will give you a good idea of how I think. If you're interested in exploring a work relationship, head over to the contacts page and reach out! I'm available 24/7."}</p>
            </Container>
          </Row>
          <Row className="ai-banner-logo-wrapper">
            <img
              src="../../../static/assets/adil-logo.svg"
              alt="The majestic Adil Iqbal."
              className="ai-banner-logo my-3"
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Home as default };
