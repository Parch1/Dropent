import setUserSearchStatus from './SearchStatus.js';
export var searchStatus = false;
export var itemQuery = 'null';
var SerpWow = require('google-search-results-serpwow');

// create the serpwow object, passing in our API key
let serpwow = new SerpWow('39090B209642482C853B4B26EBF3127B')

// export function setStatus() {
//     searchStatus = true;
//     console.log(searchStatus);
//     setCurrStatus();
// }
//
// export function setCurrStatus() {
//     var userSearchStatus = new setUserSearchStatus();
//     console.log(userSearchStatus);
// }

export function setItem(itemQuery) {
    console.log(itemQuery);
    return searchPrice(itemQuery);
}

export function searchPrice(itemQuery) {
    // set up the search parameters
    var params = {
        q: itemQuery,
        search_type: 'shopping',
        sort_by: 'base_price',
        time_period: 'last_hour'
    }

    let lowestPriceItem = {};
    // retrieve the search results as JSON
    serpwow.json(params)
        .then(result => {
        // console.log(JSON.stringify(result.shopping_results, 0, 2));
        lowestPriceItem = result.shopping_results[0];
        console.log(lowestPriceItem);
        })
        .catch(error => {
        console.log(error);
    });

    return lowestPriceItem;
}

export default searchStatus;
