//import logo from './logo.svg';
//import './App.css';
import React, {useEffect, useState} from 'react';
//import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';

import memories from './images/memories.jpg';

import Posts from './components/Posts/Posts.js';
import Forms from './components/Form/Form.js';

import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts.js';

import useStyles from './styles';
const App = () =>{
  const [currentId, setCurrentId]=useState(null);
  const classes=useStyles();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[]);


  return (
    // <div>
    //   <h1>App</h1>
    // </div>
    <Container maxwidth= "lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignitems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
