const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const chalk = require("chalk");
const port = process.env.PORT || 8080;
const app = express();
const KEY = require(__dirname + "/config/keys.js");
const { getClients, addClient } = require("./clients.controller");
const { loginUser } = require("./users.controller");
const auth = require("./middleware/auth");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", async (req, res) => {
  try {
    await addClient(
      req.body.requestDate,
      req.body.fullName,
      req.body.phone,
      req.body.complaint
    );
    res.send({
      error: null,
      created: true,
    });
  } catch (e) {
    res.send({
      error:
        "Your request was not sent! Please fill every field or try again later",
      created: false,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.cookie("token", token, { httpOnly: true });

    res.redirect("/clients");
  } catch (e) {
    res.send({
      error: e.message,
    });
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true });

  res.redirect("/");
});

app.use(auth);

app.get("/clients", async (req, res) => {
  res.send({ clients: await getClients(), userEmail: req.user.email });
});

mongoose
  .connect(KEY)
  .then(() =>
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}...`));
    })
  )
  .catch((error) => console.log(chalk.bgRed(error)));
