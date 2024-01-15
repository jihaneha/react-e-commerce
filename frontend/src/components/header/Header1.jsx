import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'FR',
  'EN',

];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="bg-slate-700 " 
    // sx={{
    //   bgcolor:"#2B3445"
    // }}
    >
    <Container >
    <div className="text-white p-2 flex w-full h-full justify-between items-center">
      <div className="flex justify-center items-center">
        <span className="border mr-2 bg-red-500 border-none rounded-lg p-1 h-fit">
          HOT
        </span>
        <span>Free Express Shipping</span>
      </div>
      <div className="flex justify-center items-center">
      <div>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined />
          </IconButton>
        )}
      </div>
   <div> 
   <List 
        component="nav"
        aria-label="Device settings"
        sx={{ p:0,m:0}}
      >
        <ListItem
        className="cursor-pointer"
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{ px:1}}
        >
          <ListItemText
          sx={{
           ".MuiTypography-root" :{fontSize:"1rem", color:"white"}
          }}
            secondary={options[selectedIndex]}
          />
          <ExpandMore/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem sx={{
            fontSize:"1rem", p:"3px 10px", minHeight:"10px"
          }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      </div>
   <FacebookRoundedIcon className="mr-3" />
   < InstagramIcon/>

    </div>
    </div></Container></Box>
  );
};

export default Header1;
