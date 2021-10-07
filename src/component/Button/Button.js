import './Button.css'


const Button=(props)=>{
  
    return(
        <button className={props.list}>{props.name}</button>
    )
}

export default Button;