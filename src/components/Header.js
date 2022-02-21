import React from 'react' ;
import { useState } from 'react' ;
import { Stack, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider  } from '@mui/lab' ;
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { makeStyles, Select, MenuItem } from '@material-ui/core' ;

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
    select : {
        width: '140px',
    }
 
}) 
)


function Header() {

    const classes = useStyles() ;
    const [status, setstatus] = useState() ;

    const updateStatus = (e)=> {
        console.warn(e.target.value) 
        setstatus(e.target.value)
    } ;

    const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

    return (
        <div className={classes.header}>

            <Select value={status}
            className={classes.select}
            onChange={updateStatus}>
                <MenuItem value='' disabled >Select Status</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>

            <Select value={status}
             className={classes.select}
            displayEmpty
            onChange={updateStatus} label='Select Driver'>
                <MenuItem value='' disabled >Select Driver </MenuItem>
                <MenuItem value={4}>1</MenuItem>
                <MenuItem value={5}>2</MenuItem>
                <MenuItem value={6}>3</MenuItem>
            </Select>

            <Select value={status}
             className={classes.select}
            onChange={updateStatus}>
                <MenuItem value='' disabled >Select Status</MenuItem>
                <MenuItem value={7}>1</MenuItem>
                <MenuItem value={8}>2</MenuItem>
                <MenuItem value={9}>3</MenuItem>
            </Select>

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
    )
}

export default Header ;
