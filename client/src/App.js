import { Link, Route, Routes } from "react-router-dom";
import { Main, Login, Clients } from "./pages";

function App() {
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
