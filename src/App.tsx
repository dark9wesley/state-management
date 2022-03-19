import StoreProvider from "./store"
import ControlPanel from "./pages/ControlPanel"

function App() {

  return (
    <StoreProvider>
      <ControlPanel />
    </StoreProvider>
  )
}

export default App
