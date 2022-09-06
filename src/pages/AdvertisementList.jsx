import * as React from "react";
import { useState, useEffect } from "react";
import AdvertisementService from "../services/advertisementService";
import { DataGrid } from "@mui/x-data-grid";
import PositionService from "../services/positionService";
import { DataArray } from "@mui/icons-material";
import { Grid } from "@mui/material";

const columns = [
  { field: "description", headerName: "Description", width: 100 },
  { field: "minSalary", headerName: "Min Salary", width: 100 },
  { field: "maxSalary", headerName: "Max Salary", width: 100 },
  { field: "openPositionCount", headerName: "Open Position", width: 140 },
  {
    field: "applicationDeadline",
    headerName: "Application Deadline",
    width: 150,
  },
  { field: "creationDate", headerName: "Creation Date", width: 120 },
  // { field: "activityStatus", headerName: "Activity Status", width: 130 },
  { field: "employer", headerName: "Company", width: 100 },
  { field: "position", headerName: "Position", width: 100 },
];

const tableStyles = {
  height:'500px',
  width:'80%',
  marginLeft:'10%',
  marginTop:'50px'
}

const AdvertisementTable = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [positions, setPositions] = useState([]);  
  

  useEffect(() => {
    let advertisementService = new AdvertisementService();
    advertisementService
      .getAdvertisements()
      .then((result) => setAdvertisements(result.data.data));

      let positionService = new PositionService();
      positionService
        .getPositions()
        .then((result) => setPositions(result.data.data));
  }, []);

  console.log(advertisements);
  console.log(positions);

  return (
      
      <DataGrid
        rows={advertisements}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={tableStyles}
      >
        <Grid>
          {positions.map((position) => (
            <Grid>
              {position.position}
            </Grid>
          ))}
        </Grid>
      </DataGrid>
  );
};
export default AdvertisementTable;
