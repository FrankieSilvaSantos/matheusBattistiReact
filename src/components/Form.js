function Form() {


    function cadastrarUsuario(e) {
        e.preventDefault()
        let input = document.getElementById('inputText').value
        console.log(`Parabains se cadastrou!! ${input}`)

    }

    return(
        <>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
        <input type="text" id="inputText" placeholder="digite o seu nome" pattern="[a-zA-Z]+[ ][a-zA-Z]+" minLength="7" maxLength="25" required >
        
        </input>
        </div>

        <input type="submit" value="cadastrar" >
        
        </input>
        </form>
        </>
    )
}

export default Form;