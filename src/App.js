import "./App.css";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  const nome = "Plinio";

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.palceholder.com/150";

  return (
    <div className="App">
     <h1>Testando Eventos</h1>
     <Evento/>
     <Form />
    </div>
  );
}

export default App;
