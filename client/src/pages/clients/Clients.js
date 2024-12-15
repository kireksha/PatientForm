import { ClientDetails } from "./components/client-details";
import { useLayoutEffect, useState } from "react";
import { getPatients } from "../../bff/api";
export const Clients = () => {
  const [patients, setPatients] = useState([]);

  useLayoutEffect(() => {
    const apiCall = async () => {
      const patientsFromServer = await getPatients();
      setPatients(patientsFromServer);
    };
    apiCall();
  }, []);
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
