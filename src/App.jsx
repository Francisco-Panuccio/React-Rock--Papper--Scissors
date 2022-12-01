import './App.scss';
import Header from "./components/Header";
import Board from "./components/Board";
import ContextProvider from "./components/Context";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Header/>
        <Board/>
      </ContextProvider>
    </>
  )
}

export default App;
