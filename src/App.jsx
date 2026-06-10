import SearchProvider from "./createContext/SearchProvider";
import SystemProvider from "./createContext/SystemProvider";
import Wrapper from "./Wrapper";
import "./App.css"


const App = () => {

  return (
    <div>
      <SystemProvider>
        <SearchProvider>
          <Wrapper/>
        </SearchProvider>
      </SystemProvider>
    </div>
  );
};

export default App;
