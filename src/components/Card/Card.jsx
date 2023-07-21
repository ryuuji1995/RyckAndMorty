import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.container} >
         <button onClick={props.onClose} className={style.closeButton}>X</button>
         <img  src={props.image} alt="" /> 
         <h2>name:{props.name}</h2>
         <h2>species:{props.species}</h2>
         <h2>gender:{props.gender}</h2>
         
      </div>
   );
}
