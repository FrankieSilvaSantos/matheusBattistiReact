import './OutraLista.css'

function OutraLista({itens}) {

  

    return(

        <>

        <h1>Trabalhando com Arrays</h1>

        <h3>Lista de Coisas Random</h3>

        
             <ul  className="list-group lista-style">
             {itens.length > 0 ?(
        
        itens.map((item,index) => (

          <li key={index} className="list-group-item">{item}</li>
          
           
       
         ))) : (
            <p key={this.index}>Nao há elementos na lista</p>
          )
       
    }
</ul>
        
        </>

    )
}


export default OutraLista