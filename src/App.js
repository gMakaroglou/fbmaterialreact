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
import Firebase from "firebase"
import Fbconfig from './components/FirebaseConfig/FirebaseConfig'

class App extends Component {
  constructor(props) {
    super(props);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(Fbconfig);
   }
    // Firebase.initializeApp(config);

    this.state = {
      Items: [],
      developers:[]
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
    });
  };
  render() {
    const { Items} = this.state;
    const {developers} = this.state;
    return (
     
      <React.Fragment>
      <MuiThemeProvider>
       {/* <Mattable data={[]} header={['Username','Password']}/> */}
       <Mattable data={this.state.developers} header={[
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
        ]}/>
       </MuiThemeProvider>
       
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
