import { useEffect, useState } from "react"

function Api() {

   
        const  [values,setValues] = useState([])
        const [valuesTheOne,setValuesTheOne] = useState([])

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

        <h1>Getting API</h1>
        <form>
        
 <ul className="list-group">
 {values.map((values,index) => {
     return <li className="list-group-item" key={index}>User ID:{values.userId}  ID:{values.id} <br></br>
         Titulo: {values.title} <br></br> completed: {values.completed.toString()} </li>


 })}

</ul>

        
       
       </form>
        </>

    )


}

export default Api;