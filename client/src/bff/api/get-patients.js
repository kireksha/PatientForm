import axios from "axios";
import { transformPatient } from "../transformers";

export const getPatients = () => {
  return axios
    .get("http://localhost:8080/clients", { withCredentials: true })
    .then((data) => {
      if (!Array.isArray(data.data.clients)) {
        return "error";
      }
      const patients = data.data.clients;
      return patients && patients.map(transformPatient);
    });
};
