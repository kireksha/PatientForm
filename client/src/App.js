import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Main, Login, Clients } from "./pages";
import { logoutUser } from "./bff/api";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "./selectors";

function App() {
  const isLogin = useSelector(selectLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = async () => {
    await logoutUser();
    dispatch({ type: "SET_IS_LOGIN", payload: false });
    navigate("/");
  };
  return (
    <div className="pt-3 mx-auto" style={{ maxWidth: "1000px" }}>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Main Page
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/clients" className="nav-link">
                  Clients
                </Link>
              </li>
              <li>{isLogin && <button onClick={onLogout}>Logout</button>}</li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
