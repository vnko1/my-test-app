import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { QUERYTYPE, useUsers } from "../../services";
import { Box } from "@mui/material";

const Filters = () => {
  const { setQueryType, setPage } = useUsers();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuTitle, setMenuTitle] = useState(QUERYTYPE.all.title);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ({ target: { id } }) => {
    setAnchorEl(null);
    setPage(1);

    if (id === QUERYTYPE.all.title) {
      setQueryType(QUERYTYPE.all.mode);
      setMenuTitle(QUERYTYPE.all.title);
    }
    if (id === QUERYTYPE.follow.title) {
      setQueryType(QUERYTYPE.follow.mode);
      setMenuTitle(QUERYTYPE.follow.title);
    }
    if (id === QUERYTYPE.following.title) {
      setQueryType(QUERYTYPE.following.mode);
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
