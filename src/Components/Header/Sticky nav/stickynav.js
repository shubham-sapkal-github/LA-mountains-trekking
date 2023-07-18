import * as React from "react";
import "../Sticky nav/stickynav.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Hidden } from "@mui/material";
import Grid from "@mui/material/Grid";
import Fulllogo from "../../../Assets/full_logo.png";

function StickyNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        position: "sticky",
        zIndex: 2,
        top: 0,
        left: 0,
      }}
    >
      {/* FOR DESKTOP  */}

      <Grid
        maxWidth="xl"
        width="70%"
        margin="0 auto"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Hidden item sm={6} md={6} lg={6} smDown>
          <img src={Fulllogo} alt="logo" />
        </Hidden>
        <Box
          item
          sm={6}
          md={6}
          lg={6}
          sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
        >
          <a href="#hystory">
            <Button
              // key={}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mr: 5,
                display: "block",
                fontFamily: `'Lato', sans-serif`,
                fontSize: "12px",
                letterSpacing: "1px",
                lineHeight: "20px",
                textTransform: "uppercase",
                color: "#414f6b",
                fontWeight: "900",
                fontStyle: "italic",
              }}
            >
              01. Hystory
              <hr
                style={{
                  marginLeft: "-24px",
                  border: "none",
                  borderTop: "1px solid #414f6b",
                }}
              ></hr>
            </Button>
          </a>
          <a href="#team">
            <Button
              // key={}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: "block",
                fontFamily: `'Lato', sans-serif`,
                fontSize: "12px",
                letterSpacing: "1px",
                lineHeight: "20px",
                textTransform: "uppercase",
                color: "#414f6b",
                fontWeight: "900",
                fontStyle: "italic",
              }}
            >
              02. Team
              <hr
                style={{
                  marginLeft: "-16px",
                  border: "none",
                  borderTop: "1px solid #414f6b",
                }}
              ></hr>
            </Button>
          </a>
        </Box>
      </Grid>

      {/* FOR MOBILE  */}

      <Grid
        container
        width="70%"
        margin="0 auto"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        // sx={{backgroundColor:"red",}}
      >
        <Hidden smUp>
          <img className="full-logo" src={Fulllogo} alt="logo" />
        </Hidden>
        <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
            }}
          >
            <a href="#hystory">
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: `'Lato', sans-serif`,
                  fontSize: "12px",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  textTransform: "uppercase",
                  color: "#fefeff",
                  fontWeight: "900",
                  fontStyle: "italic",
                }}
              >
                <Typography textAlign="center">01 Hystory</Typography>
              </MenuItem>
            </a>
            <a href="#team">
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: `'Lato', sans-serif`,
                  fontSize: "12px",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  textTransform: "uppercase",
                  color: "#fefeff",
                  fontWeight: "900",
                  fontStyle: "italic",
                }}
              >
                <Typography textAlign="center">02 Team </Typography>
              </MenuItem>
            </a>
          </Menu>
        </Box>
      </Grid>
    </nav>
  );
}

export default StickyNavbar;
