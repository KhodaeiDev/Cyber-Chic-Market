const { default: mongoose } = require("mongoose");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 3000;
const isProductionMode = process.env.NODE_ENV;

function startServer() {
  app.listen(port, () => {
    console.log(`Server Running on port ${port} in ${isProductionMode} mode`);
  });
}

async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully", mongoose.connection.host);
  } catch (err) {
    console.error(`Error in Db Connection: ${err}`);
    process.exit(1);
  }
}
async function run() {
  startServer();
  await dbConnection();
}
run();
