import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import searchStatus, { setStatus } from '../Search.js';

console.log(searchStatus);

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

export class HeaderInfo {
    constructor(props) {
      this.state = {
        searched:false,
        item:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
      e.preventDefault()
      this.search = true;
      this.item = e.target.value;
      console.log(this.item);
    };

    handleSubmit(e){
      //submit to API
    };

    render() {
      return (
        <div></div>
      );
    }
  }

export default function Header() {
    const classes = useStyles();
    var info = new HeaderInfo();
    var status = setStatus();

   return (
       
       <div>
        <img src={ require('../images/logo.png') } style={{float: 'left'}}></img>
        <p style={{margin: 30, float: 'left'}}><b>Dropent:</b> Search for an item and find the lowest price.</p>
        <div style={{margin: 20, float: 'right'}}>
            <form className={classes.root} noValidate onSubmit={info.handleSubmit}>
                <CssTextField
                label="Search"
                variant="outlined"
                id="custom-css-outlined-input"
                className={classes.margin}
                onChange={status}
            />
            </form>

        </div>
       </div>
   )
}

