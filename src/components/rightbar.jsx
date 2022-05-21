import { Container, Typography,Avatar, ImageList, ImageListItem, LinearProgress,Link, Divider,Chip } from '@material-ui/core';
import AvatarGroup from '@mui/material/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme)=>({
Container:{
  paddingTop: theme.spacing(10),
 position:'sticky',
 top:0,
 

},
avatarGroup:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    marginBottom:theme.spacing(4)
    
},
title:{
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
},
imgGroup:{
    marginBottom:theme.spacing(4)

},
link:{
    marginRight:'10px',
    marginBottom:'10px',
    fontSize:16,
    color:'#555',
    '&:hover':{
      cursor:'pointer'
    }
}
}))

const Righttbar = () => {
    const classes = useStyles()
    return (
       <Container className={classes.Container} >
          <div className={classes.avatarGroup}>
          <Typography  gutterBottom className={classes.title} >Online friends</Typography>
           <AvatarGroup max={6}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard"           src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker"   />
                    <Avatar alt="Trevor Henderson"  src="https://material-ui.com/static/images/avatar/7.jpg" />
                    <Avatar alt="Trevor Henderson"  />
                    <Avatar alt="Trevor Henderson"    src="https://material-ui.com/static/images/avatar/8.jpg" />
            </AvatarGroup> 
            </div> 
            <div className={classes.imgGroup}>
                <Typography gutterBottom className={classes.title}>Gallery</Typography>
            <ImageList  cols={2} rowHeight={100}>
            <ImageListItem >
            <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            loading="lazy"
          />
            </ImageListItem>
            <ImageListItem >
            <img
             src="https://material-ui.com/static/images/image-list/burgers.jpg"
            loading="lazy"
          />
            </ImageListItem>
            <ImageListItem >
            <img
             src="https://material-ui.com/static/images/image-list/camera.jpg"
            loading="lazy"
          />
            </ImageListItem>
            <ImageListItem >
            <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            loading="lazy"
          />
            </ImageListItem>
            <ImageListItem >
            <img
           src="https://material-ui.com/static/images/image-list/hats.jpg"
            loading="lazy"
          />
            </ImageListItem>
            <ImageListItem >
            <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            loading="lazy"
          />
            </ImageListItem>

            </ImageList>

            </div>

            <Typography gutterBottom className={classes.title}>Categories</Typography>
            
            <Chip label='Sport' className={classes.link} />
            <Chip label='Food' className={classes.link} />
            <Chip label='Music' className={classes.link} />
            <Divider flexItem style={{marginBottom:5}}/>
            <Chip label='science'  className={classes.link}/>
            <Chip label='Movies' className={classes.link} />
            <Chip label='Tech'  className={classes.link}/>
            
            
           
            
            
        
            

       </Container>
    );
};

export default Righttbar;