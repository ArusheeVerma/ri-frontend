import React from 'react';
import Post from './Post/Post.js'
import useStyles from './styles.js';
import {useSelector} from 'react-redux';

import {Grid, CircularProgress} from '@mui/material';
const Posts=({setCurrentId})=>{
    const classes=useStyles();
    const posts=useSelector((state)=>state.posts);
    console.log(posts);
    return(
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}

            </Grid>
        )
        // <>
        //     <h1> POSTS </h1>
        //     <Post/>
        //     <Post/>
        // </>
    );
}
export default Posts;