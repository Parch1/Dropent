import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Checkout from './Checkout';
import box from '../images/box-only.png';
import Button from '@material-ui/core/Button';
import addItem from '../images/addItem.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#F2F3F4'
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
    align:'center',
    marginTop:'-100px'
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
      author: 'author',
    },{
        img: '',
        title: 'Item 2',
        author: 'author',
    },{
        img: '',
        title: 'Item 3',
        author: 'author',
    },{
        img: '',
        title: 'Item 4',
        author: 'author',
    },{
        img: '',
        title: 'Item 5',
        author: 'author',
    }
  ];
 
export default function CheckoutList() {
  const classes = useStyles();

  return (
      <div>
        <div className={classes.root}>
        <p style={{marginTop:'20px', marginRight:'1225px'}}>Items saved</p>

        <GridList className={classes.gridList} cols={5}>
            {tileData.map(tile => (
                <img src={box} alt={tile.title} style={{height:"100px", width:"150px", marginLeft:'40px', marginTop:'0px'}}/>
            ))}
            <div style={{marginLeft:'40px'}}>
            <Button variant="contained" className={classes.button}>
            <img src={addItem}/>
            </Button>
            </div>
        </GridList>
        <div className={classes.checkout}>
            <Checkout></Checkout>
        </div>
        </div>

    </div>
  );
}
