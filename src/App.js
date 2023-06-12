
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
import Api from "./components/Api";
import Condicional from "./components/Condicional";
import OutraLista from "./components/OutraLista";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import React from "react";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import Footer from "./components/layouts/Footer";


function App() {
  // const name = "Frankie Yoogan";
  // const url = "https://via.placeholder.com/150";

  // function soma(a, b) {
  //   return a + b;
  // }

  // const newName = name.toLocaleUpperCase();

  


  return (
    
    <Router>
      <Navbar></Navbar>

    <Routes>
      <Route path="/" element={<Home/>}> </Route>

      <Route path="/empresa" element={<Empresa></Empresa>}></Route>
      
      <Route path="/contato" element={<Contato></Contato>}></Route>

      <Route path="/api" element={<Api></Api>}></Route>

      <Route path="/seunome" element={<SeuNome></SeuNome>}></Route>

      <Route path="/form" element={<Form></Form>}></Route>

      <Route path="/condicional" element={<Condicional></Condicional>}></Route>

      <Route path="/outralista" element={<OutraLista></OutraLista>}></Route>

      

    </Routes>

    <Footer></Footer>
    </Router>





      



   
  );
}

export default App;
