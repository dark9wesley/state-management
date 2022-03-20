import store from "./store"
import { Provider } from 'react-redux'
import ControlPanel from "./pages/ControlPanel"

function App() {

  return (
    <Provider store={store}>
      <ControlPanel />
    </Provider>
  )
}

export default App
