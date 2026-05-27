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
const Listado = ({setFondo, fondoClaro }) => {


  const [movies, setMovies] = useState([] );
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
 const [busqueda, setBusqueda] = useState('');
const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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




return (
  < >
  <div className={fondoClaro ? "modo-claro" : "modo-oscuro"}>
    {loading ? (
      <Loading />
    ) : error ? (
      <ErrorM mensaje={error} />
    ) : (
      <>
     
   <button className="FondoBoton" onClick={() => setFondo(true)}>
            Fondo Claro
          </button >

          <button className="FondoBoton" onClick={() => setFondo(false)}>
            Fondo Oscuro
          </button>
             {peliculaSeleccionada === null && (
          <Searchbar busqueda={busqueda} setBusqueda={setBusqueda} manejarBusqueda={manejarBusqueda} />
        )}
        {peliculaSeleccionada === null ? (
          
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
              fondoClaro ={fondoClaro}
                key={movie.imdbID}
                Set={setPeliculaSeleccionada}
                movie={movie}
              />
            ))}
          </div>
        ) : (
          <MovieDetail
          fondoClaro ={fondoClaro}
            peliculaSeleccionada={peliculaSeleccionada}
            Set={setPeliculaSeleccionada}
          />
        )}
      </>
    )}
    </div>
  </>
);
};

export default Listado;