import React, { useState } from 'react';
import {Toolbar,AppBar, Typography, InputBase,Avatar,alpha,Badge} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme)=>({
   
    myToolbar:{
     display:'flex',
     justifyContent:'space-between',
    },
    searchWrapper:{
        position:'relative',
        backgroundColor:alpha(theme.palette.common.white,0.15),
        borderRadius:theme.shape.borderRadius,
        width:'50%',
        display:'flex',
        alignItems:'center',
        "&:hover":{
            backgroundColor:alpha(theme.palette.common.white,0.25),
        },
        [theme.breakpoints.down('xs')]: {
            display:(props)=>(props.open ? 'none' : 'flex')
          },
        
    },
    searchIcon:
    {
        marginRight:theme.spacing(1)
    },
    icons:{
      display:(props)=>(props.open ? 'flex' : 'none'),
      alignItems:'center'
    },
    
    input:{
        color:'white', 
    },
    paraLg:{
        display:'block',
        [theme.breakpoints.down('xs')]: {
            display:'none'
          },

    },
    paraSm:{
        display:'none',
        [theme.breakpoints.down('xs')]: {
            display:'block'
        },
        
        
    },
    
    SavedSearchIcon:{
        visibility:'hidden',
        marginRight:theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            visibility:'visible'
        },
    },
    cancelIcon:{
        visibility:'hidden',
        position:'absolute',
        right:0,
        [theme.breakpoints.down('xs')]: {
            visibility:'visible'
        },
    },
    badge:{
        marginRight:theme.spacing(2)
    }
   
   

    
    }))

const Navbar = () => {
    const [open,setOpen] = useState(true);
    const classes = useStyles({open});
    const togglefunc = function(){
        setOpen(false)
    }
    return (
        <div>
            <AppBar className={classes.appbar} position="fixed" >
                <Toolbar className={classes.myToolbar}>
                    <Typography variant='h6' className={classes.paraLg}>
                    lama dev
                    </Typography>
                    <Typography variant='h6' className={classes.paraSm}>
                    LAMA
                    </Typography>
                    <div className={classes.searchWrapper}>
                        <SearchIcon />
                        <InputBase placeholder='Search' className={classes.input} />
                        <CancelIcon className={classes.cancelIcon} onClick={()=>setOpen(true)}/>
                    </div>
                    <div className={classes.icons}>
                        <SearchIcon className={classes.SavedSearchIcon} onClick={togglefunc}/>
                        <Badge badgeContent={1}  color='secondary' className={classes.badge} >
                        <NotificationsIcon className={classes.icon} />
                        </Badge>     
                        <Badge badgeContent={3} color='secondary' className={classes.badge} >
                        <MailIcon className={classes.icon} />
                        </Badge>
                        <Avatar   alt="Remy Sharp" src='"https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"' />
                        
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;