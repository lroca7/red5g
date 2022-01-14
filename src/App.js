import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Supplier from "./components/Supplier/Supplier";
import NewSupplier from "./components/Supplier/NewSupplier";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Supplier />}></Route>
                <Route path="/new/supplier" element={<NewSupplier />}></Route>
            </Routes>
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>
    );
}

export default App;
