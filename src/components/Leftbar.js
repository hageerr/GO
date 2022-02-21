import React from 'react' ;
import { makeStyles, Container, Grid, Typography } from '@material-ui/core' ;
import { Apps, DirectionsCar, Person, AllInclusive, CallMade, DirectionsBus, Notifications, Call, Logout  } from '@material-ui/icons' ;
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom" ;


const useStyles = makeStyles((theme) => ({
    container : {
        height: '100%',  
        color: theme.palette.secondary.main, 
        backgroundColor: theme.palette.primary.dark,   
        paddingTop : theme.spacing(7),
    },

    item : {
        marginBottom: theme.spacing(4),
        cursor: 'pointer',
    },
        
    icon : {
        paddingRight: theme.spacing(1.5),
    },

    delLink : {
        color: theme.palette.secondary.main,
        textDecoration: 'none',  
    },

}) 
)


function Leftbar() {

     const classes = useStyles() ;

    return (

        <Container className={classes.container}>
            <Grid conatiner direction="column" >
                <Grid item  className={classes.item}>
                    <Apps className={classes.icon} />
                    <Typography display="inline">Dashboard</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <DirectionsCar className={classes.icon} />
                    <Typography display="inline">Cars</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <Person className={classes.icon} />
                    <Typography display="inline">Captins</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <PedalBikeIcon className={classes.icon} />
                    <Link to="/" className={classes.delLink}> <Typography display="inline" >Delivery</Typography></Link>
                </Grid>

                <Grid item className={classes.item}>
                    <AllInclusive className={classes.icon} />
                    <Typography display="inline">Trips</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <StickyNote2Icon className={classes.icon} />
                    <Typography display="inline">Complaints</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <CallMade className={classes.icon} />
                    <Typography display="inline">Promotions</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <DirectionsBus className={classes.icon} />
                    <Typography display="inline">Bus Section</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <Person className={classes.icon} />
                    <Typography display="inline">Captins</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <Person className={classes.icon} />
                    <Typography display="inline">User Management</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <Notifications className={classes.icon} />
                    <Typography display="inline">Notifications</Typography>
                </Grid>
                
                <Grid item className={classes.item}>
                    <Call className={classes.icon} />
                    <Typography display="inline">Contact Us</Typography>
                </Grid>

                <Grid item className={classes.item}>
                    <LogoutIcon className={classes.icon} />
                    <Typography display="inline">Logout</Typography>
                </Grid>
                
            </Grid>
  
        </Container>
    )
}

export default Leftbar ;
