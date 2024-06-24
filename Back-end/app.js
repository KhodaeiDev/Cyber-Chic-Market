const express = require("express");
const cookieParser = require("cookie-parser");
const { setHeaders } = require("./middleware/setHeaders");
require("dotenv").config();
const authRouter = require("./modules/auth/auth.routes");
const categoryRouter = require("./modules/category/category.routes");

const app = express();

//* Body Parser
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

//*Cookie Parser
app.use(cookieParser());

//* Cors Policy (Set Headers)
app.use(setHeaders);

//* Routes
app.use("/auth", authRouter);
app.use("/category", categoryRouter);

module.exports = app;
