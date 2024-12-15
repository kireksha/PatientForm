const chalk = require("chalk");
const Client = require("./model/Client");

async function getClients() {
  const clients = await Client.find();
  return clients;
}

async function addClient(requestDate, fullName, phone, complaint) {
  await Client.create({
    requestDate,
    fullName,
    phone,
    complaint,
  });
  console.log(chalk.bgGreen("Client was added"));
}

module.exports = {
  getClients,
  addClient,
};
