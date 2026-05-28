
    const Searchbar= ({ busqueda, setBusqueda, manejarBusqueda }) => {
   return( <form onSubmit={manejarBusqueda} style={{ margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Buscar película..."
            value={busqueda} 
            onChange={(e) => setBusqueda(e.target.value)} 
          />
          <button className= "search-btn" type="submit">Buscar</button>
        </form>
)
          }


    export default Searchbar;
