import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const Count = () => {
    const classes = useStyles();
   const countNumber = useSelector((state)=>state.counting.count)
  return (
    <div>
    <div className={classes.root}>
        <Grid container className='main'>
            <Grid item xs={12} >
                <Paper className='paper' elevation={3}>
                <Typography className='head'>Total Items</Typography>

                {countNumber>= 0 ?
                <Typography variant='h5'>{countNumber}</Typography>
                :
                <Typography variant='h5'>0</Typography>}
                </Paper>
            </Grid>
        </Grid>
    </div>
</div>
  )
}
