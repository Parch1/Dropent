# Dropent
Where you can watch prices drop - on all your essential goods.

## Introduction

Visualize aggregate prices of high demand goods (toilet paper, hand sanitizer, etc) in graphs, webscrape online for the best prices for those goods across 40+ websites, and order goods in the app with Stripe API.
- [View it on DevPost](https://devpost.com/software/dropent-ynhwqt)
- Read the project report [here](https://docs.google.com/document/d/1dbO4IcNlcxhiQFz-5nUSz6OwcSLitgwZEx9Ammr8EiM/edit#).

### Contributors

Project developed by Ryan Lee, Jennifer Long, Christian Gonzalez, and Peijia Ding for HooHacks 2020.


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
npm start dev         # start frontend
```

The app should open in a new window at http://localhost:3000


### Making API Calls

You can check the result of your api call at http://localhost:3001 after running the server side with `npm run server`.


## Built With

* [ReactJS](https://www.djangoproject.com/) - Frontend
* [React-Bootstrap](https://react-bootstrap.github.io/components/) - For UI components
* [Django REST Framework](https://www.django-rest-framework.org/) - Backend API
* [Firebase](https://firebase.google.com/) - Database and Authentication
* [Google Cloud Platform](https://cloud.google.com/) - Deployment
