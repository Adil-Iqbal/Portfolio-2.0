import React from 'react';
import PropTypes from 'prop-types';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Project from '../components/Project';

function Portfolio(props) {
  const { projectData } = props;
  return (
    <Container>
      <CardColumns>
        {projectData.map((proj) => {
          const {
            title, image, features, about, launchURL, codeURL,
          } = proj;
          return (
            <Project
              title={title}
              image={image}
              features={features}
              about={about}
              launchURL={launchURL}
              codeURL={codeURL}
            />
          );
        })}
      </CardColumns>
    </Container>
  );
}

Portfolio.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Portfolio as default };
