import React from 'react' 
import { makeStyles } from '@material-ui/core' ;
import { AppBar, Toolbar, Typography } from '@mui/material' ;
import logo from '../image/logo.jfif'
import theme from '../theme' ;

const useStyles = makeStyles((theme) => ({
   
    toolbar : {
        position: 'static',
        display: 'flex', 
        height: '60px',
        backgroundColor : theme.palette.primary.main , 
    },

}) 
) ;


function Navbar() {

    const classes = useStyles() ;

    return (
        <div >
            <AppBar position='static' className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <img src={logo} style={{height: '100%' }} />
                  {/* <Typography>GO DELIVERY </Typography> */}
                </Toolbar>
            </AppBar>
            
        </div>
    )
}
 
export default Navbar ;
