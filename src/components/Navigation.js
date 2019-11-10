import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from '../components/Login'
import { AuthProvider } from "../components/Auth"
import PrivateRoute from "./PrivateRoute"
import {BrowserRouter as Router , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import app from "./FirebaseConfig/FirebaseConfig"
import { makeStyles } from '@material-ui/core/styles';
import Fbconfig from './FirebaseConfig/FirebaseConfig'
import MatButton from '@material-ui/core/Button';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav,Form,FormControl,Button,ButtonToolbar } from 'react-bootstrap';
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
class Navigation extends Component {
    constructor(props) {
        super(props);
    this.state = {
        signedin:''
    }}
    componentDidUpdate(prevProps) {
        if (prevProps.signedin !== this.props.signedin) {
          console.log("USER EXIT OR LOGIN");
        }
      }
    render(){
    //    const classes = useStyles();
    let user = Fbconfig.auth().currentUser;
    let useremail;

      if (user) {
        useremail = user.email;
        console.log("dsako[das[oads[oasd[kdkads"+useremail);
      } else {
        // No user is signed in.
        console.log("3041034130-3149314-313")
      }
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
      {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
      </Nav>
     
       <Navbar.Collapse className="justify-content-end">
       <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            
            <Navbar.Text>
     
     <div>{!(this.props.signedin == ("Not Signed in"))?  <ButtonToolbar>Signed in as: <a href="#login">{this.props.signedin}</a><br/><Button variant="primary" onClick={() => app.auth().signOut()}>Sign out</Button></ButtonToolbar>: <div>Not Signed in yet </div>}
     </div>
    </Navbar.Text>
          </div>
          </Navbar.Collapse>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
 </React.Fragment>  
 )}}

export default Navigation;