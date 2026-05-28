
import noPoster from "../assets/noPoster.webp";
const MovieCard = ({ movie, Set, fondoClaro }) => {

  return (
    <div className={fondoClaro ? "modo-claro" : "modo-oscuro"}>
     
      <div  className={fondoClaro ? "movie-card" : "movie-card-oscuro"}>
    <img
  className="detail-poster"
  src={
    movie.Poster !== "N/A"
      ? movie.Poster
      : noPoster
  }
  alt={movie.Title}
/>  <div className="movie-card-info">
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