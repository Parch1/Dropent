import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#20164a',
        backgroundColor: 'white'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#20164a',
        backgroundColor: 'white'
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#20164a',
          backgroundColor: 'white'
        },
        '&:hover fieldset': {
          borderColor: '#20164a',
          backgroundColor: 'white'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#20164a',
          backgroundColor: 'white'
        },
      },
    },
  })(TextField);

export default class Header extends React.Component {
 onToken = (token, addresses) => {

 };

 render() {

   return (
    <div style={{float: 'right'}}>
      <form noValidate>
      <CssTextField
        label="Search"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      </form>
    </div>
   )
 }
}