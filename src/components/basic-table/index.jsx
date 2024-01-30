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
  let acoes = props.acoes;    

  return (
    rows.length > 0 ? <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow key="1">
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}         
            <TableCell>Ações</TableCell>   
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
              <TableCell>
              {acoes.map((acao) => (
                <button type="submit" className="pure-button pure-button-primary"
            					onClick={(e) => acao.action(row.id)}>{acao.label}</button>
              ))}
              </TableCell>          
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : <h3> Sem informações </h3>
  )
}