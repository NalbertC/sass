import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/App.sass";

function App() {
  return (
    <div id="portifolio">
      <h1>Nalberth Castro</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
