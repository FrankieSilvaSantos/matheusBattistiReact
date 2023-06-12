

function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Ola ${algumNome}, turu bum ?-?`
    }

    return(
        <>
        <p style={{padding:"10px",backgroundColor:"gray",marginTop:"20px", color:"white",
         borderRadius: "20px", fontWeight:"bold"}}> {gerarSaudacao(nome)}</p>
        </>
    )

}

export default Saudacao;