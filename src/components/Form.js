import { useState } from "react"
import './Form.css'


function Form() {


    function cadastrarUsuario(e) {
        e.preventDefault()
        let input = document.getElementById('name').value
        let password = document.getElementById('password').value
        console.log(`Usuario: ${input} Senha: ${password}`)

    }

    const [name,setName] = useState()
    const [password,setPassword] = useState()

    return (
        
        <>
       
       <form onSubmit={cadastrarUsuario}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label label">Nome</label>
    <input type="text" placeholder="digite seu nome" id="name" className="form-control input-text" pattern="[a-z A-Z]+"
                     minLength="7" maxLength="25" required  aria-describedby="emailHelp" 
                     onChange={((e) => setName(e.target.value))}/> 
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label label">Senha</label>
    <input type="password" placeholder="Digite sua senha" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
     className="form-control input-password" required  onChange={((e) => setPassword(e.target.value))}/> 
  </div>
        <div className="button">
  <button type="submit" className="btn btn-secondary button-style">Cadastrar</button>
  </div>
</form>

        

            {/* <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" placeholder="digite o seu nome" pattern="[a-zA-Z]+[ ][a-zA-Z]+"
                     minLength="7" maxLength="25" required onChange={(e) => setName(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    placeholder="digite a sua senha" required onChange={((e) => setPassword(e.target.value))}></input>
                </div>

                <input type="submit" value="cadastrar" >

                </input>
            </form> */}

            



        </>
    )
}

export default Form;