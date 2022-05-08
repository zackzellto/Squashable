import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import "./BugForm.css";
import moment from "moment";
import { ThemeProvider } from "react-bootstrap";

export function BugForm() {
  const BugDate = moment().format("LLL");

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container id="bugform-container">
        <Form>
          <Row md id="buginfo-row1">
            <Col>
              <Form.Control
                type="text"
                id="bug-id"
                placeholder="Bug ID"
                aria-label="Bud ID Tracker"
                size="sm"
                disabled
                readOnly
              />
            </Col>
            <Col md id="bug-date">
              <Form.Control
                type="text"
                value={BugDate}
                aria-label="Bug Date"
                size="sm"
                disabled
                readOnly
              ></Form.Control>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md>
              <div id="bug-title-container">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bug Title"
                  className="mb-3"
                >
                  <Form.Control id="bug-title-form" type="textarea" />
                </FloatingLabel>
              </div>
            </Col>
            <Col md>
              <div id="bug-reporter-container">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Reported By"
                  className="mb-3"
                >
                  <Form.Control id="bug-reporter-form" type="textarea" />
                </FloatingLabel>
              </div>
            </Col>
          </Row>
          <div id="bug-description-container">
            <FloatingLabel
              controlId="floatingInput"
              label="Bug Description"
              className="mb-3"
            >
              <Form.Control id="bug-description-form" type="textarea" />
            </FloatingLabel>
          </div>
          <div id="bug-status-container">
            <FloatingLabel controlId="floatingSelectGrid" label="Bug Status">
              <Form.Select
                id="bug-select-menu"
                aria-label="Bug Status select menu"
              >
                <option value=""></option>
                <option value="1">New</option>
                <option value="2">In Progress</option>
                <option value="3">Squashed!</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <Row className="mb-3">
            <Col md>
              <div id="bug-priority-container">
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Bug Priority"
                >
                  <Form.Select
                    id="bug-select-menu"
                    aria-label="Bug Priority select menu"
                  >
                    <option value=""></option>
                    <option value="1">High</option>
                    <option value="2">Mid</option>
                    <option value="3">Low</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </Col>
            <Col md>
              <div id="bug-severity-container">
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Bug Severity"
                >
                  <Form.Select
                    id="bug-select-menu"
                    aria-label="Bug Severity select menu"
                  >
                    <option value=""></option>
                    <option value="1"></option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </Col>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </ThemeProvider>
  );
}
