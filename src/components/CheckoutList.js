import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

class CheckoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }


  render() {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };
      
    return (
      <div className="Items">
        <header className="item-list">
        <List component="nav" className="items" aria-label="items" style={flexContainer}>
        <ListItem button>
            <ListItemText inset primary="Item 1" />
        </ListItem>
        <ListItem button>
            <ListItemText inset primary="Item 2" />
        </ListItem>
        <ListItem button>
        <ListItemText inset primary="Item 3" />
        </ListItem>
        <ListItem button>
        <ListItemText inset primary="Item 4" />
        </ListItem>
        <ListItem button>
        <ListItemText inset primary="Item 5" />
        </ListItem>
        </List>
        </header>
      </div>
    );
  }
}

export default CheckoutList;
