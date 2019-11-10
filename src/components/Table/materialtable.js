import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const row = (x,i,header) =>
(
    <TableRow key={`tr-${i}`}>
        {
       //   Object.keys(x).map((y,k)=>{
            header.map((y,k)=>{
                return(
               //   console.log(y),
               //   console.log(header),
               //  console.log(x[y.prop]),
                // console.log(k),
                // console.log(y.prop);
                // console.log(x[y.prop]);
                <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
            )})
        }
    </TableRow>
);
export default({data,header}) => 
  <Table>
    <TableHeader>
      <TableRow>
          {
              header.map((x,i) =>{
            //  console.log(x.name),
           //   console.log(i)
              return(
              <TableHeaderColumn  key ={`thc-${i}`}>{x.prop}</TableHeaderColumn>
              )})
             
              
          }
          {/* {
          header.map((x,i) =>
              <TableHeaderColumn  key ={`thc-${i}`}>{x.name}</TableHeaderColumn>)
            } */}
          {/* <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn> */}
        {/* <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn> */}
      </TableRow>
    </TableHeader>
    <TableBody>
        {Object.keys(data).map((x)=>{
            return(
            // console.log(x),
            console.log(data[x]),
           // console.log(data),
            //console.log(i)
            row(data[x],x,header)
            )
        })}
        {/* <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow> */}
    </TableBody>
    {/* <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow> */}
    {/* </TableBody> */}
  </Table>

