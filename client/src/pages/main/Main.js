import { addClient } from "../../bff/api";
import { Input, Button } from "../../components";
import { getDate } from "./utils/getDate";

export const Main = () => {
  const getInputValue = (attribute) => {
    return document.querySelector(`.client-form[data-client=${attribute}]`)
      .value;
  };
  const onBtnClick = async (event) => {
    event.preventDefault();
    const requestDate = getDate();
    const fullName = getInputValue("full-name");
    const phone = getInputValue("phone");
    const complaint = getInputValue("complaint");
    await addClient(requestDate, fullName, phone, complaint);
    console.log("I have posted data to DB");
  };
  return (
    <>
      <h1>Запись к врачу</h1>
      <form>
        <Input
          labelText="ФИО"
          placeholder="Как вас зовут?"
          inputName="full-name"
        />
        <Input
          labelText="Номер телефона"
          placeholder="+7 (999) 999-99-99"
          inputName="phone"
          inputType="tel"
        />
        <Input
          isTextarea={true}
          labelText="Опишите вашу проблему"
          placeholder="Что болит?"
          inputName="complaint"
        />
        <Button btnType="submit" onClick={onBtnClick}>
          Отправить
        </Button>
      </form>
    </>
  );
};
