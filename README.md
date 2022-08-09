# finnhubIBMtask
Application link -  http://ec2-3-10-107-104.eu-west-2.compute.amazonaws.com/


# Project Title

Webpage using "Finnhub" APIs, to search and retrieve companies’ stock prices, and show them in the diagram

Application hosted in AWS - http://ec2-3-10-107-104.eu-west-2.compute.amazonaws.com/

## Description

With this application, you can search for a company, by typing companies` symbol.
Select the date range on the calendar, click on the company name and the app'll show a candle chart for the stock prices.

* MERN application uses API's:
 https://finnhub.io/docs/api/company-profile2 - to get company profile.
 https://finnhub.io/docs/api/stock-candles - stock prices history.

 * Use API data to make diagram with "apexChart" 

 * Logs bouth call's to backend and sends logs to mongoDB

 * Hosted on Ubintu server on AWS EC2
## Demo


https://user-images.githubusercontent.com/99330561/183774318-d5b412a2-00a8-4b92-bfe3-6c9015c084b5.mp4




### Installing
To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer.

```
# Clone this repository
$ git clone https://github.com/Zsquare2/finnhubIBMtask.git

# Go into the repository
$ cd back-end

# Install dependencies
$ npm install

# Build and copy react-front end 
$ npm build:ui

# config .env file
$$MONGODB_URI=

$ PORT=

$ TEST_MONGODB_URI=

$ FINHUB_KEY=
```
### Executing program


```
# To run dev mode:
$ npm run dev

# To run prod mode: 
$ npm start


```


