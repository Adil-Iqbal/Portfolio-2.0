import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
// import Container from 'react-bootstrap/Container';

function Loading(props) {
  const { message } = props;
  return (
    <div className="ai-loading">
      <Spinner
        as="span"
        animation="border"
        variant="secondary"
        role="status"
      />
      <p>{message}</p>
    </div>
  );
}

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};

export { Loading as default };
