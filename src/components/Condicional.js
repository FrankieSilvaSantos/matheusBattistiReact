import { useState } from "react";
import './Condicional.css'


function Condicional() {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [userEmail,setUserEmail] = useState()
    const [userPassword,setUserPassword] = useState()

    

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        setUserPassword(password)
        

    }

    function limparEmail() {
        setUserEmail('')
    }

    function limparSenha() {
        setUserPassword('')
    }

    return(

        <div>
        <h1>Trabalhando com condicional</h1>

        <h2>Cadastre o seu Email</h2>

        <form onSubmit={enviarEmail}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label p">Email</label>
    <input type="email" pattern=".+@gmail\.com" className="form-control" id="email" 
    aria-describedby="emailHelp" placeholder="Digite seu email" required onChange={((e) => {
        (setEmail(e.target.value))
    })}/>
    <div id="emailHelp" className="form-text">Não compartilharemos seu email com ninguém</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label p">Senha</label>
    <input type="password" pattern=".{8,16}" required className="form-control" id="password" 
    placeholder="digite sua senha" onChange={((e) => {
    setPassword(e.target.value)})}/>
  </div>
  
  <button type="submit" className="btn btn-secondary buttonCondicional">Cadastrar</button>

  <br></br>

  
  {userEmail && 
    <div>
        <p style={{backgroundColor: "gray", padding: "10px", borderRadius: "3px",color: "white"}}>O email do usuario é: <span style={{color: "green",fontWeight: "bold"}}> {userEmail}</span></p>
        <button onClick={limparEmail}  className="btn btn-secondary buttonCondicional">Limpar</button>
    </div>
  }
    <br></br>
    {userPassword && 
        <div>

        <p style={{backgroundColor: "gray", padding: "10px", borderRadius: "3px",color: "white"}}>A senha do usuario é:<span style={{color: "red",fontWeight:"bold"}}> {'Não te interessa nao menor!'}</span></p>
        <button onClick={limparSenha}  className="btn btn-secondary buttonCondicional">Limpar</button>
    </div>

    }

    

  


  
</form>

        </div>

    )
}
    

export default Condicional;