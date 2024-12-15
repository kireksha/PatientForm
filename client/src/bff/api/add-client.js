import axios from "axios";

export const addClient = (requestDate, fullName, phone, complaint) => {
  return axios.post(
    "http://localhost:8080",
    { requestDate, fullName, phone, complaint },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};
