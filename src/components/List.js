import React from 'react' ; 
import { makeStyles, Grid, Typography } from '@material-ui/core' ;
import Display from './Display' ;
import { DirectionsCar, Person, AllInclusive, Add, ArrowForwardIos, LocationOn  } from '@material-ui/icons' ;
import StickyNote2Icon from '@mui/icons-material/StickyNote2';


const useStyles = makeStyles((theme) => ({
    list : {
        marginTop: theme.spacing(3.5),    
    },
    
    display : {
        width: '80vw',
        height: '100%', 
        backgroundColor: theme.palette.secondary.main,
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: '10px',
        padding: '10px 15px',
    }, 

    column : {
        display: "flex",
        alignItems: "center",
    },

    icon : {
        paddingRight: theme.spacing(0.5),
    },

    entry : {
        display: 'flex', 
        flexDirection: 'row',
        padding: '20px',
    }
 
}) 
)


function List() {
   
    const classes = useStyles() ; 

    return (
        <div className={classes.list}>
            <h2>List</h2>
            
            <div className={classes.display}>

                <Grid container >

                    <Grid item  className={classes.column} lg={2}>
                        <Person className={classes.icon}/>
                        <Typography display="inline">Customer</Typography>
                    </Grid>

                    <Grid className={classes.column} lg={2}>
                        <DirectionsCar className={classes.icon}/>
                        <Typography display="inline">Driver</Typography>
                    </Grid>

                    <Grid className={classes.column} lg={2} >
                        <LocationOn className={classes.icon}/>
                        <Typography display="inline">Pick-off/Drop-off Address</Typography>
                    </Grid>

                    <Grid className={classes.column} lg={2} >
                        <ArrowForwardIos className={classes.icon}/>
                        <Typography display="inline">Ride Type</Typography>
                    </Grid>

                    <Grid className={classes.column} lg={2}>
                        <AllInclusive className={classes.icon}/>
                        <Typography display="inline">Trip Distance</Typography>
                    </Grid>

                    <Grid className={classes.column} lg={1}>
                        <StickyNote2Icon className={classes.icon}/>
                        <Typography display="inline">Status</Typography>
                    </Grid>

                    <Grid className={classes.column} lg={1}>
                        <Add className={classes.icon}/>
                        <Typography display="inline">Action</Typography>
                    </Grid>

            </Grid>

            <Display />
             
            </div>
        </div>
    )
}

export default List 
