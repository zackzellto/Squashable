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

  const apiURL = "/api/BugInfo";

  const handleSubmit = async (e) => {
    window.location.reload();
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

    await axios //post request to api
      .post(`${apiURL}`, bugData)
      .then((res) => {
        console.log("POST RESPONSE:", res);
      })
      .catch((err) => {
        console.log("POST ERROR:", err.res.data);
      });
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
                style={{ height: "50px" }}
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
                style={{ height: "50px", width: "50%" }}
                value={date}
                aria-label="Bug Date"
                size="sm"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md>
              <div className="bug-title-container">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bug Title"
                  className="mb-3 floating-label"
                >
                  <Form.Control
                    value={title}
                    style={{ height: "50px" }}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bug-title-form"
                    type="textarea"
                    size="sm"
                  />
                </FloatingLabel>
              </div>
            </Col>
            <Col md>
              <div className="bug-reporter-container">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Reported By"
                  className="mb-3 floating-label"
                >
                  <Form.Control
                    value={createdBy}
                    style={{ height: "50px" }}
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
              className="mb-3 floating-label"
            >
              <Form.Control
                value={description}
                style={{ height: "100px" }}
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
              className="mb-3 floating-label"
            >
              <Form.Control
                value={comments}
                style={{ height: "50px" }}
                onChange={(e) => setComments(e.target.value)}
                className="bug-comments-form"
                type="textarea"
              />
            </FloatingLabel>
          </div>

          <Row className="mb-2">
            <div className="bug-priority-container">
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Bug Priority"
                className="mb-3 floating-label"
              >
                <Form.Select
                  value={priority}
                  style={{ height: "50px" }}
                  className="bug-select-menu-priority col"
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option className="dropdown-hide-me" value=""></option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Select>
              </FloatingLabel>
            </div>

            <div className="bug-severity-container">
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Bug Severity"
                className="mb-3 floating-label"
              >
                <Form.Select
                  value={severity}
                  style={{ height: "50px" }}
                  className="bug-select-menu-severity col"
                  onChange={(e) => setSeverity(e.target.value)}
                  aria-label="Bug Severity select menu"
                >
                  <option className="dropdown-hide-me" value=""></option>
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
                className="mb-3  floating-label"
              >
                <Form.Select
                  value={status}
                  style={{ height: "50px" }}
                  className="bug-select-menu-status col"
                  onChange={(e) => setStatus(e.target.value)}
                  aria-label="Bug Status select menu"
                >
                  <option className="dropdown-hide-me" value=""></option>
                  <option>New Bug</option>
                  <option>In Progress</option>
                  <option>Squashed!</option>
                </Form.Select>
              </FloatingLabel>
            </div>
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
