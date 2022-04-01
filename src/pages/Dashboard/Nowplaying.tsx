import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StopIcon from "@mui/icons-material/Stop";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

const NowPlaying = () => {
  return (
    <Box sx={{ px: { xs: 8, lg: 3 } }} mt={5}>
      <Grid container alignItems={"center"}>
        <Grid item xs={9}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#001c72" }}>
            Now playing
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <Typography sx={{ fontWeight: 500, color: "#001c72" }}>Sea details</Typography> */}
          <LinearScaleIcon />
        </Grid>
      </Grid>
      <Box mt={3}>
        <img
          style={{ width: "100%", borderRadius: 15 }}
          src={
            "https://i0.wp.com/musicmayhemmagazine.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-12-at-1.27.24-PM.png?fit=996%2C700&ssl=1&resize=350%2C200"
          }
          alt="aaaa"
        />
        <Box mt={1}>
          <Grid container>
            <Grid item xs={10}>
              <Typography sx={{ color: "#001c72", fontWeight: 600, fontSize: 20 }}>
                Cheating on you
              </Typography>
              <Typography sx={{ fontSize: 14 }}>Charlie Puth -- 3:33</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <StopIcon
                fontSize="large"
                sx={{
                  borderTop: "3px solid blue",
                  borderRight: "3px solid white",
                  borderLeft: "3px solid blue",
                  borderBottom: "3px solid blue",
                  borderRadius: 10,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};


export default NowPlaying