function Evento({numero}) {

    function meuEvento() {

        console.log(`Opa minhe consagrade numero: ${numero}`)
 }

    return (
        <>
        
        <p>Clique para disparar um evento</p>
        <button onClick={meuEvento}>Ativar</button>
        
        </>
    )
}

export default Evento;