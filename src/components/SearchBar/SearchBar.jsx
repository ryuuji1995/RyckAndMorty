import style from "./SearchBar.module.css"

export default function SearchBar(props) {               //con destructuring props seria (onSearch)
   return (
      <div className={style.bar}>
         <input type='search' className={style.searchInput} />
         <button className={style.searchButton}
      onClick={(id) => {
            props.onSearch(id)
            }}
          >Agregar</button>             
      </div>
   );
}
