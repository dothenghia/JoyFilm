
import MovieCard from "../MovieCard/MovieCard";

const MovieSlide = ({ movies }) => {

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard key={movie._id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieSlide;