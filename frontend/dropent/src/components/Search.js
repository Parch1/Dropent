import setUserSearchStatus from './SearchStatus.js';
export var searchStatus = false;
export var itemQuery = 'null';
var SerpWow = require('google-search-results-serpwow');

// create the serpwow object, passing in our API key
let serpwow = new SerpWow('39090B209642482C853B4B26EBF3127B')

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
    searchPrice(currItem);
    return itemQuery;
}

export function searchPrice(currItem) {
    // set up the search parameters
    var params = {
        q: currItem.toString(),
        search_type: 'shopping',
        sort_by: 'base_price',
        time_period: 'last_hour'
    }

    let lowestPriceItem = [];
    // retrieve the search results as JSON
    serpwow.json(params)
        .then(result => {
        // pretty-print the JSON result
        console.log(JSON.stringify(result, 0, 2));
        })
        .catch(error => {
        console.log(error);
    });

    return lowestPriceItem;
}

export default searchStatus;