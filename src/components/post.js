import { Container,Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
card:{
    marginBottom:theme.spacing(2)
},
cardImage:{
    height:250,
    [theme.breakpoints.down('sm')]:{
        height:150
    }
}
}))

const Post = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.cardImage} image='https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    make better 
                </Typography>
                <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='primary'>share</Button>
                <Button color='primary'>learn more</Button>
            </CardActions>

        </Card>
       
    );
};

export default Post;