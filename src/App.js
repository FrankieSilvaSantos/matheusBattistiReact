import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Item from "./components/Item";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  const name = "Frankie Yoogan";
  const url = "https://via.placeholder.com/150";

  function soma(a, b) {
    return a + b;
  }

  const newName = name.toLocaleUpperCase();
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      
      <Evento numero="1"></Evento>
      <Evento numero="2"></Evento>
      <Form></Form>

    </div>
  );
}

export default App;
