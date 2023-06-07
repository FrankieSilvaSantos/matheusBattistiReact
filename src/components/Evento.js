import Button from "./Button";
import './Evento.css';

function Evento() {

    function meuEvento() {

        console.log(`Ativando primeiro evento`)
 }

 function segundoEvento() {

    console.log('Ativando segundo evento')
 }

    return (
        <div>
        
        <p>Clique para disparar um evento</p>
        
        <Button event={meuEvento} text="primeiro Evento" />
        <Button event={segundoEvento} text="Segundo Evento"></Button>
       
        

        
        </div>
        
    )
}

export default Evento;