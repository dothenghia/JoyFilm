
import getPageMovies from "@/functions/getPageMovies";

import MovieCard from "@/components/MovieCard/MovieCard";

export default async function Page({ params }) {
    const data = await getPageMovies('cartoon', params.page)
    console.log(data)
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

