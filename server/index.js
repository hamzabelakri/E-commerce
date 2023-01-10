const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");
const bodyParser = require('body-parser');

require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const authRouter = require("./Routes/authRouter");
const productRouter = require("./Routes/productRouter");
const userRoute = require("./Routes/userRoute");
const messageRouter=require('./Routes/messageRoute');

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))



app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

connect();

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/users", userRoute);
app.use('/message',messageRouter)