import axios from "axios";

export const logoutUser = () => {
  return axios.get("http://localhost:8080/logout", { withCredentials: true });
};
