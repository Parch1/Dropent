import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

// For Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { setItem, searchPrice } from './Search.js';

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
      item:null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (e) => {
    e.preventDefault()
    this.search = true;
    this.item = e.target.value;
    // var item = setItem(this.item);
    console.log(this.item);
  };

  handleSubmit(e){
    console.log(this.item);
    var item = searchPrice(this.item);
    console.log(item);
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
  // var status = setStatus();

  return (
    <Row className="pt-4">
      <Col lg="8">
        <h4>
        Shop for your essential goods and watch the prices drop.
        </h4>
      </Col>
      <Col lg="4">
        <form className={classes.root} noValidate>
          <CssTextField
          label="Search"
          variant="outlined"
          id="custom-css-outlined-input"
          className={classes.margin}
          onChange={info.handleChange}
          />
          <Button variant="light" size="lg" onClick={info.handleSubmit}>
            Go
          </Button>
        </form>
      </Col>
    </Row>
  )
}
