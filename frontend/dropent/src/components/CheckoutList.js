import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Checkout from './Checkout';
import box from '../images/box-only.png';
import Button from '@material-ui/core/Button';
import addItem from '../images/addItem.png';
import PriceChart from './PriceChart';


// For Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width: '1400px',
    height: '250px',
    marginRight: '10px'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  checkout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 20,
    align:'left',
  },
  button: {
    color:"C8C8C8",
    width:'150px',
    height:'95px',
  }
}));

 const tileData = [
    {
      img: '',
      title: 'Item 1',
      store: 'store',
    },{
        img: '',
        title: 'Item 2',
        store: 'store',
    },
  ];

export default function CheckoutList() {
  const classes = useStyles();

  return (
    <Row style={{backgroundColor: '#F2F3F4'}}>
      <Col sm="10" md="7" className="pt-4">
        <PriceChart/>
      </Col>

      <Col sm="2" md="5">
        <h4 style={{marginTop:'20px'}}>Today's Price</h4>
        <hr />
        <h5>Bread</h5>
        <Nav.Link href="#">Amazon - $3.99/loaf</Nav.Link>
        <Nav.Link href="#">Giant - $4.99/loaf</Nav.Link>
        <Nav.Link href="#"><b>Walmart - $2.99/loaf</b></Nav.Link>
        <Nav.Link href="#">Shoppers - $3.99/loaf</Nav.Link>
        <hr />

        <div className={classes.checkout}>
            <Checkout></Checkout>
        </div>
      </Col>

    </Row>
  );
}

// <GridList className={classes.gridList} cols={2}>
//     {tileData.map(tile => (
//         <img src={box} alt={tile.title} style={{height:"100px", width:"150px", marginLeft:'40px', marginTop:'0px'}}/>
//     ))}
//     <div style={{marginLeft:'40px'}}>
//       <Button variant="contained" className={classes.button}>
//         <img src={addItem}/>
//       </Button>
//     </div>
// </GridList>
