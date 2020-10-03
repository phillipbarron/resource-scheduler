import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
const localizer = momentLocalizer(moment)
function App() {
  return (
    <Container>
      <Row>
        <NavBar bg="light" expand="lg">
          <NavBar.Brand href="#home">Resouce Scheduler</NavBar.Brand>
          <NavBar.Toggle aria-controls="basic-NavBar-nav" />
          <NavBar.Collapse id="basic-NavBar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Scheduling" id="scheduling-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Student Scheduling
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Room scheduling
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Staff Scheduling
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavBar.Collapse>
        </NavBar>
      </Row>
      <Row>
      <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
      </Row>
    </Container>
  );
}

export default App;
