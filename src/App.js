import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase"
import List from "./components/List"

function App() {
  const nome = "Plinio";

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.palceholder.com/150";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Leonardo" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List/>
    </div>
  );
}

export default App;
