const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  requestDate: {
    type: String || Object,
    // required: true,
  },
  fullName: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  complaint: {
    type: String,
    // required: true,
  },
});

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
