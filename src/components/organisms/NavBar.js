import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: "#FFFFFF",
        color: "#28a19c",
        height: "70px",
        paddingRight: "20px",
      }}
      elevation={0}
    >
      <Toolbar>
        {/* Website Logo  */}
        <Box style={{ marginTop: "auto" }}>
          <img src={Logo} alt='logo' />
        </Box>

        {/* Search Bar */}
        <div
          style={{
            flexGrow: 0.5,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            marginRight: "20px",
            margin: "auto",
            height: "38px",
            flexWrap: "wrap",
          }}
        >
          <InputBase
            placeholder='What do you want to learn?'
            style={{
              flex: 1,
              paddingLeft: "10px",
              border: "1px solid #707171",
              borderRadius: "4px 0 0 4px",
              marginBottom: "10px",
            }}
          />
          <Button
            color='inherit'
            aria-label='search'
            style={{
              color: "#fff",
              backgroundColor: "#28a19c",
              variant: "contained",
              borderRadius: "0px 5px 5px 0px",
              height: "34px",
              marginBottom: "10px",
            }}
          >
            <SearchIcon />
          </Button>
        </div>

        {/* Right Section (Cart Icon, Login/Signup, Menu) */}
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          {/* Hamburger Menu Button for Small Screens */}
          {windowWidth <= 600 && (
            <IconButton
              color='inherit'
              aria-label='open menu'
              onClick={handleMenuClick}
              style={{ marginLeft: "10px", color: "#28a19c" }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {(windowWidth > 600 || Boolean(menuAnchor)) && (
            <>
              {/* Cart Icon */}
              <IconButton
                color='inherit'
                aria-label='cart'
                style={{ color: "#28a19c" }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>

              {/* Login/Signup Buttons */}
              <Button
                color='inherit'
                style={{ marginLeft: "10px", color: "#28a19c" }}
              >
                Login
              </Button>
              <Button
                color='inherit'
                style={{
                  marginLeft: "10px",
                  color: "#fff",
                  backgroundColor: "#28a19c",
                }}
              >
                Sign Up
              </Button>
            </>
          )}

          {/* More Options (Menu) */}
          {windowWidth <= 600 && (
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              {/* Render Cart, Login, SignUp in the menu */}
              <MenuItem onClick={handleMenuClose}>
                <IconButton color='inherit' aria-label='cart'>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
                Cart
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color='inherit'>Login</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  color='inherit'
                  style={{ color: "#fff", backgroundColor: "#28a19c" }}
                >
                  Sign Up
                </Button>
              </MenuItem>
            </Menu>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
