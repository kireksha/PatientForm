import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../bff/api";
import { Input, Button } from "../../components";
import {
  selectLoading,
  selectTextEmail,
  selectTextPassword,
} from "../../selectors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const textEmail = useSelector(selectTextEmail);
  const textPassword = useSelector(selectTextPassword);
  const isLoading = useSelector(selectLoading);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const onBtnClick = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_IS_LOADING", payload: true });
    loginUser({ email: textEmail, password: textPassword }).then((res) => {
      if (res.data.error) {
        setLoginError(res.data.error);
      } else {
        setLoginError(null);
        navigate("/clients");
      }
    });
    dispatch({ type: "SET_IS_LOADING", payload: false });
  };

  return (
    <>
      {loginError && <div className="bg-danger text-white">{loginError}</div>}
      <h1>Login</h1>
      <form>
        <Input
          labelText="Электронная почта"
          placeholder="test@mail.ru"
          inputName="email"
          inputType="email"
          value={textEmail}
          onChange={(e) =>
            dispatch({ type: "SET_TEXT_EMAIL", payload: e.target.value })
          }
        />
        <Input
          labelText="Пароль"
          inputName="password"
          inputType="password"
          value={textPassword}
          onChange={(e) =>
            dispatch({ type: "SET_TEXT_PASSWORD", payload: e.target.value })
          }
        />
        <Button btnType="submit" onClick={onBtnClick} disabled={isLoading}>
          Войти
        </Button>
      </form>
    </>
  );
};
