import { Grid, makeStyles } from "@material-ui/core";
import * as React from 'react';
import Leftbar from './components/leftbar';
import Navbar from './components/navbar';
import Righttbar from './components/rightbar';
import Feed from './components/feed';
import Add from "./components/add";




const useStyles = makeStyles((theme)=>({
rightGrid:{
 [theme.breakpoints.down('xs')]:{
   display:'none'
 }
},


}))
function App() {
  const classes = useStyles()
  
  return (
    <div className="app">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightGrid}>
          <Righttbar />
        </Grid>
      </Grid>
      <Add />
     
    
    </div>
  );
}

export default App;
