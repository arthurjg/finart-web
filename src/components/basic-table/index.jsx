import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable(props) {
  
  let headers = props.headers;
  let rows = props.rows;  

  if(rows.length == 0){
    console.log('Lista vazia.');
    return (<h3> Sem informações </h3>)
  }

  for(var index = 0; index < rows.length; index++){
    rows[index].id = index;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow key="table-header-01">
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow     
              key={row.id}         
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {headers.map((header) => (
                <TableCell>{row[header]}</TableCell>
              ))}             
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}