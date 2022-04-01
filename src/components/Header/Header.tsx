import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
interface IHeader {
  icon?: any;
  text: string;
  active?: number;
 
}
const useStyles = makeStyles({
  boxHeader: {
    padding: "5px 20px",
    width: "max-content",
    border: "1px solid gray",
    borderRadius: 20,
    maxHeight: 35,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginRight: 10,
  },
  active: {
    padding: "5px 20px",
    width: "max-content",
    border: "1px solid #0000ffb3",
    borderRadius: 20,
    maxHeight: 35,
    marginRight: 10,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "white",
    background: "#0000ffb3",
  },
  txtActive: {
    fontWeight: 600,
  },
  text: {
    color: "black",
    fontWeight: 500,
  },
});

const Header: React.FC<IHeader> = ({ icon, text, active }) => {
  const classes = useStyles();
  
  return (
    <Box className={active === 0 ? classes.boxHeader : classes.active}>
      <Typography
        className={active === 0 ? classes.text : classes.txtActive}
        sx={{ fontSize: "16px" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Header;
