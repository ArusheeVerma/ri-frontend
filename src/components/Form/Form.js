import React, {useState} from 'react';
import useStyles from './styles'

// import {TextField, Button, Typography, Paper} from '@mui/material';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createPosts } from '../../actions/posts.js';
import { updatePost } from '../../actions/posts.js';
const Form=({currentId, setCurrentId})=>{

    const [postData, setPostData]=useState({
        creator:'', title:'', message:'', tags:'', selectedFile:'' 
    })
    const classes=useStyles();
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }
        else{
            dispatch(createPosts(postData))
        }
       
    }
    const clear=()=>{

    }
    

    
    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating Precious Memories</Typography>
            <TextField 
                name="creator"
                variant='outlined'
                label='Creator'
                fullWidth
                 value={postData.creator}
                onChange={(e)=>setPostData({...postData,creator: e.target.value})}
            />
            <TextField 
                name="title"
                variant='outlined'
                label='Title'
                fullWidth
                 value={postData.title}
                onChange={(e)=>setPostData({...postData,title: e.target.value})}
            />
            <TextField 
                name="message"
                variant='outlined'
                label='Message'
                fullWidth
                 value={postData.message}
                onChange={(e)=>setPostData({...postData,message: e.target.value})}
            />
            <TextField 
                name="tags"
                variant='outlined'
                label='Tags'
                fullWidth
                 value={postData.tags}
                onChange={(e)=>setPostData({...postData,tags: e.target.value})}
            />
            <div className={classes.fileInput}>
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64})=>setPostData({...postData, selectedFile: base64})}
                />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
        // <h1> FORM </h1>
    );
}
export default Form;