import Button from "./Button";
import './Evento.css';

function Evento({numero}) {

    function meuEvento() {

        console.log(`Opa minhe consagrade numero: ${numero}`)
 }

    return (
        <div>
        
        <p>Clique para disparar um evento</p>
        
        <Button event={meuEvento} text="primeiro Evento" />
        <button onClick={meuEvento}>Ativar</button>
       
        

        
        </div>
        
    )
}

export default Evento;