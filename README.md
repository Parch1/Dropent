# Dropent
Where you can watch prices drop - on all your essential goods.

## Introduction

Visualize aggregate prices of high demand goods (toilet paper, hand sanitizer, etc) in graphs, webscrape online for the best prices for those goods across 40+ websites, and order goods in the app with Stripe API.
- [View deployed project](google.com)
- [View it on DevPost](https://devpost.com/software/dropent-ynhwqt)
- Read the comprehensive project report [here](https://docs.google.com/document/d/1dbO4IcNlcxhiQFz-5nUSz6OwcSLitgwZEx9Ammr8EiM/edit#).

### Contributors

Project developed by Ryan Lee (ryanlee7132@gmail.com), Jennifer Long (j.alicia.long@gmail.com), Christian Gonzalez, and Peijia Ding for HooHacks 2020.


## Instructions

### Setup

Clone the repository and run the following to install dependencies:
```
git clone [url]
npm install
```

### Running the Project

Make sure that you are in the root directory of the project and run the following:
```
npm run server    # start server
npm start         # start frontend
npm run dev       # start app
```

The app should open in a new window at http://localhost:3000


### Making API Calls

You can check the result of your api call at http://localhost:3001 after running the server side with `npm run server`.


## Built With

* [ReactJS](https://www.djangoproject.com/) - Frontend
* [React-Bootstrap](https://react-bootstrap.github.io/components/) - For UI components
* [ExpressJS/NodeJS](https://expressjs.com/) - Backend APIs
* [Firebase](https://firebase.google.com/) - Database
* [Google Cloud Platform](https://cloud.google.com/) - Deployment