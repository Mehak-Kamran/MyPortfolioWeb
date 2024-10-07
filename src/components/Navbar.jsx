import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import favicon from "../assets/images/navicon.jpg";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (text) => {
    setActiveItem(text);
  };

  const menuItems = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Testimonial", href: "#testimonial" },
    { text: "Gallery", href: "#gallery" },
    { text: "FAQ", href: "#faq" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#005acd" }}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        
        <Box
          display="flex"
          alignItems="center"
          component="div" 
          sx={{ flexGrow: 1,width:{xs:"10%",sm:"10%",md:"5%",lg:"10%",xlg:"10%"}}}
        >
          <a href="#home">
            <img
              src={favicon}
              style={{ width:"60%"}}
              alt="Logo"
            />
          </a>
        </Box>
        
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              href={item.href}
              onClick={() => handleMenuItemClick(item.text)}
              sx={{
                position: "relative",
                fontSize: { xl: "12px", sm: "12px" },
                fontWeight: "bold",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor:
                    activeItem === item.text ? "white" : "transparent",
                  transition: "background-color 0.3s",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xl: "12px", sm: "12px" },
                  fontWeight: "bold",
                }}
              >
                {item.text}
              </Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ backgroundColor: "#005acd" }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => {
                handleMenuItemClick(item.text);
                toggleDrawer();
              }}
            >
              <Button
                key={item.text}
                color="inherit"
                href={item.href}
                onClick={() => handleMenuItemClick(item.text)}
                sx={{
                  position: "relative",
                  fontSize: { xl: "12px", sm: "12px" },
                  fontWeight: "bold",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor:
                      activeItem === item.text ? "white" : "transparent",
                    transition: "background-color 0.3s",
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: "12px", fontWeight: "bold", color: "white" }}
                >
                  {item.text}
                </Typography>
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
