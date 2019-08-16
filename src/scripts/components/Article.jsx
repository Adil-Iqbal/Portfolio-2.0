/* eslint-disable max-len */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Article() {
  return (
    <Card border="secondary" style={{ width: '100%' }} className="my-3">
      <Card.Body className="p-1">
        <Image src="https://via.placeholder.com/120" className="float-left mr-3" />
        <Card.Title>Project Euler - Problem 15 - Solution Explained</Card.Title>
        <Card.Text>We explore the notorious Lattice paths problem. We use permutations to help model our solution; and combinations to optimize.</Card.Text>
        <ButtonToolbar className="d-flex justify-content-end">
          <OverlayTrigger
            placement="left"
            overlay={(
              <Popover id="239823">
                <Popover.Content>
                  {'Written by '}
                  <b>Adil Iqbal</b>
                  {' on '}
                  <b>April 22, 1993</b>
                  {'. (Tags: '}
                  <i>Project Euler, Javascript</i>
                  {')'}
                </Popover.Content>
              </Popover>
            )}
          >
            <span className="d-inline-block">
              <Button variant="link" className="mr-3" disabled>Info</Button>
            </span>
          </OverlayTrigger>
          <Button variant="primary" className="mr-3">Read</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

export { Article as default };
