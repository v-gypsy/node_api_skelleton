# node-api-skelleton

# Things to install before project setup
1. NodeJS version v18.16.0 or later
2. mysql version v8.0.33 (use homebrew)
3. sequelAce app for mysql GUI
4. install pm2 gloablly usin npm install -g pm2

# Project setup steps
1. Clone project using https://github.com/v-gypsy/node_api_skelleton.git
2. copy example.env and paste and rename to .env also change key value to actual once
3. run npm install to install all the dependencies

# DataBase Setup
once mysql is installed and started then do follow the below steps for database setup

1. run node_modules/.bin/sequelize db:migrate or npx sequelize-cli db:migrate to migrate all the tables.
