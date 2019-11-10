import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Mattable from '../components/Table/materialtable'
import Fbconfig from '../components/FirebaseConfig/FirebaseConfig'
import Firebase from "firebase"
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import orderBy from 'lodash.orderby'
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
        SensorValues:[],
        query:'',
        columnToQuery:'',
        newData:[]
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
        var result = [];
        var newresult = [];
        Object.keys(this.state.SensorValues).map((x)=>{
            return(
            // console.log(x),
           // console.log(data),
            //console.log(i)
            newresult.push(this.state.SensorValues[x])
            )
        })
        console.log("NEW RESULT IS "+newresult);
        const peopleArray = Object.keys(newresult).map(i => newresult[i])
        console.log("NEW NEW RESULT"+peopleArray[0]);
        let finaltest=[];
        let products = [
            {
              name: "chair",
              inventory: 5,
              unit_price: 45.99
            },
            {
              name: "table",
              inventory: 10,
              unit_price: 123.75
            },
            {
              name: "sofa",
              inventory: 2,
              unit_price: 399.50
            }
          ];

const resultt = products.filter(x => x["name"].includes("sofa"));
const resulttt = newresult.filter(y=>y["latitudeValue"].includes("3"));
let filtertest =[];
console.log(resulttt);
        this.state.query
              ? filtertest = newresult.filter(x =>
                  x[this.state.columnToQuery]
                    .includes(this.state.query)
                )
              : filtertest = this.state.newresult
              console.log("FILTERED NEW RESULT"+filtertest);

    return(
        
    <MuiThemeProvider>
        
        <TextField
        value={this.state.query}
        onChange={e=>this.setState({ query: e.target.value })}
      hintText="Search Value"
    />
        <SelectField
          floatingLabelText="Search By"
          value={this.state.columnToQuery}
          onChange={(event, index, value) => this.setState({columnToQuery : value})}
        >
          <MenuItem value={'ambTempValue'} primaryText="Ambient Temperature" />
          <MenuItem value={'latitudeValue'} primaryText="Latitude" />
          <MenuItem value={'lightValue'} primaryText="Brightness" />
          <MenuItem value={'longitudeValue'} primaryText="Longitude" />
          <MenuItem value={'pressureValue'} primaryText="Pressure" />
        </SelectField>
       
       {/* <Mattable data={[]} header={['Username','Password']}/> */}
       <Mattable data={
           //this.state.SensorValues
            orderBy(
             this.state.query
               ? newresult.filter(x =>
                   x[this.state.columnToQuery]
                     .includes(this.state.query)
                 )
               : 
        this.state.SensorValues
          )
        } header={[
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