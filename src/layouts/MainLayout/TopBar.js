import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(theme => ({
  root: {},
  toolbar: {
    height: 64
  },
  title: {
    flexGrow: 1,
  },
  sep: {
    width: theme.spacing(3)
  }
}));

const TopBar = ({className, ...rest}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/ignite">
          <Logo />
        </RouterLink>
        <div className={classes.sep}/>
        <Button color="inherit" onClick={(e) => console.log(e)}>Security</Button>
        <Button color="inherit" onClick={(e) => console.log(e)}>Cluster</Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
