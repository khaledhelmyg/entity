const express = require("express");
const cors = require("cors");

const apiRoutes = require("../src/routes");
const { connectToMongoDb, environmentVariables } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "working fine" });
});

// use routes
app.use(apiRoutes);

app.listen(environmentVariables.PORT || 8000, (err) => {
  if (err) {
    console.error(err);
  }
  connectToMongoDb()
    .then(() => {
      console.info("connected to mongodb atlas");
      console.info(
        `Server running on ${environmentVariables.APP_HOST}:${environmentVariables.PORT}`
      );
    })
    .catch((_error) => {
      console.log(_error);
    });
});
