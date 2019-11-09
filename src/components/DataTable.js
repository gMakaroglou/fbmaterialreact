import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Mattable from '../components/Table/materialtable'
import Fbconfig from '../components/FirebaseConfig/FirebaseConfig'
import Firebase from "firebase"
class Datatable extends Component {
    constructor(props) {
        super(props);
        if (!Firebase.apps.length) {
         const firebaseApp = Firebase.initializeApp(Fbconfig);
         
       }
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
      });
    };
    render(){
        const { Items} = this.state;
        const {developers} = this.state;
        const {sensors} = this.state;
        const {SensorValues} = this.state;
    return(
    <MuiThemeProvider>
       {/* <Mattable data={[]} header={['Username','Password']}/> */}
       <Mattable data={this.state.SensorValues} header={[
    //      {name:'Name',
    //      prop:'name',
    //    },
    //    {
    //      name:'Role',
    //     prop:'role'
    //   },
    //   {
    //     name:'Uid',
    //    prop:'uid'
    //  }
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
       </MuiThemeProvider>
    )
    }
}

export default Datatable;