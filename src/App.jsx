import { Provider } from "react-redux";
import Todos from "./component/Todos";
import store from "./Store";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
