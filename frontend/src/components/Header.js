import React from "react";
import "./Header.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Searchbar from "./Searchbar"
import { useHistory } from "react-router-dom";

const Header = ({ children }) => {
  const history = useHistory()
    return (
        <Box className = "header" >
    <Box onClick={()=>history.push("/")} className="logo">
      <img src="./xlogo.png" alt="xflix-con"  />
      </Box>
    {children}
    
        
      </Box>


    );




};

export default Header