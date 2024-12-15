import axios from "axios";
import { transformPatient } from "../transformers";

export const getPatients = () => {
  return axios.get("http://localhost:8080").then((data) => {
    const patients = data.data;
    return patients && patients.map(transformPatient);
  });
};
