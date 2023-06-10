import './SeuNome.css'
import { useState } from 'react';
import Saudacao from './Saudacao';

function SeuNome() {

    const [name,setName] = useState()
    const [userName,setUserName] = useState()

    function setarNome(e) {
        e.preventDefault()
        setName(name)
        setUserName(name)
    }

    function clear(e) {
        e = setUserName('')   
    }

    return(

        <>
        <h1>State Lift</h1>
            <form>
  <div className="mb-3 container">
    <label htmlFor="name" className="form-label label-name">Nome</label>
    <input type="text" className="form-control input-name" id="name" 
    aria-describedby="emailHelp" onChange={((e) => (setName(e.target.value)))} />
    <div className='button-container'>
<button type='submit' onClick={setarNome} className="btn btn-secondary button-setar">Setar Nome</button>
<button type='submit' onClick={clear} className="btn btn-secondary button-setar">Limpar</button>
        {userName && (
            <Saudacao nome={name}></Saudacao>
        )}
        </div>
  </div>
  </form>


  
  
 
        </>
    )
}

export default SeuNome;