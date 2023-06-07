import './Button.css';

function Button(props) {

    return(

        <div>
            <button onClick={props.event} type="button" className="btn btn-secondary button" >{props.text}</button>
            <br></br>
            <br></br>
        </div>


    )
}


export default Button;