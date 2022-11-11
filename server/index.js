const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const authRouter = require("./Routes/authRouter")
const productRouter = require("./Routes/productRouter");
const userRoute= require('./Routes/userRoute')


app.use(cors());
app.use(express.json());
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


app.use("/auth", authRouter)
app.use("/product", productRouter);
app.use('/users', userRoute)
