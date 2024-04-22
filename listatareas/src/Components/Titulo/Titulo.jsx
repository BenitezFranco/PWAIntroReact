import style from "./Titulo.module.css";
function Titulo({texto}){
    return(
        <h1 className={style.titulo}>{texto}</h1>
    )
}
export default Titulo;