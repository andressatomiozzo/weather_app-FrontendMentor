import SearchProvider from "./contexts/SearchProvider";
import SystemProvider from "./contexts/SystemProvider";
import Wrapper from "./Wrapper";
import "./App.css";

const App = () => {
  return (
    <>
      <SystemProvider>
        <SearchProvider>
          <Wrapper />
        </SearchProvider>
      </SystemProvider>
    </>
  );
};

export default App;
