import React, { useState, useContext } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaTools, FaUser, FaBars } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton } from "@material-ui/core";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const useStyles = makeStyles((t) => ({
    navbarContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "10px 20px",
      backgroundColor: theme.primary,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      [t.breakpoints.down("sm")]: {
        justifyContent: "space-between",
      },
    },
    navLinksContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      [t.breakpoints.down("sm")]: {
        display: "none", // Hide links on smaller screens
      },
    },
    navItem: {
      display: "flex",
      alignItems: "center",
      margin: "0 20px",
      color: theme.secondary,
      fontSize: "1.2rem",
      textDecoration: "none",
      transition: "color 0.3s",
      "&:hover": {
        color: "white",
      },
    },
    navIcon: {
      marginRight: "8px",
    },
    name: {
      color: theme.primary,
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    menuIcon: {
      display: "none",
      [t.breakpoints.down("sm")]: {
        display: "block", // Show menu icon on smaller screens
        color: theme.secondary,
        fontSize: "2rem",
      },
    },
    drawerLinks: {
      width: "250px",
      padding: "20px",
      backgroundColor: theme.secondary,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    drawerItem: {
      margin: "20px 0",
      color: theme.primary,
      fontSize: "1.2rem",
      fontWeight: "bold",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        color: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const shortname = (name) => {
    return name.length > 12 ? name.split(" ")[0] : name;
  };

  return (
    <div className={classes.navbarContainer}>
      {/* Left Side: Header Name */}
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>
      </div>

      {/* Center: Navigation Links */}
      <div className={classes.navLinksContainer}>
        <NavLink
          to="/"
          className={classes.navItem}
          smooth={true}
          spy="true"
          duration={2000}
        >
          <IoHomeSharp className={classes.navIcon} /> Home
        </NavLink>
        <NavLink
          to="/#about"
          className={classes.navItem}
          smooth={true}
          spy="true"
          duration={2000}
        >
          <FaUser className={classes.navIcon} /> About
        </NavLink>
        <NavLink
          to="/#skills"
          className={classes.navItem}
          smooth={true}
          spy="true"
          duration={2000}
        >
          <FaTools className={classes.navIcon} /> Skills
        </NavLink>
        <NavLink
          to="/#experience"
          className={classes.navItem}
          smooth={true}
          spy="true"
          duration={2000}
        >
          <PiSuitcaseSimpleFill className={classes.navIcon} /> Experience
        </NavLink>
        <NavLink
          to="/#projects"
          className={classes.navItem}
          smooth={true}
          spy="true"
          duration={2000}
        >
          <BsFillGearFill className={classes.navIcon} /> Projects
        </NavLink>
        {/* <NavLink
          to="/#resume"
          className={classes.navItem}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://drive.google.com/file/d/1WvSfTzAhzhILj5UqLfh9tVwW80hY4GFG/view?usp=sharing",
              "_blank"
            );
          }}
        >
          <HiDocumentText className={classes.navIcon} /> Resume
        </NavLink> */}
        <NavLink
          to="/#contacts"
          className={classes.navItem}
          smooth={true}
          spy="true"
          duration={2000}
        >
          <MdPhone className={classes.navIcon} /> Contact
        </NavLink>
      </div>

      {/* Right Side: Menu Icon for Small Screens */}
      <IconButton className={classes.menuIcon} onClick={handleDrawerToggle}>
        <FaBars />
      </IconButton>

      {/* Drawer for Small Screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <div className={classes.drawerLinks}>
          <NavLink
            to="/"
            className={classes.drawerItem}
            onClick={handleDrawerToggle}
          >
            <IoHomeSharp className={classes.navIcon} /> Home
          </NavLink>
          <NavLink
            to="/#about"
            className={classes.drawerItem}
            onClick={handleDrawerToggle}
          >
            <FaUser className={classes.navIcon} /> About
          </NavLink>
          <NavLink
            to="/#skills"
            className={classes.drawerItem}
            onClick={handleDrawerToggle}
          >
            <FaTools className={classes.navIcon} /> Skills
          </NavLink>
          <NavLink
            to="/#experience"
            className={classes.drawerItem}
            onClick={handleDrawerToggle}
          >
            <PiSuitcaseSimpleFill className={classes.navIcon} /> Experience
          </NavLink>
          <NavLink
            to="/#projects"
            className={classes.drawerItem}
            onClick={handleDrawerToggle}
          >
            <BsFillGearFill className={classes.navIcon} /> Projects
          </NavLink>
          {/* <NavLink
            to="/#resume"
            className={classes.drawerItem}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1WvSfTzAhzhILj5UqLfh9tVwW80hY4GFG/view?usp=sharing",
                "_blank"
              );
            }}
          >
            <HiDocumentText className={classes.navIcon} /> Resume
          </NavLink> */}
          <NavLink
            to="/#contacts"
            className={classes.drawerItem}
            onClick={handleDrawerToggle}
          >
            <MdPhone className={classes.navIcon} /> Contact
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
