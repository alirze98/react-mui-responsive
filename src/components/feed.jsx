import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Post from './post';

const useStyles = makeStyles((theme)=>({
container:{
    paddingTop:theme.spacing(9)
},
post:{
    paddingBottom:theme.spacing(2)
}
}))

const Feed = () => {
    const classes = useStyles()
    return (
       <Container className={classes.container}>
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />

       </Container>
    );
};

export default Feed;