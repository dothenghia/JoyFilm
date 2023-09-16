
import getCartoonMovies from "@/functions/getCartoonMovies";

import MovieCard from "@/components/MovieCard/MovieCard";

export default async function Page({ params }) {
    const data = await getCartoonMovies(params.page)
    console.log(params)

    return (
        <div>
            <h1>Cartoon Page</h1>

            {data.data.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

