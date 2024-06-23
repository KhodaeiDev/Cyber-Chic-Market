const app = require("./app");
const mongose = require("mongoose");

function startServer() {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

async function DBConnection() {
  await mongose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Conected To MongoDB Successfully");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

function run() {
  startServer();
  DBConnection();
}

run();
