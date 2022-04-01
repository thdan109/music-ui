import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import ExploreIcon from "@mui/icons-material/Explore";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PersonIcon from "@mui/icons-material/Person";
import AlbumIcon from "@mui/icons-material/Album";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { makeStyles } from "@mui/styles";

interface IDataMenu {
  icon: React.ReactChild;
  name: string;
}

const useStyles = makeStyles({
  boxSidebar: {
    paddingTop: 10,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  titleMenu: {
    color: "gray",
    fontSize: "12px !important",
    marginLeft: "40px",
    marginTop: "15px",
    marginBottom: "-5px"
  },
  boxSetting: {
    position: "absolute",
    bottom: 0,
    width: "99%",
    marginBottom: 30
  },
  iconMenu: {
    "& .css-i4bv87-MuiSvgIcon-root": {
      fontSize: "26px !important",
      color: "#8f9096",
    },
  },
  textMenu: {
    fontSize: "16px !important",
    fontWeight: "550 !important",
    color: "#8f9096",
  },
  iconMenuActive: {
    "& .css-i4bv87-MuiSvgIcon-root": {
      fontSize: "26px !important",
      color: "blue",
    },
  },
  textMenuActive: {
    fontSize: "16px !important",
    fontWeight: "550 !important",
    color: "blue",
  },
  itemMenu: {
    padding: "5px 40px",
    "& .css-cveggr-MuiListItemIcon-root": {
      minWidth: "38px !important",
    },
  },
});

const Sidebar = () => {
  const classes = useStyles();

  const dataMenuFeatures: IDataMenu[] = [
    {
      icon: <HomeIcon />,
      name: "Home",
    },
    {
      icon: <DownloadIcon />,
      name: "Discover",
    },
    {
      icon: <ExploreIcon />,
      name: "Download",
    },
    {
      icon: <InsertChartIcon />,
      name: "Trending",
    },
  ];

  const dataMenuCollection: IDataMenu[] = [
    {
      icon: <AudiotrackIcon />,
      name: "My Playlist",
    },
    {
      icon: <PersonIcon />,
      name: "Arlist",
    },
    {
      icon: <AlbumIcon />,
      name: "Album",
    },
  ];

  const dataMenuLibrary: IDataMenu[] = [
    {
      icon: <FavoriteBorderIcon />,
      name: "Favorite",
    },
    {
      icon: <FileCopyIcon />,
      name: "Local Files",
    },
  ];

  const dataMenuSetting = [
    {
      icon: <SettingsIcon />,
      name: "General Setting",
    },
    {
      icon: <ManageAccountsIcon />,
      name: "Account Setting",
    },
  ];
  return (
    <Box className={classes.boxSidebar}>
      <img  src={"https://creativedesign.rs/cd_app/public/images/products/3313002426527403.jpg"} style={{width: "250px"}} alt="logo"/>
      <Typography className={classes.titleMenu} variant="caption">
        FEATURE
      </Typography>
      <List>
        {dataMenuFeatures.map((item, index) => (
          <ListItem className={classes.itemMenu} button key={index}>
            <ListItemIcon className={classes.iconMenu}>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.textMenu}>{item.name}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Typography className={classes.titleMenu} variant="caption">
        COLLECTION
      </Typography>

      <List>
        {dataMenuCollection.map((item, index) => (
          <ListItem className={classes.itemMenu} button key={index}>
            <ListItemIcon className={classes.iconMenu}>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.textMenu}>{item.name}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Typography className={classes.titleMenu} variant="caption">
        LIBRARY
      </Typography>

      <List>
        {dataMenuLibrary.map((item, index) => (
          <ListItem className={classes.itemMenu} button key={index}>
            <ListItemIcon className={classes.iconMenu}>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.textMenu}>{item.name}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Box className={classes.boxSetting}>
        <List>
          <Typography className={classes.titleMenu} variant="caption">
            SETTING
          </Typography>
          {dataMenuSetting.map((item, index) => (
            <ListItem className={classes.itemMenu} button key={index}>
              <ListItemIcon className={classes.iconMenu}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {item.icon}
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.textMenu}>{item.name}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
