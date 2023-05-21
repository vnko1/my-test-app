import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { QUERYTYPE, useUsers } from "../../services";

const Filters = () => {
  const { setQueryType } = useUsers();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuTitle, setMenuTitle] = useState(QUERYTYPE.all.title);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ({ target: { id } }) => {
    setAnchorEl(null);

    if (id === QUERYTYPE.all.title) {
      setQueryType(QUERYTYPE.all);
      setMenuTitle(QUERYTYPE.all.title);
    }
    if (id === QUERYTYPE.follow.title) {
      setQueryType(QUERYTYPE.follow);
      setMenuTitle(QUERYTYPE.follow.title);
    }
    if (id === QUERYTYPE.following.title) {
      setQueryType(QUERYTYPE.following);
      setMenuTitle(QUERYTYPE.following.title);
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
        sx={{
          fontSize: 18,
        }}
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
