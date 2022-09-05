import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import AdvertisementService from '../services/advertisementService';
import { Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Description', width: 100 },
  { field: 'minSalary', headerName: 'Min Salary', width: 100 },
  { field: 'maxSalary', headerName: 'Max Salary', width: 100 },
  { field: 'openPosition', headerName: 'Open Position', width: 140 },
  { field: 'applicationDeadline', headerName: 'Application Deadline', width: 150 },
  { field: 'creationDate', headerName: 'Creation Date', width: 120 },
  { field: 'activityStatus', headerName: 'Activity Status', width: 130 },
  { field: 'company', headerName: 'Company', width: 100 },
  { field: 'position', headerName: 'Position', width: 100 },
//   { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function DataTable() {
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(()=>{
        let advertisementService = new AdvertisementService()
        advertisementService.getAdvertisements().then(result=>setAdvertisements(result.data.data))
    })

  return (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
