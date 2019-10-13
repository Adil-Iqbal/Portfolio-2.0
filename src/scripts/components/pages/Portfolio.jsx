/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import ProjectCard from '../ProjectCard';

function Portfolio(props) {
  const { projectData } = props;
  return (
    <Container>
      <CardColumns>
        {projectData.map((projectProps) => <ProjectCard key={projectProps.uuid} {...projectProps} />)}
      </CardColumns>
    </Container>
  );
}

Portfolio.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Portfolio as default };
