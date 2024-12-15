const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const port = process.env.PORT || 8080;
const app = express();
const KEY = require(__dirname + "/config/keys.js");
const { getClients, addClient } = require("./clients.controller");

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  const clients = await getClients();
  res.send(clients);
});

app.post("/", async (req, res) => {
  console.log(chalk.bgBlue(req));
  try {
    await addClient(
      req.body.requestDate,
      req.body.fullName,
      req.body.phone,
      req.body.complaint
    );
    const clients = await getClients();
    console.log(clients);
  } catch (e) {
    console.error(chalk.bgRed("Creation error: ", e));
    res.send(
      "Error occured while creating your request. Please try again later. Error code: ",
      e
    );
  }
});

mongoose
  .connect(KEY)
  .then(() =>
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}...`));
    })
  )
  .catch((error) => console.log(error));
