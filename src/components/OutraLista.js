import './OutraLista.css'

function OutraLista() {


 
    const meusItens = ['React','Vue','Angular','Laravel','Flutter']
        


    
  

    return(

        <>
        <div style={{textAlign:"center",marginTop:"30px",position:"relative",left:"30em"}}>
        <h1 className='titulo-outraLista'>Trabalhando com Arrays</h1>
        <h3 style={{borderBottom:"2px solid pink"}} className='titulo-outraLista'>Lista de Coisas Random</h3>
        </div>
          
        
        
    

<ul  className="list-group lista-style">
                
                
                {meusItens.length > 0 ?(
           
           meusItens.map((item,index) => (
    
              
    
             <li key={index} className="list-group-item lista-item">{item}</li>
             
              
          
            ))) : (
               <p key={this.index}>Nao há elementos na lista</p>
             )
          
       }
    </ul>

        

          
           

        
             
        
        </>

    )
}


export default OutraLista