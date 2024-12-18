import axios from "axios";
import { transformPatient } from "../transformers";

export const getPatients = () => {
  return axios.get("http://localhost:8080/clients").then((data) => {
    if (!Array.isArray(data.data)) {
      return "error";
    }
    const patients = data.data;
    return patients && patients.map(transformPatient);
  });
};
