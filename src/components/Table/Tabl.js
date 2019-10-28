import React from 'react';
import MaterialTable from 'material-table';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class MaterialTableDemo extends React.Component {
   
        constructor(props){
        super(props);
  this.state = {
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    query:'',
    columnToQuery: "name",
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  }};
  render(){
  return (
      <div>
    <SelectField
    floatingLabelText="Select a Column"
    value={this.state.columnToQuery}
    onChange={(event,index,value) =>
        this.setState({ columnToQuery: value })
    }  
  >
    <MenuItem value={name} primaryText="name" />
    <MenuItem value={this.state.surname} primaryText="surname" />
    <MenuItem value={this.state.birthYear} primaryText="birthYear" />
    <MenuItem value={this.state.birthCity} primaryText="birthCity" />
  </SelectField>
    <MaterialTable
      title="Editable Example"
      columns={this.state.columns}
      data={this.state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.push(newData);
              this.setState({ ...this.state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data[data.indexOf(oldData)] = newData;
              this.setState({ ...this.state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.splice(data.indexOf(oldData), 1);
              this.setState({ ...this.state, data });
            }, 600);
          }),
      }}
    />
    </div>
  );
}}

export default MaterialTableDemo;