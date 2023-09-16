
import searchMovies from "@/functions/searchMovies";

import MovieCard from "@/components/MovieCard/MovieCard";

export default async function Page({ searchParams }) {
    const data = await searchMovies(searchParams.name)
    console.log(data)
    console.log(searchParams)

    return (
        <div>
            <h1>Search Page</h1>

            {data.data.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

