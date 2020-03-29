import React, { Component } from 'react';
import searchStatus from './Search';

var userSearchStatus = false;
console.log(userSearchStatus);

export function setUserSearchStatus() {
  userSearchStatus = true;
  
  console.log(userSearchStatus);
  return userSearchStatus;
}

class SearchStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus:searchStatus
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }


  render() {
    return (
        <div></div>
    );
  }
}

export default SearchStatus;
