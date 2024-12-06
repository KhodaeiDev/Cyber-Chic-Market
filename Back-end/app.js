const express = require("express");
const cookieParser = require("cookie-parser");
const { setHeaders } = require("./middleware/setHeaders");
require("dotenv").config();
const path = require("path");
const authRouter = require("./modules/auth/auth.routes");
const categoryRouter = require("./modules/category/category.routes");
const locationsRouter = require("./modules/locations/locations.routes.js");
const userRouter = require("./modules/user/user.routes");
const productRouter = require("./modules/product/product.routes");
const commentsRouter = require("./modules/comments/comment.routes.js");
const cartRouter = require("./modules/cart/cart.routes.js");
const orderRouter = require("./modules/order/order.routes.js");
const profileRouter = require("./modules/profile/profile.routes");
const swaggerRoutes = require("./modules/api-doc/swagger.routes");
const { errorHandler } = require("./middleware/errorHandller.js");

const app = express();

//* Body Parser
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

//*Cookie Parser
app.use(cookieParser());

//* Cors Policy (Set Headers)
app.use(setHeaders);

//* Static folder
app.use("/images", express.static(path.join(__dirname, "public/images")));

//* Routes
app.use("/auth", authRouter);
app.use("/locations", locationsRouter);
app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/products", productRouter);
app.use("/comments", commentsRouter);
app.use("/cart", cartRouter);
app.use("/orders", orderRouter);
app.use("/profile", profileRouter);
app.use("/apis", swaggerRoutes);

app.use(errorHandler);

module.exports = app;
