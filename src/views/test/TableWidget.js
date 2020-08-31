import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Container, makeStyles} from "@material-ui/core";
import Page from 'src/components/Page';

let id = 0;

function createData(name, progress, status) {
  id += 1;
  return {
    id,
    name,
    progress,
    status,
  };
}

const data = [
  createData('Frozen yoghurt', 24, 'Error'),
  createData('Ice cream sandwich', 37, 'Warning'),
  createData('Eclair', 24, 'Info'),
  createData('Cupcake', 67, 'Default'),
  createData('Gingerbread', 89, 'Success'),
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  table: {
    width: 'auto'
  },
  tableChip: {
    '&.green': {
      color: 'white',
      background: theme.palette.success.dark
    },
    '&.red': {
      color: 'white',
      background: theme.palette.error.dark
    },
    '&.orange': {
      color: 'white',
      background: theme.palette.warning.dark
    },
    '&.blue': {
      color: 'white',
      background: theme.palette.info.dark
    }
  }
}));

function Test() {
  const classes = useStyles();

  const getStatus = status => {
    switch (status) {
      case 'Error':
        return 'red';
      case 'Warning':
        return 'orange';
      case 'Info':
        return 'blue';
      case 'Success':
        return 'green';
      default:
        return 'transparent';
    }
  };
  const getProgress = status => {
    switch (status) {
      case 'Error':
        return 'red';
      case 'Warning':
        return 'orange';
      case 'Info':
        return 'blue';
      case 'Success':
        return 'green';
      default:
        return 'transparent';
    }
  };
  return (
    <Page
      className={classes.root}
      title="Test"
    >
      <Container maxWidth="lg">
        <Table className={classNames(classes.table)}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell align="right">
                  <LinearProgress variant="determinate" className={classNames(classes.tableChip, getProgress(n.status))} value={n.progress}/>
                </TableCell>
                <TableCell>
                  <Chip label={n.status} className={classNames(classes.tableChip, getStatus(n.status))}/>
                </TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </Container>
    </Page>
  );
}

export default Test;
