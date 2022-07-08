import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../../Feature/Counter/CounterSlice';
import { Alert } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const CountRedux = () => {
    const classes = useStyles();
const number = useSelector((state)=>state.counting.count);


const dispatch = useDispatch();
    return (
        <div>
            <div className={classes.root}>
                <Grid container className='main'>
                    <Grid item xs={12} >
                        <Paper className='paper' elevation={3}>
                        <Typography className='head'>Add to Cart </Typography>
                        {number>= 0 ?  
                        <>
                        <Button variant="outlined" color="primary" onClick={()=>dispatch(increment())}>
                        <AddIcon/>
                        </Button>
                        <span className='number'>{number}</span>
                        <Button variant="outlined" color="primary" onClick={()=>dispatch(decrement())}>
                        <RemoveIcon/>
                        </Button>
                        </>
                        :
                        <>
                        <Button variant="outlined" color="primary" onClick={()=>dispatch(increment())}>
                        <AddIcon/>
                        </Button>
                        <span className='number'>0</span>
                        <Button variant="outlined" color="primary" onClick={()=>dispatch(decrement())}>
                        <RemoveIcon/>
                        </Button>
                        <Alert severity="error">please valid number</Alert>
                        </>    
                    }
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
