import { useEffect, useState } from "react";

const MovieDetail = ({ peliculaSeleccionada, Set }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  
     if (!peliculaSeleccionada) return;

  fetch(`http://www.omdbapi.com/?i=${peliculaSeleccionada}&apikey=fc3c60ca`)
    .then((res) => res.json())
    .then((data) => setMovie(data));
}, [peliculaSeleccionada]);

  if (!movie) {
    return (
      <div>
        <p>Cargando detalles de la película...</p>
        <button onClick={() => Set(null)}>Cancelar y volver</button>
      </div>
    );
  }
   if (!movie.Poster) {
    return (
      <div>
        <img className="detail-poster"  src="nohayposter.jpg"/>
      </div>
    );
  }


  return (
    <div>
      <div>
       <div className="detail-container">
  <button className="back-btn" onClick={() => Set(null)}>⬅ Volver al listado</button>
  <div className="detail-content">
    <img className="detail-poster" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=Sin+Poster"} alt={movie.Title} />
    <div className="detail-info">
      <h2>{movie.Title}</h2>
      <p><strong>Año:</strong> {movie.Year}</p>
      <p><strong>Puntaje:</strong> {movie.Rated}</p>
      <p><strong>Genero:</strong> {movie.Genre}</p>
       <p><strong>Idioma:</strong> {movie.Language}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actores:</strong> {movie.Actors}</p>
<p><strong>Pais:</strong> {movie.Country}</p>
       <div>
  <strong>Ratings:</strong>

  {movie.Ratings?.map((rating, index) => (
    <p key={index}>
      {rating.Source}: {rating.Value}
    </p>
  ))}
</div>
      <p><strong>Duración:</strong> {movie.Runtime}</p>
      <p><strong>Sinopsis:</strong> {movie.Plot}</p>
  
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default MovieDetail;



