import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FILTERMODE, useUsers } from "../../services";
import { Box } from "@mui/material";

const Filters = () => {
  const { setQuery, setPage } = useUsers();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuTitle, setMenuTitle] = useState(FILTERMODE.all);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ({ target: { id } }) => {
    setAnchorEl(null);
    setPage(1);

    if (id === FILTERMODE.all) {
      setQuery("");
      setMenuTitle(FILTERMODE.all);
    }
    if (id === FILTERMODE.follow) {
      setQuery(false);
      setMenuTitle(FILTERMODE.follow);
    }
    if (id === FILTERMODE.following) {
      setQuery(true);
      setMenuTitle(FILTERMODE.following);
    }
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontFamily: "Montserrat", fontSize: 18, color: "#373737" }}
      >
        show {menuTitle}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ textTransform: "uppercase" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} id="all">
          show all
        </MenuItem>
        <MenuItem onClick={handleClose} id="follow">
          show follow
        </MenuItem>
        <MenuItem onClick={handleClose} id="following">
          show following
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Filters;
