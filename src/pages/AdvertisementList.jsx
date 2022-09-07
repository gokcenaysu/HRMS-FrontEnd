// import * as React from "react";
import { useState, useEffect } from "react";
// import AdvertisementService from "../services/advertisementService";
// import { DataGrid } from "@mui/x-data-grid";
// import PositionService from "../services/positionService";
// import { Grid } from "@mui/material";

// const columns = [
//   { field: "description", headerName: "Description", width: 100 },
//   { field: "minSalary", headerName: "Min Salary", width: 100 },
//   { field: "maxSalary", headerName: "Max Salary", width: 100 },
//   { field: "openPositionCount", headerName: "Open Position", width: 140 },
//   {
//     field: "applicationDeadline",
//     headerName: "Application Deadline",
//     width: 150,
//   },
//   { field: "creationDate", headerName: "Creation Date", width: 120 },
//   // { field: "activityStatus", headerName: "Activity Status", width: 130 },
//   { field: "employer", headerName: "Company", width: 100 },
//   { field: "position", headerName: "Position", width: 100 },
// ];

// const tableStyles = {
//   height:'500px',
//   width:'80%',
//   marginLeft:'10%',
//   marginTop:'50px'
// }

// const AdvertisementTable = () => {
//   const [advertisements, setAdvertisements] = useState([]);
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     let advertisementService = new AdvertisementService();
//     advertisementService
//       .getAdvertisements()
//       .then((result) => setAdvertisements(result.data.data));

//       let positionService = new PositionService();
//       positionService
//         .getPositions()
//         .then((result) => setPositions(result.data.data));
//   }, []);

//   console.log(advertisements);
//   console.log(positions);

//   return (

//       <DataGrid
//         rows={advertisements}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         sx={tableStyles}
//       >
//         <Grid>
//           {positions.map((position) => (
//             <Grid>
//               {position.position}
//             </Grid>
//           ))}
//         </Grid>
//       </DataGrid>
//   );
// };
// export default AdvertisementTable;
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AdvertisementService from "../services/advertisementService";


function Advertisement(props) {
  const { advertisement } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* <TableCell component="th" scope="advertisement">
          {advertisement}
        </TableCell> */}
        <TableCell align="right">{advertisement.position}</TableCell>
        <TableCell align="right">{advertisement.description}</TableCell>
        <TableCell align="right">{advertisement.applicationDeadline}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Creation Date</TableCell>
                    <TableCell>Min Salary</TableCell>
                    <TableCell align="right">Max Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {advertisement.map(() => ( */}
                    <TableRow key={advertisement.id}>
                      <TableCell component="th" scope="row">
                        {advertisement.creationDate}
                      </TableCell>
                      <TableCell>{advertisement.minSalary}</TableCell>
                      <TableCell align="right">
                        {advertisement.maxSalary}
                      </TableCell>
                    </TableRow>
                  {/* ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const AdvertisementList = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    let advertisementService = new AdvertisementService();
    advertisementService
      .getAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Position</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Application Deadline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {advertisements.map((advertisement) => (
            <Advertisement key={advertisement} row={advertisement} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AdvertisementList;
