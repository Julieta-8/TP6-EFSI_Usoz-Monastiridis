import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MovieCard from "../MovieCard";
import MovieDetail from "../MovieDetail";
import Searchbar from "../Searchbar";
import "../Searchbar/Searchbar.css";
import "../MovieCard/MovieCard.css";
import "../MovieDetail/MovieDetail.css";
import "./Listado.css";
import Loading from "../Loading";
import "../Loading/Loading.css";
import ErrorM from "../ErrorM";
import "../ErrorM/ErrorM.css";
const Listado = ({ }) => {


  const [movies, setMovies] = useState([] );
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
 const [busqueda, setBusqueda] = useState('');
const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
   const [FondoClaro, SetFondo] = useState(true);
  useEffect(() => {

    fetch(`http://www.omdbapi.com/?s=barbie&apikey=fc3c60ca`)
      .then((res) => res.json())
    .then((data) => {
        if (data.Search) setMovies(data.Search);
      });
       setLoading(false);
  }, []);

 const manejarBusqueda = (e) => {
    e.preventDefault(); 
    
    if (busqueda.trim() === '') return; 

  
    fetch(`http://www.omdbapi.com/?s=${busqueda}&apikey=fc3c60ca`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          alert("No se encontraron películas con ese nombre.");
        }
      });
  };



    CambioFondoOscuro(() => {

  
       SetFondo(false);
  }, []);
  
    CambioFondoClaro(() => {

  
       SetFondo(true);
  }, []);
/*if(!FondoClaro){
  background-color: rgb(61, 61, 61);
}*/
return (
  < /*if(!FondoClaro){style={{background-color: rgb(61, 61, 61);}}}*/>
    {loading ? (
      <Loading />
    ) : error ? (
      <ErrorM mensaje={error} />
    ) : (
      <>
        {peliculaSeleccionada === null && (
          <Searchbar busqueda={busqueda} setBusqueda={setBusqueda} manejarBusqueda={manejarBusqueda} />
        )}
        <button  onClick={() => CambioFondoClaro()}>Cambiar a Fondo claro</ button>
        <button onClick={() => CambioFondoOscuro()}>Cambiar a Fondo oscuro</button>
        {peliculaSeleccionada === null ? (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                Set={setPeliculaSeleccionada}
                movie={movie}
              />
            ))}
          </div>
        ) : (
          <MovieDetail
            peliculaSeleccionada={peliculaSeleccionada}
            Set={setPeliculaSeleccionada}
          />
        )}
      </>
    )}
  </>
);
};

export default Listado;