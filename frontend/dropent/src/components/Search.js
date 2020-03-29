import setUserSearchStatus from './SearchStatus.js';
export var searchStatus = false;
export var itemQuery = 'null';

export function setStatus() {
    searchStatus = true;
    console.log(searchStatus);
    setCurrStatus();
}

export function setCurrStatus() {
    var userSearchStatus = new setUserSearchStatus();
    console.log(userSearchStatus);
}

export function setItem(currItem) {
    itemQuery = currItem;
    console.log(itemQuery);
    return itemQuery;
}

export default searchStatus;