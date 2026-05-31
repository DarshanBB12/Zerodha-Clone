require("dotenv").config();
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { AuthRoute } = require("./routes/AuthRoute");
const app = express();

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;
const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3001,http://localhost:3002,http://localhost:3003,https://zerodha-frontend.onrender.com,https://zerodha-dashboard.onrender.com")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const localhostOriginPattern = /^http:\/\/localhost:\d+$/i;
const renderOriginPattern = /^https:\/\/[a-z0-9-]+\.onrender\.com$/i;

const isAllowedOrigin = (origin) => {
  if (!origin) {
    return true;
  }

  return (
    allowedOrigins.includes(origin)
    || localhostOriginPattern.test(origin)
    || renderOriginPattern.test(origin)
  );
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", AuthRoute);


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

console.log("MONGO_URL =", process.env.MONGO_URL);

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Zerodha Backend is running successfully 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});