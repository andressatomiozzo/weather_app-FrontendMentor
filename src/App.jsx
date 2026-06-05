import SystemProvider from "./createContext/SystemProvider"
import Header from "./Pages/Header"

const App = () => {
  return (
    <div>
      <SystemProvider>
        <Header/>
      </SystemProvider>
    </div>
  )
}

export default App
