import { Input, Button } from "../../components";

export const Login = () => {
  const onBtnClick = (event) => {
    event.preventDefault();
    console.log("I will let you in, admin");
  };
  return (
    <>
      <h1>Login</h1>
      <form>
        <Input
          labelText="Электронная почта"
          placeholder="test@mail.ru"
          inputName="email"
          inputType="email"
        />
        <Input labelText="Пароль" inputName="password" inputType="password" />
        <Button btnType="submit" onClick={onBtnClick}>
          Войти
        </Button>
      </form>
    </>
  );
};
