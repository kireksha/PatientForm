import { ClientDetails } from "./components/client-details";
import { useLayoutEffect, useState } from "react";
import { getPatients } from "../../bff/api";
import { useNavigate } from "react-router-dom";
export const Clients = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const apiCall = async () => {
      const patientsFromServer = await getPatients();
      if (patientsFromServer === "error") {
        navigate("/login");
        return;
      }
      setPatients(patientsFromServer);
    };
    apiCall();
  }, [navigate]);
  return (
    <>
      <h1>Заявки с формы</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Дата отправки</th>
            <th scope="col">ФИО</th>
            <th scope="col">Телефон</th>
            <th scope="col">Проблема</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(({ id, date, name, phone, complaint }) => {
            return (
              <ClientDetails
                key={id}
                date={date}
                name={name}
                phone={phone}
                complaint={complaint}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};
