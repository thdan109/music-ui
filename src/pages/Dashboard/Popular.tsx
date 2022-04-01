import { Box, Grid, IconButton, Typography } from "@mui/material";
import Adele from "../../assets/Music-app/Adele.jpg";
import billie from "../../assets/Music-app/billie.png";
import olivia from "../../assets/Music-app/olivia1.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import charlie from "../../assets/Music-app/Charlie.jpg";
import React from "react";

const Popular = () => {
  return (
    <Grid item xs={12}>
      <Box mt={3}>
        <Box mb={2}>
          <Grid container alignItems={"center"}>
            <Grid item xs={10}>
              <Typography sx={{ fontSize: "24px", fontWeight: 600, color: "#001c72" }}>
                Popular New
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}>
              <Typography sx={{ fontWeight: 600, color: "#001c72" }}>Sea details</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={6} lg={3} mb={2}>
              <Box sx={{ minHeight: "280px", pr: 3 }}>
                <img
                  style={{ width: "100%", borderRadius: 10, minWidth: 180 }}
                  src={Adele}
                  alt="singer"
                />
                <Grid alignItems={"center"} sx={{ mt: 1 }} container>
                  <Grid item xs={10}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#001c72",
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      Easy on me
                    </Typography>
                    <Typography sx={{ fontSize: "15px", color: "gray" }}>Adele - 3:44</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton sx={{ borderRadius: 40, border: "1px solid #8080803d" }}>
                      <PlayArrowIcon fontSize="medium" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Box sx={{ minHeight: "280px", pr: 3 }}>
                <img
                  style={{ width: "100%", borderRadius: 10, minWidth: 180 }}
                  src={billie}
                  alt="singer"
                />
                <Grid alignItems={"center"} sx={{ mt: 1 }} container>
                  <Grid item xs={10}>
                    <Typography
                      noWrap
                      sx={{
                        textOverflow: "ellipsis",
                        width: 150,
                        fontSize: "20px",
                        color: "#001c72",
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      Happier than ever
                    </Typography>
                    <Typography sx={{ fontSize: "15px", color: "gray" }}>
                      Billie Eilish - 4:58
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton sx={{ borderRadius: 40, border: "1px solid #8080803d" }}>
                      <PlayArrowIcon fontSize="medium" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Box sx={{ minHeight: "280px", pr: 3, mb: 2 }}>
                <img
                  style={{ width: "100%", borderRadius: 10, minWidth: 180 }}
                  src={olivia}
                  alt="singer"
                />
                <Grid alignItems={"center"} sx={{ mt: 1 }} container>
                  <Grid item xs={10}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#001c72",
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      Traitor
                    </Typography>
                    <Typography sx={{ fontSize: "15px", color: "gray" }}>
                      Olivia Rodrigo - 4:44
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton sx={{ borderRadius: 40, border: "1px solid #8080803d" }}>
                      <PlayArrowIcon fontSize="medium" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Box sx={{ minHeight: "280px", pr: 3 }}>
                <img
                  style={{ width: "100%", borderRadius: 10, minWidth: 180 }}
                  src={charlie}
                  alt="singer"
                />
                <Grid alignItems={"center"} sx={{ mt: 1 }} container>
                  <Grid item xs={10}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#001c72",
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      Cheating on you
                    </Typography>
                    <Typography sx={{ fontSize: "15px", color: "gray" }}>
                      Charlie Puth - 3:33
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton sx={{ borderRadius: 40, border: "1px solid gray" }}>
                      <PlayArrowIcon fontSize="medium" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Popular;
