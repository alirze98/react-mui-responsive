import { Container,Tooltip,IconButton, Modal, TextField, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Alert } from '@mui/material';

const useStyles = makeStyles((theme)=>({
    tooltip:{
        position:'fixed',
        right:0,
        bottom:0
       
      },
      modalContainer:{
          width:500,
          height:550,
          position:'absolute',
          top:0,
          right:0,
          bottom:0,
          left:0,
          margin:' auto',
          backgroundColor:'#fff',
          [theme.breakpoints.down('sm')]:{
              width:'100vw',
              height:'100vh'
          }
          
      },
      item:{
          marginBottom:theme.spacing(3),
          [theme.breakpoints.down('sm')]:{
            marginBottom:theme.spacing(6),
          }
      }
}))



const Add = () => {
    const [selectValue,setSelectValue] = useState('Public');
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [snackOpen,setSnackOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackOpen(false);
      };
    return (
       <div>
    <Tooltip title="Add" className={classes.tooltip} TransitionComponent={'Zoom'}>
            <IconButton onClick={()=> setOpen(true) }>
                <AddCircleIcon className={classes.addButton} sx={{ fontSize:'50px',color:'#3f51b5'}} />
            </IconButton>
    </Tooltip>
  
   <Modal open={open} onClose={()=> setOpen(false)} >
        <Container className={classes.modalContainer}>
            <div className={classes.item}>
        <TextField id="standard-basic" label="Title" variant="standard" style={{width:'100%'}} />
            </div>
            <div className={classes.item}>
            <TextField
          id="outlined-required"
          label="description"
          required
          defaultValue="Tell your story..."
          multiline
          variant="outlined"
          rows={4}
          style={{width:"100%"}}
          size="small"
        />
        
            </div>
            <div className={classes.item}>
            <TextField select label='visibility' value={selectValue} onChange={(e)=> setSelectValue(e.target.value)} >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
            </TextField>
            </div>
            <div className={classes.item}>
                <FormControl>
                    <FormLabel>who can comment?</FormLabel>
                    <RadioGroup defaultValue="Everybody">
                        <FormControlLabel control={<Radio />} value="Everybody" label="Everybody" />
                        <FormControlLabel control={<Radio />} value="My Friends" label="My Friends" />
                        <FormControlLabel control={<Radio />} value="Nobody" label="Nobody" />
                        <FormControlLabel disabled control={<Radio />} value="custom" label="custom (premium)" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.item}>
                <Button onClick={()=> setSnackOpen(true)} variant='outlined' color='primary' style={{marginRight:'20px'}}>Create</Button>
                <Button onClick={()=> setOpen(false)} variant='outlined' color='secondary'>Cancel</Button>
            </div>
        </Container>
    </Modal>
    <Snackbar
  open={snackOpen}
  autoHideDuration={3000}
  onClose={handleClose}
  message="crate successfully"
  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  
>
<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          congrats,create succussfully 
        </Alert>
</Snackbar>
 


       </div>
    );
};

export default Add;