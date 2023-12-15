import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";


const NavListDrawer = ({ onClick, navArrayLinks, setOpen}) => {
  return (
    <>
      <Box 
      sx={{ width: 250 }}
      onClick={onClick}>
        <nav aria-label="main mailbox folders">
          <List>
            {navArrayLinks.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
              >
                <ListItemButton
                  component={NavLink}
                 to={item.path}
                 onClick={()=> setOpen(false)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
};
export default NavListDrawer;

NavListDrawer.propTypes = {
  navArrayLinks: PropTypes.array.isRequired,
  onClick : PropTypes.func.isRequired,
  setOpen : PropTypes.func.isRequired,
  };
