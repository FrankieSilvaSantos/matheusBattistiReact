import './OutraLista.css'

function OutraLista() {


 
    const meusItens = ['React','Vue','Angular','Laravel','Flutter']
        


    
  

    return(

        <>

        <h1>Trabalhando com Arrays</h1>
        <h3 style={{color:"salmon",borderBottom:"2px solid red"}}>Lista de Coisas Random</h3>
       
          
        
        
    

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