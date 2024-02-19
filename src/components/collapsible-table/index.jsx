import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const headers = props.headers;
  const acoes = props.acoes;
  const subtitulo = props.subtitulo;
  let detailsHeaders = props.detailsHeaders;
  const [open, setOpen] = useState(false);
  let [details, setDetails] = useState([]);  

  const getDetails = (open) => {

    if(open) {
      props.getDetailsByRow(row.id, setDetails)
    }
    setOpen(open)
  }

  return (
    <React.Fragment>
      <TableRow key={row.id} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => getDetails(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {headers.map((header) => (
          <TableCell>{row[header]}</TableCell>
        ))}   
        <TableCell>
          {acoes.map((acao) => (
            <button key={acao.label} type="submit" className="pure-button pure-button-primary"
        				onClick={(e) => acao.action(row)}>{acao.label}
            </button>
          ))}
        </TableCell>        
      </TableRow>
      <TableRow key="1001">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {subtitulo}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow key="1002">
                    {detailsHeaders.map((header) => (
                      <TableCell>{header}</TableCell>
                    ))}                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {details.map((row) => (
                    <TableRow key={row.id}>
                      {detailsHeaders.map((header) => (
                        <TableCell>{row[header]}</TableCell>
                      ))}   
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {

  let headers = props.headers;
  let rows = props.rows;
  let acoes = props.acoes;
  let subtitulo = props.subtitulo
  let detailsHeaders = props.detailsHeaders;
  let getDetailsByRow = props.getDetailsByRow;  

  return (
    rows.length > 0 ? <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
            <TableRow key="1">
              <TableCell></TableCell>
              {headers.map((header) => (
                  <TableCell>{header}</TableCell>
              ))}         
              <TableCell>Ações</TableCell>   
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row 
              key={row.id} 
              row={row} 
              headers={headers} 
              acoes={acoes} 
              subtitulo={subtitulo}
              detailsHeaders={detailsHeaders}
              getDetailsByRow={getDetailsByRow} 
            />              
          ))}
        </TableBody>
      </Table>
    </TableContainer> : <h3> Sem informações </h3>
  );
}