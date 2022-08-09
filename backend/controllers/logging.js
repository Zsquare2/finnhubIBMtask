const axios = require("axios");
const companiesRouter = require("express").Router();
const config = require("../utils/config");

const LoggSearch = require("../models/loggSearch");
const LoggPriceData = require("../models/loggPriceData");

const token = config.FINHUB_KEY;

companiesRouter.post("/searchProfile", async (request, response) => {
  const body = request.body;
  const symbol = body.searched_for;
  if (body.searched_for) {
    const profile = await axios.get(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${token}`
    );
    if (profile) {
      response.json(profile.data);
    }
    logg = new LoggSearch({
      searched_for: body.searched_for,
      date: new Date(),
    });
    const savedLogg = await logg.save();
    console.log("search log saved", savedLogg);
  }
});

companiesRouter.post("/searchCandle", async (request, response) => {
  const body = request.body;
  const ticker = body.ticker;
  const sDate = Math.round(body.sDate / 1000);
  const eDate = Math.round(body.eDate / 1000);
  if (body) {
    const candleData = await axios.get(
      `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=D&from=${sDate}&to=${eDate}&token=${token}`
    );

    response.json(candleData.data);

    logg = new LoggPriceData({
      ticker: body.ticker,
      from_date: body.sDate,
      end_date: body.eDate,
      price_data: candleData.data,
      date: new Date(),
    });
    const savedLogg = await logg.save();
  }
});

module.exports = companiesRouter;
