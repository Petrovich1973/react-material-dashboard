import React from 'react';
import {
  Grid,
  Container,
  Box,
  Paper,
  FormControlLabel,
  Typography,
  Button,
  Switch,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Nodes from "./Nodes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingTop: theme.spacing(2)
  },
  tools: {
    '& > * + *': {
      marginLeft: '1rem'
    }
  },
  wrapper: {
    height: '100%',
  },
  wrapper2: {
    height: '100%',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    '& > *': {
      flexBasis: 'auto'
    }
  },
  main: {
    flexGrow: 1,
    maxWidth: 'none',
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2)
  },
  wrapTerminals: {
    maxWidth: 'none',
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2)
  },
  paper: {
    height: 240,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperMain: {
    height: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const Ignite = () => {
  const classes = useStyles();

  const [isAvailability, setIsAvailability] = React.useState(true);

  return (
    <Page
      className={classes.root}
      title="Ignite">

      <Container maxWidth={false} className={classes.wrapper}>
        <Grid container spacing={3} className={classes.wrapper2}>

          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              className={classes.tools}>
              <Typography variant="h2" component="h2">
                Cluster_Name
              </Typography>
              <FormControlLabel control={<Switch checked={isAvailability}/>} label="on"/>
              <Button color="primary" variant="contained">Config</Button>
              <Button variant="contained">Snapshots</Button>
            </Box>
          </Grid>

          <Grid item container spacing={3} xs={12} className={classes.main}>
            <Grid item xs={6}>
              <Paper className={classes.paperMain}>
                <Nodes/>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paperMain}>xs=6</Paper>
            </Grid>
          </Grid>

          <Grid item container spacing={3} xs={12} className={classes.wrapTerminals}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
          </Grid>

        </Grid>

      </Container>

    </Page>
  );
};

export default Ignite;
