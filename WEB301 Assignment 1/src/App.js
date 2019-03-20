import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header/Header'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Increment from './components/Increment/Increment';
import Decrement from './components/Decrement/Decrement';


import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

import SnackBar from './components/SnackBar/SnackBar';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      showArrow: false,
      name: '',
      loading: true,
      desserts: [],
      showSnackBar: false,
    }
    this.doIncrement = this.doIncrement.bind(this);
    this.doDecrement = this.doDecrement.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
  }

  doIncrement() {

    const { value, showArrow } = this.state;
    this.setState({
      value: this.state.value + 1,
      showArrow: true,
    });
  }

  doDecrement() {
    const { value } = this.state;

    if (this.state.value === 0) {
      this.setState({
        value: value,
      });
    }

    else {
      this.setState({
        value: this.state.value - 1,
      });
    }
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  saveHandler = () => {
    { (this.state.name).length > 0 ? (
      this.setState(state => {
        state.desserts.push({
          name: state.name,
          value: state.value,
  
        });
        this.setState({
          showSnackBar: true,
        })
        state.name = '';
        state.value = 0;
        return state;
      })
  
      
    ) : alert("Insert dessert name")

    }
    
    const timer = setTimeout(() => {
      this.setState({
        showSnackBar: false,
      });
    }, 5000);
  }

  handleSnackBar = () => {
    this.setState({
      showSnackBar: false,
    })
  }

  render() {
    const { value, name, loading, desserts, showSnackBar } = this.state;
    return (
      <div className={styles.app}>
        <CssBaseline />
        <Header />

        <div className={styles.mainContent}>
          <Grid container spacing={24}>

            <Grid className={styles.leftSide} item xs={6}>
              <Paper className={styles.counter}>
                <Increment handleIncrement={this.doIncrement} />
                <InputBase className={styles.counterInput} value={this.state.value} />
                <Decrement value={value} handleDecrement={this.doDecrement} />
              </Paper>

              <Paper className={styles.InputContent}>
              <Grid container spacing={24}>
              <Grid item xs={6}>
              <TextField
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
              <Button variant="contained" color="primary" className={styles.button}
                  onClick={this.saveHandler}>
                  Primary
                                </Button>
              </Grid>
                
                </Grid>
              </Paper>
            </Grid>

            <Grid className={styles.rightSide} item xs={6}>

              <Paper className={styles.dessertTable}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>Dessert (100g serving)</CustomTableCell>
                      <CustomTableCell align="right">Calories</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {desserts.length > 0 ? (
                      desserts.map(row => {
                        return (
                          <TableRow>
                            <CustomTableCell>
                              {row.name}
                            </CustomTableCell>
                            <CustomTableCell>{row.value}</CustomTableCell>
                          </TableRow>
                        );
                      })
                    ) : (
                        <div>No data available</div>
                      )}

                  </TableBody>
                </Table>
              </Paper>


              <SnackBar className={styles.snackBarContent} showSnackBar={showSnackBar} handleSnackBarClick={this.handleSnackBar} />

            </Grid>


          </Grid>
        </div>

      </div>
    );
  }
}


App.defaultProps = {};

App.propTypes = {};
export default App;
