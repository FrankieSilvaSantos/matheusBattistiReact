import { useEffect, useState } from "react"
import './Api.css'

function Api() {

   
        const  [values,setValues] = useState([])
       

    function apiCall() {
         fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setValues(data)

           
        })

    
        }
        useEffect(() => {
            apiCall()
            
        },[])

  
       

    return(

        <>

        <h1 style={{textAlign:"center",color:"white",marginTop:"20px"}}>Getting API</h1>
        <form className="container-lista">
        
 <ul className="list-group list-container">
 {values.map((values,index) => {
     return <li className="list-group-item li-lista" key={index}>User ID:{values.userId}  ID:{values.id} <br></br>
         Titulo: {values.title} <br></br> completed: {values.completed.toString()} </li>


 })}

</ul>

        
       
       </form>
        </>

    )


}

export default Api;