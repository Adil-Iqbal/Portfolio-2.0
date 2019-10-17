import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FontAwesome from 'react-fontawesome';

function Footer() {
  return (
    <footer>
      <Row>
        <Col lg={4} className="ai-footer-segment">
          <img
            src="../../../static/assets/adil-logo.svg"
            alt="The majestic Adil Iqbal."
            className="ai-footer-img"
          />
        </Col>
        <Col lg={4} className="ai-footer-segment">
          <div className="ai-info-wrapper">
            <FontAwesome
              name="phone"
              style={{
                color: '#1ABC9C',
              }}
            />
            {'  (832) 788-2572'}
          </div>
          <div className="ai-info-wrapper">
            <FontAwesome name="envelope" style={{ color: '#1ABC9C' }} />
            {'  main@adil-iqbal.com'}
          </div>
        </Col>
        <Col lg={4} className="ai-footer-segment-icons">
          <div className="ai-icon-wrapper">
            <div className="ai-icon-image">
              <FontAwesome name="github" size="3x" style={{ color: '#1ABC9C' }} />
            </div>
            <div className="ai-icon-label">
              Github
            </div>
          </div>
          <div className="ai-icon-wrapper">
            <div className="ai-icon-image">
              <FontAwesome name="linkedin" size="3x" style={{ color: '#1ABC9C' }} />
            </div>
            <div className="ai-icon-label">
              LinkedIn
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="ai-footer-segment ai-copyright">
          <div className="ai-info-wrapper">Houston, Texas (USA)</div>
          <div className="ai-info-wrapper">
            {'Copyright  '}
            <FontAwesome name="copyright" />
            {'  2019 Adil Iqbal.'}
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export { Footer as default };
