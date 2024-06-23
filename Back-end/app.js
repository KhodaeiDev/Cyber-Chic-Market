const express = require("express");
const cookieParser = require("cookie-parser");
const { setHeaders } = require("./middleware/setHeaders");
require("dotenv").config();

const app = express();

//* Body Parser
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

//*Cookie Parser
app.use(cookieParser());

//* Cors Policy (Set Headers)
app.use(setHeaders);

module.exports = app;
