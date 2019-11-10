import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './components/Table/Table'
import Tablenew from './components/Table/Tablenew'
import Tablenewnew from './components/Table/Tablenewnew'
import Tablee from './components/Table/Tabl'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mattable from './components/Table/materialtable'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './App.css';
import {BrowserRouter as Router , Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import withFirebaseAuth from 'react-with-firebase-auth'
import Firebase from "firebase"
import { AuthProvider } from "./components/Auth"
import 'firebase/auth';
import Fbconfig from './components/FirebaseConfig/FirebaseConfig'
import Navigation from './components/Navigation'
import DataTable from './components/DataTable'
class App extends Component {
  constructor(props) {
    super(props);
    if (!Firebase.apps.length) {
     const firebaseApp = Firebase.initializeApp(Fbconfig);
     
   }
  //  const firebaseAppAuth = firebaseApp.auth();
  //  const providers = {
  //   googleProvider: new Firebase.auth.GoogleAuthProvider(),
  // };
    // Firebase.initializeApp(config);

    this.state = {
      Items: [],
      developers:[],
      sensors:[],
      SensorValues:[]
    };
  }
  componentDidMount() {
    this.getUserData();
  }
  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
      console.log("testingggggggggggggggggggggggg "+ snapshot.val().email)
    });
  };
  // testingmethod = (array) => {
  //   //   array.map((item)=>
  //   //   {
  //   //     return(
  //   //   console.log(item.name)
      
  //   //   );
  //   // })
  //   Object.keys(array).map((item) =>
  //   {
  //     return(
  //       console.log(array[item])
  //     )
  //   })
  // }
  getData(val){
    // do not forget to bind getData in constructor
    console.log("FEPIAFIEQAFEIJJFIEFFAFDSA "+val);
}
  render() {
   
    const { Items} = this.state;
    const {developers} = this.state;
    const {sensors} = this.state;
    const {SensorValues} = this.state;
    let user = Fbconfig.auth().currentUser;
    let useremail;

      if (user) {
        useremail = user.email;
        console.log("dsako[das[oads[oasd[kdkads"+useremail);
      } else {
        // No user is signed in.
      }
  //   const firebaseAppAuth = firebaseApp.auth();
  //  const providers = {
  //   googleProvider: new Firebase.auth.GoogleAuthProvider(),
  // };
   // console.log(sensors);
    //this.testingmethod(developers);

    return (
     
      <React.Fragment>
     
        <AuthProvider>
        {/* <Navigation signedin={useremail ? useremail : "Not Signed in"} /> */}
        <Router>
          <div>
         
            <PrivateRoute exact path="/" component={()=><Home/>} />
            <Route exact path="/login" component={()=><Login/>} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
        </AuthProvider>
       
        
      {/* <MuiThemeProvider>
       <Mattable data={[]} header={['Username','Password']}/>
       <Mattable data={this.state.SensorValues} header={[
         {name:'Name',
         prop:'name',
       },
       {
         name:'Role',
        prop:'role'
      },
      {
        name:'Uid',
       prop:'uid'
     }
    {name:'ambTempValue',
    prop:'ambTempValue',
  },
  {
    name:'latitudeValue',
   prop:'latitudeValue'
 },
 {
   name:'lightValue',
  prop:'lightValue'
},
{
 name:'longitudeValue',
prop:'longitudeValue'
},
{
name:'pressureValue',
prop:'pressureValue'
}
        ]}/>
       </MuiThemeProvider> */}
       
       
     </React.Fragment>
        
      
      
    );
  }
}
export default App;
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);
