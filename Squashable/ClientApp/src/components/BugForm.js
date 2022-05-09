import React, { useState } from "react";
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
import axios from "axios";

const date = moment().format("LLL");

export function BugForm() {
  const [title, setTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubmit = (e) => {
    const apiURL = "https://localhost:7091";

    e.preventDefault();

    const bugData = {
      Title: title,
      CreatedDate: date,
      CreatedBy: createdBy,
      Description: description,
      Comments: comments,
      Priority: priority,
      Status: status,
      Severity: severity,
    };
    console.log(bugData);
    axios
      .post(`${apiURL}/api/BugInfo`, bugData)
      .then((res) => {
        clearBugData();
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };
  const clearBugData = () => {
    setTitle("");
    setCreatedBy("");
    setDescription("");
    setComments("");
    setPriority("");
    setStatus("");
    setSeverity("");
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container className="bugform-container">
        <Form>
          <Row md className="buginfo-row1">
            <Col hidden>
              <Form.Control
                type="text"
                className="bug-id"
                placeholder="Bug ID"
                aria-label="Bud ID Tracker"
                size="sm"
                disabled
                readOnly
              />
            </Col>
            <Col md className="bug-date-container">
              <Form.Control
                className="bug-date-form"
                type="text"
                value={date}
                aria-label="Bug Date"
                size="sm"
                disabled
                readOnly
              ></Form.Control>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md>
              <div className="bug-title-container">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bug Title"
                  className="mb-3"
                >
                  <Form.Control
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bug-title-form"
                    type="textarea"
                  />
                </FloatingLabel>
              </div>
            </Col>
            <Col md>
              <div className="bug-reporter-container">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Reported By"
                  className="mb-3"
                >
                  <Form.Control
                    value={createdBy}
                    onChange={(e) => setCreatedBy(e.target.value)}
                    className="bug-reporter-form"
                    type="textarea"
                  />
                </FloatingLabel>
              </div>
            </Col>
          </Row>
          <div className="bug-description-container">
            <FloatingLabel
              controlId="floatingInput"
              label="Bug Description"
              className="mb-3"
            >
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bug-description-form"
                type="textarea"
              />
            </FloatingLabel>
          </div>
          <div className="bug-comments-container">
            <FloatingLabel
              controlId="floatingInput"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="bug-comments-form"
                type="textarea"
              />
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
                    value={priority}
                    className="bug-select-menu"
                    onChange={(e) => setPriority(e.target.value)}
                    aria-label="Bug Priority select menu"
                  >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </Col>
            <Col md>
              <div className="bug-severity-container">
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Bug Severity"
                >
                  <Form.Select
                    value={severity}
                    className="bug-select-menu"
                    onChange={(e) => setSeverity(e.target.value)}
                    aria-label="Bug Severity select menu"
                  >
                    <option value="">Select Severity</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
              <div className="bug-status-container">
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Bug Status"
                >
                  <Form.Select
                    value={status}
                    className="bug-select-menu"
                    onChange={(e) => setStatus(e.target.value)}
                    aria-label="Bug Status select menu"
                  >
                    <option value="">Select Status</option>
                    <option>New Bug</option>
                    <option>In Progress</option>
                    <option>Squashed!</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </Col>
          </Row>

          <Button
            onClick={handleSubmit}
            className="buginfo-submit-button"
            variant="primary"
            type="submit"
          >
            Track Bug!
          </Button>
        </Form>
      </Container>
    </ThemeProvider>
  );
}
