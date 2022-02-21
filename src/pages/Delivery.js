import React from 'react' ;
import Leftbar from '../components/Leftbar' ;
import Header from '../components/Header' ;
import List from '../components/List' ;
import Main from '../components/Main' ;
import { Grid , makeStyles, Container } from '@material-ui/core'
import theme from '../theme' ;

const useStyles = makeStyles((theme) => ({
  background : {
        height : '100%',
        backgroundColor : theme.palette.secondary.dark, 
    }
}) 
)

function Delivery() {

    const classes = useStyles() ;

    return (
        <div className={classes.background}>
            
            <Grid container spacing={3} className={classes.app}>
                <Grid item lg={1.5}>
                  <Leftbar>
                  </Leftbar>
                </Grid>
                 <Grid item  className={classes.dashboard}>
                    <Grid item>
                      <Main/>
                   </Grid>
               </Grid>
            </Grid>
        </div>
    )
}

export default Delivery
