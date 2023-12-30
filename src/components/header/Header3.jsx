import * as React from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container
      className="my-3"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.inpColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              p: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Container>
  );
};

export default Header3;
