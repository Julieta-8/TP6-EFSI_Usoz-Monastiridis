
    const Searchbar= ({ busqueda, setBusqueda, manejarBusqueda }) => {
    <form onSubmit={manejarBusqueda} style={{ margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Buscar película..."
            value={busqueda} 
            onChange={(e) => setBusqueda(e.target.value)} 
          />
          <button type="submit">Buscar</button>
        </form>
    }

    export default Searchbar;