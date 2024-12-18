import { addClient } from "../../bff/api";
import { Input, Button } from "../../components";
import { getDate } from "./utils";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoading,
  selectTextPhone,
  selectTextName,
  selectTextComplaint,
} from "../../selectors";
import { useState } from "react";

export const Main = () => {
  const isLoading = useSelector(selectLoading);
  const textName = useSelector(selectTextName);
  const textPhone = useSelector(selectTextPhone);
  const textComplaint = useSelector(selectTextComplaint);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const onBtnClick = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_IS_LOADING", payload: true });
    const requestDate = getDate();
    addClient(requestDate, textName, textPhone, textComplaint).then((res) => {
      setCreated(res.data.created);
      setError(res.data.error);
      created && dispatch({ type: "RESET_FORM" });
    });
    dispatch({ type: "SET_IS_LOADING", payload: false });
  };

  return (
    <>
      {created && (
        <div className="bg-success text-white">
          Doctor will call you later. Keep calm
        </div>
      )}
      {error && <div className="bg-danger text-white">{error}</div>}
      <h1>Запись к врачу</h1>
      <form>
        <Input
          labelText="ФИО"
          placeholder="Как вас зовут?"
          inputName="full-name"
          value={textName}
          onChange={(e) =>
            dispatch({ type: "SET_TEXT_NAME", payload: e.target.value })
          }
        />
        <Input
          labelText="Номер телефона"
          placeholder="+7 (999) 999-99-99"
          inputName="phone"
          inputType="tel"
          value={textPhone}
          onChange={(e) =>
            dispatch({ type: "SET_TEXT_PHONE", payload: e.target.value })
          }
        />
        <Input
          isTextarea={true}
          labelText="Опишите вашу проблему"
          placeholder="Что болит?"
          inputName="complaint"
          value={textComplaint}
          onChange={(e) =>
            dispatch({ type: "SET_TEXT_COMPLAINT", payload: e.target.value })
          }
        />
        <Button btnType="submit" onClick={onBtnClick} disabled={isLoading}>
          Отправить
        </Button>
      </form>
    </>
  );
};
