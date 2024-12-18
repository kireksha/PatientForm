import axios from "axios";

export const loginUser = ({ email, password }) => {
  return axios.post("http://localhost:8080/login", { email, password });
};
