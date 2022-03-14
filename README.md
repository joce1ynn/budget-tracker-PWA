# Progressive Web Applications: Budget Tracker

## Table of Contents
- [Description](#description)
- [Technology](#Technology)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Questions](#questions)

## Description:
This progressive web application allows user to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.

## Technology:
Project is created with:
- Javascript
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation
To run this project, install it locally using npm:
```
npm init -y
npm i express mongoose 
```

## Usage
After installing npm packages, the application will be invoked by using the following command: ```npm start```.

### Deployment to Heroku Using MongoDB Atlas
```
heroku create
Settings ➡️ Config Vars ➡️ KEY: MONGODB_URI ➡️ VALUE: (from MongoDB Atlas connect, change password)
git push heroku main  
heroku open
```


[Click me to see the app!](https://budget-tracker-20223.herokuapp.com/)

### Example Screenshot
![Screenshot](/public/images/BT.png)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
This project is licensed under MIT, for more information please visit https://opensource.org/licenses/MIT

## Contribution
Made by Wenwen Tian

## Questions?
Please feel free to contact me if you need any further information:
- Github Profile: https://github.com/joce1ynn
