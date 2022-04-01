import { Box, Grid, IconButton} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "../../components/Header/Header";
import TableList from "../../components/Table/Table";
import MenuIcon from "@mui/icons-material/Menu";
import Popular from "./Popular";
import CurrentList from "./Current";
import NowPlaying from "./Nowplaying";
import TopDetails from "./TopDetails";

 export const useStyles = makeStyles({
  boxChip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 20,
  },
  boxImg: {
    minWidth: "120px",
    maxWidth: "120px",
    minHeight: "120px",
    maxHeight: "120px",
  },

  img: {
    width: "100%",
    minWidth: "120px",
    maxWidth: "120px",
    minHeight: "120px",
    maxHeight: "120px",
    borderRadius: 15,
  },
  nameSinger: {
    color: "#001c72",
    fontWeight: 600,
    fontSize: 16,
    textAlign: "center",
  },
});

interface IDashboard {
  mobileOpen: boolean;
  handleDrawerToggle: any;
}

const Dashboard: React.FC<IDashboard> = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const dataChip = [
    {
      text: "Music",
      active: 1,
    },
    {
      text: "Podcast",
      active: 0,
    },
    {
      text: "Story Telling",
      active: 0,
    },
    {
      text: "Horror",
      active: 0,
    },
    {
      text: "Comedy",
      active: 0,
    },
    {
      text: "Romance",
      active: 0,
    },
    {
      text: "Pop",
      active: 0,
    },
  ];
  const chipType = [
    {
      text: "Popular",
      active: 0,
    },
    {
      text: "2021",
      active: 0,
    },
    {
      text: "Show but sure",
      active: 0,
    },
  ];

  return (
    <Box>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={8.5} item sx={{ px: 8 }}>
          <Box sx={{ minHeight: "99vh" }}>
            <Grid container>
              {/* Header Chip */}
              <Box className={classes.boxChip}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                {dataChip.map((item: any, index) => (
                  <Header key={index} text={item.text} active={item.active} />
                ))}
              </Box>
              {/* End header chip */}
              {/* Popular now */}
              <Popular />
              {/* End popular */}
              {/* Current playlist */}
              <CurrentList />
              {/* End Current play list */}
              {/* Table List */}
              <Grid item xs={12} my={5}>
                <TableList />
              </Grid>
              {/* End Table List */}
            </Grid>
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={3.5}
          item
          sx={{ borderLeft: { lg: "1px solid #b3b3b3de", xs: "none" } }}
        >
          <TopDetails />
          <NowPlaying />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
