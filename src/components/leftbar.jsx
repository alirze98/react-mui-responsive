import { Container,  makeStyles, Typography} from "@material-ui/core";
import { Home, Person,ListSharp, Camera, Videocam, Phone, AirplaneTicket, ContactMail, Note, TravelExplore } from "@mui/icons-material";
import React from 'react';

const useStyles = makeStyles((theme)=>({
 container:{
     
     paddingTop:theme.spacing(11),
     border:'1px solid #E0E0E0 ',
     position:'sticky',
     top:0,
     [theme.breakpoints.down('xs')]:{
         backgroundColor: theme.palette.primary.main,
         
     }
 },
 item:{
     color:'#555',
     display:'flex',
     marginBottom:theme.spacing(3),
     borderBottom:'1px solid #EEEEEE',
     paddingBottom:'10px',
     [theme.breakpoints.down('xs')]:{
       color:'#fff',
       border:'none',
    },
    '&:hover':{

        transition:'.3s',
       cursor:'pointer',
       borderBottom:'1px solid #BDBDBD ',
       color:'#333'

    },
    '&:last-child':{
        border:'none',
        paddingBottom:'none',
        marginBottom:'none',
        
    }
 },
 
 icon:{
     marginRight:theme.spacing(2)
 },
 text:{
     fontWeight:600,
     [theme.breakpoints.down('xs')]:{
        display:'none'
     },
 }
 
}))

const Leftbar = () => {
    const classes = useStyles()
    return (
       <Container className={classes.container}>
           <div className={classes.item}>
               <Home className={classes.icon} />
               <Typography className={classes.text}> Home </Typography>
           </div>
           <div className={classes.item}>
               <Person className={classes.icon} />
               <Typography className={classes.text}> admin </Typography>
           </div>
           <div className={classes.item}>
               <ListSharp className={classes.icon} />
               <Typography className={classes.text}> list </Typography>
           </div>
           <div className={classes.item}>
               <Camera className={classes.icon} />
               <Typography className={classes.text}> photo </Typography>
           </div>
           <div className={classes.item}>
               <Videocam className={classes.icon} />
               <Typography className={classes.text}> Videocam </Typography>
           </div>
           <div className={classes.item}>
               <Phone className={classes.icon} />
               <Typography className={classes.text}> Apps </Typography>
           </div>
           <div className={classes.item}>
               <AirplaneTicket className={classes.icon} />
               <Typography className={classes.text}> ticket </Typography>
           </div>
           <div className={classes.item}>
               <Note className={classes.icon} />
               <Typography className={classes.text}> note </Typography>
           </div>
           <div className={classes.item}>
               <TravelExplore className={classes.icon} />
               <Typography className={classes.text}> explore </Typography>
           </div>
           <div className={classes.item}>
               <ContactMail className={classes.icon} />
               <Typography className={classes.text}> contact </Typography>
           </div>

       </Container>
    );
};

export default Leftbar;