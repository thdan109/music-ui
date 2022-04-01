import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Header from "../../components/Header/Header";
import RecentList from "../../assets/Music-app/olivia.jpg";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

const CurrentList = () => {
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
    <Grid item xs={12}>
      <Box mt={5}>
        <Box mb={2}>
          <Grid container alignItems={"center"}>
            <Grid item xs={10}>
              <Typography sx={{ fontSize: "24px", fontWeight: 600, color: "#001c72" }}>
                My Recent Playlist
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}>
              <Typography sx={{ fontWeight: 600, color: "#001c72" }}>Sea details</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mt={1}>
          <Grid container>
            <Grid item xs={4}>
              <img style={{ width: "80%" }} src={RecentList} alt="aaa" />
            </Grid>
            <Grid item xs={5}>
              <Box px={1}>
                <Typography sx={{ color: "gray", fontWeight: 600 }} variant={"button"}>
                  Rommy's Playlist
                </Typography>
                <Typography sx={{ color: "#001c72", fontWeight: 650, mt: 1 }} variant={"h6"}>
                  INDONESIA HOT MUSICS 2021
                </Typography>
                <Stack mt={2} flexDirection={"row"}>
                  {chipType.map((item: any, index: any) => (
                    <Header key={index} text={item.text} active={item.active} />
                  ))}
                </Stack>
                <Typography sx={{ color: "gray", fontWeight: 500, mt: 1 }} variant={"body2"}>
                  500k likes -- 100 Song -- 10h 3m 30s
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                // justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  pr: 3,
                  pb: 10,
                }}
              >
                <LinearScaleIcon />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  pr: 1,
                }}
              >
                <Button
                  sx={{ borderRadius: 30 }}
                  variant={"contained"}
                  startIcon={<PlayArrowIcon />}
                >
                  Play now
                </Button>
                <FileUploadOutlinedIcon />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default CurrentList;
