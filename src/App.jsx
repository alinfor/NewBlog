import { Provider } from "react-redux";
import Todos from "./component/Todos";
import store from "./Store";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}



export default App;
