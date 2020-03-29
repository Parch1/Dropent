import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Form, Button } from '@material-ui/core';

var search = false;

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#20164a',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#20164a',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#20164a',
        },
        '&:hover fieldset': {
          borderColor: '#20164a',

        },
        '&.Mui-focused fieldset': {
          borderColor: '#20164a',
        },
      },
    },
  })(TextField);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function Header() {

    const classes = useStyles();

   return (
       
       <div>
            <img src={ require('../images/logo.png') } style={{float: 'left'}}></img>
           <p style={{margin: 30, float: 'left'}}><b>Dropent:</b> Search for an item and find the lowest price.</p>
        <div style={{margin: 20, float: 'right'}}>
            <form className={classes.root} noValidate>
                <CssTextField
                label="Search"
                variant="outlined"
                id="custom-css-outlined-input"
                className={classes.margin}
            />
            </form>

            </div>
       </div>
   )
}