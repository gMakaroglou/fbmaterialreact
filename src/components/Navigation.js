import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from '../components/Login'
import { AuthProvider } from "../components/Auth"
import PrivateRoute from "./PrivateRoute"
import {BrowserRouter as Router , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav,Form,FormControl,Button } from 'react-bootstrap';
const Navigation = (props) => {
 return(

    /* <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
        </AuthProvider> */
        <React.Fragment>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Intelligence System</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
     
       <Navbar.Collapse className="justify-content-end">
       <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            
            <Navbar.Text>
      Signed in as: <a href="#login">{props.signedin}</a>
    </Navbar.Text>
          </div>
          </Navbar.Collapse>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
 </React.Fragment>  
 )}

export default Navigation;