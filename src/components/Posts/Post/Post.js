import React from 'react';
import useStyles from './styles.js';
import {Card , CardMedia, CardActions, CardContent, Button, Typography} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';

const Post=({post, setCurrentId})=>{
    const classes=useStyles();
    return(
        // <h1> POST </h1>
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" 
                onClick={()=>setCurrentId(post._id)}>
                    <MoreHorizIcon font-size="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color="textSecondary">
                    {post.tags.map((tag)=>`#${tag} `)}
                </Typography>
            </div> 
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>{}}>
                    <DeleteIcon fontSize="small" />
                    Delete    
                </Button>
            </CardActions>
        </Card>
    );
}
export default Post;