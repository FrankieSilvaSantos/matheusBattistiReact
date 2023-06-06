import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Item from "./components/Item";

function App() {
  const name = "Frankie Yoogan";
  const url = "https://via.placeholder.com/150";

  function soma(a, b) {
    return a + b;
  }

  const newName = name.toLocaleUpperCase();
  return (
    <div className="App">
      <h1>Testando Css</h1>
      <Frase></Frase>
      <p>Olá meu nome é: {newName}</p>
      <p>Soma: {soma(5, 5)}</p>
      <img src={url} alt="Minha imagem"></img>
      <HelloWorld></HelloWorld>
      <SayMyName nome="Joshua"></SayMyName>
      <SayMyName nome="Ivy"></SayMyName>
      <Pessoa
        nome="Frankie"
        idade="26"
        profissao="Programadora"
        foto="https://placeholder.com/150"
      ></Pessoa>
      <List></List>
    </div>
  );
}

export default App;
