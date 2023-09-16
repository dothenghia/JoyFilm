
const Movie = ({ params }) => {

    return (
        <div>
            <h1>Movie Page : {params.slug}</h1>
        </div>
    );
};

export default Movie;
