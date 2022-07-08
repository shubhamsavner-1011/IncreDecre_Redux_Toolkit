import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Alert } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const CountHook = () => {
    const classes = useStyles();
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className={classes.root}>
                <Grid container className='main'>
                    <Grid item xs={12} >
                        <Paper className='paper' elevation={3}>
                        <Typography className='head'>Increment/Decrement </Typography>

                        {count>=0?
                         <>
                        <Button variant="outlined" color="primary" onClick={()=>(setCount(count+1))}>
                        <AddIcon/>
                        </Button>
                        <span className='number'>{count}</span>
                        <Button variant="outlined" color="primary" onClick={()=>(setCount(count-1))}>
                        <RemoveIcon/>
                         </Button>
                        </>
                    :  
                    
                    <>
                    <Button variant="outlined" color="primary" onClick={()=>(setCount(count+1))}>
                    <AddIcon/>
                    </Button>
                    <span className='number'>0</span>
                    <Button variant="outlined" color="primary" onClick={()=>(setCount(count-1))}>
                    <RemoveIcon/>
                     </Button>
                    <Alert severity="error">Please enter valid number</Alert>
                    </>  
                    }

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
