import * as React from 'react';
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EmployerService from '../services/employerService';
import { NavLink } from "react-router-dom";


export default function PositionTable() {
    const [employers, setEmployers] = useState([]);
  
    useEffect(() => {
      let employerService = new EmployerService();
      employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
    }, []);

  return (
    <TableContainer sx={{marginTop:"50px", width:"250px"}} component={Paper}>
      <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Companies</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {employers.map((employer) => (
            <TableRow
              key={employer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" as={NavLink}
      to={`/employers/${employer.employer}`}>
                {employer.website}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
