import React from 'react';
import {
  Box,
  Button,
  Switch,
  FormControlLabel,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  tools: {
    '& > * + *': {
      marginLeft: '1rem'
    }
  }
}));

const Ignite = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Ignite"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="flex-start"
      >
        <Box
          display="flex"
          alignItems="center"
          className={classes.tools}>
          <Typography variant="h2" component="h2">
            Cluster_Name
          </Typography>
          <FormControlLabel control={<Switch />} label="on" />
          <Button variant="contained">Config</Button>
          <Button variant="contained">Snapshots</Button>
        </Box>
      </Box>
    </Page>
  );
};

export default Ignite;
