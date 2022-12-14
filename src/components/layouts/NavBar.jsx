// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Logout from "./Logout";
// import Login from "./Login";
// import { NavLink } from "react-router-dom";
// import { useNavigate} from 'react-router-dom'

// const pages = ["Products", "Pricing", "Blog"];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const [isAuthenticated, setIsAuthenticated] = useState(true);
//   const navigate = useNavigate()

//   const handleLogout = (params) => {
//     setIsAuthenticated(false);
//     navigate('/')
//   };

//   const handleLogin = (params) => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <div>
//       <Container>
//         <AppBar position="static">
//           <Container maxWidth="xl">
//             <Toolbar disableGutters>
//               <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="a"
//                 sx={{
//                   mr: 2,
//                   display: { xs: "none", md: "flex" },
//                   fontFamily: "monospace",
//                   fontWeight: 700,
//                   letterSpacing: ".3rem",
//                   color: "inherit",
//                   textDecoration: "none",
//                 }}
//               >
//                 <NavLink to="/advertisement">LOGO</NavLink>
//               </Typography>

//               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="inherit"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { xs: "block", md: "none" },
//                   }}
//                 >
//                   {pages.map((page) => (
//                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                       <Typography textAlign="center">{page}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//               <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//               {/* <Typography
//                 variant="h5"
//                 noWrap
//                 component="a"
//                 href=""
//                 sx={{
//                   mr: 2,
//                   display: { xs: "flex", md: "none" },
//                   flexGrow: 1,
//                   fontFamily: "monospace",
//                   fontWeight: 700,
//                   letterSpacing: ".3rem",
//                   color: "inherit",
//                   textDecoration: "none",
//                 }}
//               >
//                 LOGO
//               </Typography> */}
//               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//                 {pages.map((page) => (
//                   <Button
//                     key={page}
//                     onClick={handleCloseNavMenu}
//                     sx={{ my: 2, color: "white", display: "block" }}
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </Box>

//               <Box sx={{ flexGrow: 0 }}>
//                 {isAuthenticated ? (
//                   <Login logout={handleLogout} />
//                 ) : (
//                   <Logout login={handleLogin} />
//                 )}
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </Container>
//     </div>
//   );
// };
// export default NavBar;


import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useHistory } from "react-router-dom";


export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleLogOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleLogIn() {
    setIsAuthenticated(true);
  }

  return (
    <div style={{height:"65px", background: "linear-gradient(45deg,  #ffffff, #CF5A11, #ffffff)"}}>
      <Link
        color="inherit"
        href="http://localhost:3000/"
        onClick={handleClick}
      >
         <img
          src="https://res.cloudinary.com/dlytm7ohp/image/upload/v1624280114/in-here_numxdb.png"
          className={classes.image}
        />
      </Link>
      {isAuthenticated ? (
        <LoggedIn logout={handleLogOut}/>
      ) : (
        <LoggedOut login={handleLogIn} />
      )}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  image: {
    position:"relative",
    top:10,
    left:170,  
    width:120,
    
  },
}));