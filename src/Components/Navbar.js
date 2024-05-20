import React, { useState } from 'react';

import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRounedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


const Navbar = () => {

    const [openMenu,setOpenMenu,] = useState(false);
    const menuOptions = [
      {
        text: "Home",
        icon: <HomeIcon/>
      },
      {
        text: "About",
        icon: <InfoIcon/>
      },
      {
        text: "Testimonials",
        icon: <CommentRoundedIcon/>
      },
      {
        text: "Contact",
        icon: <PhoneRounedIcon/>
      },
      {
        text: "Cart",
        icon: <ShoppingCartRoundedIcon/>
      },
    ];
    
  return (
    <div>Navbar</div>
  )
}

export default Navbar