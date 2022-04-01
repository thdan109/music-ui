
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Dashboard";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import travis from "../../assets/Music-app/travis.jpeg";
import a7x from "../../assets/Music-app/a7x.jpg";
import drake from "../../assets/Music-app/drake.jpg";
import avicii from "../../assets/Music-app/avicii.jpg";
import eminem from "../../assets/Music-app/eminem.jpg";
import podkesmas from "../../assets/Music-app/podkesmas.jpg";
import ricky from "../../assets/Music-app/ricky.jpg";


const TopDetails = () =>{
  const classes = useStyles()
  return(
    <>
     <Box py={3} px={3} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box >
              <Grid container alignItems={"center"}>
                <Grid item xs={9}>
                  <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#001c72" }}>
                    Popular New
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {/* <Typography sx={{ fontWeight: 500, color: "#001c72" }}>Sea details</Typography> */}
                  <LinearScaleIcon />
                </Grid>
              </Grid>
              <Box mt={3} sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className={classes.boxImg}>
                  <img src={travis} alt="singer" className={classes.img} />

                  <Typography className={classes.nameSinger}>Travis</Typography>
                </Box>
                <Box className={classes.boxImg}>
                  <img src={podkesmas} alt="singer" className={classes.img} />

                  <Typography className={classes.nameSinger}>Podkessmas</Typography>
                </Box>
                <Box className={classes.boxImg}>
                  <img src={eminem} alt="singer" className={classes.img} />

                  <Typography className={classes.nameSinger}>Eminem</Typography>
                </Box>
              </Box>

              <Box mt={8} sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className={classes.boxImg}>
                  <img src={avicii} alt="singer" className={classes.img} />

                  <Typography className={classes.nameSinger}>Avicii</Typography>
                </Box>
                <Box className={classes.boxImg}>
                  <img src={drake} alt="singer" className={classes.img} />

                  <Typography className={classes.nameSinger}>Drake</Typography>
                </Box>
                <Box className={classes.boxImg}>
                  <img src={a7x} alt="singer" className={classes.img} />

                  <Typography className={classes.nameSinger}>a7x</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={5} px={3} sx={{ display: { xs: "none", sm: "block" } }}>
            <Grid container alignItems={"center"}>
              <Grid item xs={9}>
                <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#001c72" }}>
                  Top Podcaster
                </Typography>
              </Grid>
              <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
                {/* <Typography sx={{ fontWeight: 500, color: "#001c72" }}>Sea details</Typography> */}
                <LinearScaleIcon />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{
                    width: "100%",
                    maxWidth: 210,
                    borderRadius: 15,
                    minHeight: 210,
                    marginBottom: 12,
                  }}
                  src={ricky}
                  alt="aaa"
                />
                <Typography sx={{ color: "#001c72", fontWeight: 600 }}>Ricky Gervais</Typography>
                <Typography>500k followers</Typography>
              </Box>
              <Box>
                <img
                  style={{
                    width: "100%",
                    maxWidth: 210,
                    borderRadius: 15,
                    minHeight: 210,
                    marginBottom: 8,
                  }}
                  src={podkesmas}
                  alt="aaa"
                />
                <Typography sx={{ color: "#001c72", fontWeight: 600 }}>Podkesmas</Typography>
                <Typography>450k followers</Typography>
              </Box>
            </Box>
          </Box>
    </>
  )
}

export default TopDetails