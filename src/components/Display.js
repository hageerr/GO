import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react'; 
import { makeStyles, Grid, Typography } from '@material-ui/core' ;

const useStyles = makeStyles((theme) => ({

   
}) 
)

function Display() {


    const classes = useStyles() ;
    const [info, setInfo] = useState([]);
    const [theArray, setTheArray] = useState() ;
    const customer = [] ; 
  
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const url = "https://dev.goteclabs.com/bus_admin/delivery_view" ;

    const getEntry =  () => {
            axios.get(url)
            .then((response) => {
                // console.log(response)
                return setInfo(response.data.data);
        }) 
            .catch(function (error) {
                console.log(error.response);
        });
         
    };

     function objects(instance) {
        let results = [] ;
        for (const [key, value] of Object.entries(instance)){
            if (typeof value === 'object') {
          for (const [key, x ] of Object.entries(value)) {
                            results.push([key,x])
                            console.log(results)
                            
                   }          
           }
    } 
    return (results)
}
    useEffect(() => {
        getEntry() ;
      }, []);

     
  return  (
      <div>
          {info && info.map((entry, index) =>  {
              customer.push(objects(entry)) 
              console.log(customer)

                return (
                   <Grid container className={classes.entry} key={index} wrap="nowrap" style={{marginTop: '10px' , marginBottom: '25px'}}>
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
      )
            }
export default Display ;
