const MovieCard = ({ movie, Set, fondoClaro }) => {

  return (
    <div className={fondoClaro ? "modo-claro" : "modo-oscuro"}>
     
      <div  className={fondoClaro ? "movie-card" : "movie-card-oscuro"}>
  <img className="movie-card-img" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=Sin+Poster"} alt={movie.Title} />
  <div className="movie-card-info">
    <h3>{movie.Title}</h3>
    <p><strong>Año:</strong> {movie.Year}</p>
    <p><strong>Tipo:</strong> {movie.Type}</p>
    <button className="movie-card-btn" onClick={() => Set(movie.imdbID)}>Conocé más</button>
  </div>
</div>
    </div>
  );
};



export default MovieCard;