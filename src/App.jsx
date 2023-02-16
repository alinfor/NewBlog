import { Provider } from "react-redux"
import Todos from "./todos"
import store from "./Store"


function App() {
  return (
    <Provider store={store}>
    <Todos/>
    </Provider>
  )
}

export default App
