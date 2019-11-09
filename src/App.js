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
        <Navigation signedin={useremail} />
        <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
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
       
       <div className="container">
         <div className="row">
           <div className="col-xl-12">
             <h1>Firebase Development Team</h1>
           </div>
         </div>
         <div className="row">
           <div className="col-xl-12">
             {Items.map(developer => (
               <div
                 key={developer.uid}
                 className="card float-left"
                 style={{ width: "18rem", marginRight: "1rem" }}
               >
                 <div className="card-body">
                   <h5 className="card-title">{developer.name}</h5>
                   <p className="card-text">{developer.role}</p>
                   <button
                     onClick={() => this.removeData(developer)}
                     className="btn btn-link"
                   >
                     Delete
                   </button>
                   <button
                     onClick={() => this.updateData(developer)}
                     className="btn btn-link"
                   >
                     Edit
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
         <div className="row">
           <div className="col-xl-12">
             <h1>Add new team member here</h1>
             <form onSubmit={this.handleSubmit}>
               <div className="form-row">
                 <input type="hidden" ref="uid" />
                 <div className="form-group col-md-6">
                   <label>Name</label>
                   <input
                     type="text"
                     ref="name"
                     className="form-control"
                     placeholder="Name"
                   />
                 </div>
                 <div className="form-group col-md-6">
                   <label>Role</label>
                   <input
                     type="text"
                     ref="role"
                     className="form-control"
                     placeholder="Role"
                   />
                 </div>
               </div>
               <button type="submit" className="btn btn-primary">
                 Save
               </button>
             </form>
           </div>
         </div>
         <div className="row">
           <div className="col-xl-12">
             <h3>
               Tutorial{" "}
               <a href="https://sebhastian.com/react-firebase-real-time-database-guide">
                 here
               </a>
             </h3>
           </div>
         </div>
       </div>
     </React.Fragment>
        
      
      
    );
  }
}
export default App;
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);
