import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Schedule from "./schedule";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewUser from "./new-user";
import NewGroup from "./new-group";
import NewResource from "./new-resource";

function App() {
  return (
    <Container>
      <Router>
        <Row>
          <NavBar bg="light" expand="lg">
            <NavBar.Brand href="#home">Resouce Scheduler</NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-NavBar-nav" />
            <NavBar.Collapse id="basic-NavBar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/schedule">Schedule</Nav.Link>
                <NavDropdown title="Resources" id="resource-nav-dropdown">
                  <NavDropdown.Item href="create-user">
                    Add new user
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/create-resource">
                    Add Resource
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/create-group">
                    Add Group
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="schedule">
                    Schedule
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
        </Row>
        <Row>
        </Row>
        <Switch>
          <Route exact path="/create-user" component={NewUser} />
          <Route exact path="/create-resource" component={NewResource} />
          <Route exact path="/create-group" component={NewGroup} />
          <Route path="/edit/user/:id" component={NewGroup} />
          <Route path="/edit/group/:id" component={NewGroup} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
