import { useState } from "react"

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
            <h1>Meu cadastro</h1>
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
            </form>
        </>
    )
}

export default Form;