import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>

    <Link to="/" exact>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to="/shop">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Shop" />
      </ListItem>
    </Link>
      

    <Link to="/album">
      <ListItem button>
        <ListItemIcon>
          <PhotoAlbumIcon />
        </ListItemIcon>

        <ListItemText primary="Album" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
   <Link to="/login">
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
            <ListItemText primary="Login" />
      </ListItem>
    </Link>
  </div>
);
