import setUserSearchStatus from './SearchStatus.js';
export var searchStatus = false;
export function setStatus() {
    searchStatus = true;
    console.log(searchStatus);
    setCurrStatus();
}

export function setCurrStatus() {
    var userSearchStatus = new setUserSearchStatus();
    console.log(userSearchStatus);
}

export default searchStatus;