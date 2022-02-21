import React from 'react' ;
import axios from "axios";
import { useEffect, useState } from 'react' ;
import { Grid , makeStyles, Container, Typography } from '@material-ui/core' ;
import { Stack, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider  } from '@mui/lab' ;
import { DirectionsCar, Person, AllInclusive, Add, ArrowForwardIos, LocationOn  } from '@material-ui/icons' ;
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {Select, MenuItem } from '@material-ui/core' ;
import theme from '../theme' ;


const useStyles = makeStyles((theme) => ({
    header : {
        width: '79vw',
        height: '15vh', 
        padding : '0 20px', 
        marginTop: '50px',
        backgroundColor: theme.palette.secondary.main,
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    input : {
        width: '100%',
        padding: '8px 15px',
        fontSize: '14px',
        border: 'none',
    },

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

function Main() {

    const classes = useStyles() ;
    const [customerStatus, setCustomerStatus] = useState('') ;
    const [pickAddressStatus, setPickAddressStatus] = useState('') ;
    const [dropAddressStatus, setDropAddressStatus] = useState('') ;

    
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [array, setArray] = useState([]) ;
    const customer = [] ; 


  //------------- Header ---------------------
    
    const updateCustomerStatus = (e)=> {
        console.warn(e.target.value) 
        setCustomerStatus(e.target.value)
    } ;

    // const updatePickAddress = (e)=> {
    //     console.warn(e.target.value) 
    //     setPickAddressStatus(e.target.value)
    // } ;

    // const updateDropAddress = (e)=> {
    //     console.warn(e.target.value) 
    //     setDropAddressStatus(e.target.value)
    // } ;

    const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  //--------------- Display ------------------

    const url = "https://dev.goteclabs.com/bus_admin/delivery_view" ;

    const getEntry =  () => {
            setLoading(true);
            axios.get(url)
            .then((response) => {
                
                return setInfo(response.data.data);
        }) 
            .catch(function (error) {
                console.log(error.response);
                setError(error);
        })
        .finally(() => {
        setLoading(false);
      });
    };

     function objects(instance) {
        let results = [] ;
        for (const [key, value] of Object.entries(instance)){
            if (typeof value === 'object') {
          for (const [key, x ] of Object.entries(value)) {
                            results.push([key,x])
                   }          
           }
    } 
    return (results)
}

    var filteredData = function(input) {
      
        // if(customerStatus !== ''){
            return input.filter((point) => point.customer.full_name.toLowerCase().includes(customerStatus.toLowerCase())) 
        // } 
        // else if(pickAddressStatus !== '') {
        //     return input.filter((point) => point.pickup_address.toLowerCase().includes(pickAddressStatus.toLowerCase()))
        // }
        // else if(dropAddressStatus !== ''){
        //     return input.filter((point) => point.dropoff_address.toLowerCase().includes(dropAddressStatus.toLowerCase()))
        // }
    }

    useEffect(() => {
        getEntry() ;
       
      }, []);

if (loading) {
    return <p>Data is loading...</p>;
  }
if (error) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <Container>
        <Grid container >
            
            <Grid item >
                <div className={classes.header}>

                    <div>
                        <input type='text' className={classes.input} value={customerStatus} placeholder='Search by customer name'  onChange={updateCustomerStatus}/>
                    </div>

                    {/* <div>
                        <input type='text' value={pickAddressStatus} placeholder='Search Pick-up Address'  onChange={updatePickAddress}/>
                    </div>

                    <div>
                        <input type='text' value={dropAddressStatus} placeholder='Search drop-off Address'  onChange={updateDropAddress}/>
                    </div> */}

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                        <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />} />
                    </Stack>
                    </LocalizationProvider>
            
                </div>
            </Grid>



            <Grid>
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
                    
                    </div>
                </div>
            </Grid>

            <Grid>
                <div className={classes.display}>
                 {filteredData(info).map((entry, index) =>  {
                    
                    customer.push(objects(entry)) 

                        return (
                        <Grid container className={classes.entry} key={index} wrap="nowrap" style={{marginTop: '10px' , marginBottom: '15px'}}>
                            <Grid item zeroMinWidth lg={2}>
                                <Typography  className={classes.customer}>{customer[index][0][1]}<br/> {customer[index][1][1]}</Typography>
                            </Grid>

                            <Grid item zeroMinWidth lg={2}>
                                <Typography  className={classes.driver} >{customer[index][2][0] === 'full_name' ? customer[index][2][1] : ''} <br/>{customer[index][3][0] === 'phone_number' ? customer[index][3][1] : ''}</Typography>
                            </Grid>

                            <Grid item zeroMinWidth lg={2}>
                                <Typography className={classes.address} >{entry.pickup_address} {entry.dropoff_address}</Typography>
                            </Grid>

                            <Grid item zeroMinWidth lg={2} style={{marginLeft: '20px'}}>
                                <Typography className={classes.ride} style={{ fontWeight: '700'}} >{entry.ride_type}</Typography>
                            </Grid>

                            <Grid item zeroMinWidth lg={2}>
                                <Typography className={classes.distance} >{entry.trip_distance}</Typography>
                            </Grid>

                            <Grid item zeroMinWidth lg={1}>
                                <Typography className={classes.status} style={{fontSize: '15px'}} ><h4>Trip Status </h4> {customer[index][2][0] === 'trip_status' ? customer[index][2][1] : customer[index][4][1]} <br/>
                                <h4>Total fare</h4> {customer[index][3][0] === 'total_fare' ? customer[index][3][1] : customer[index][5][1]} <br/>
                                <h4>Amount</h4>{customer[index][4][0] === 'collected_amount' ? customer[index][4][1] : customer[index][6][1]}</Typography>
                            </Grid>
                                
                            </Grid>
                        )      
                    }   
                )} 
                    
                 </div>
            </Grid>
        
        </Grid>
        
    </Container>
  )
}

export default Main