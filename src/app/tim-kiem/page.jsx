'use client'

import searchMovies from "@/functions/searchMovies";

import MovieCard from "@/components/MovieCard/MovieCard";

export default async function Page({ searchParams }) {
    const data = await searchMovies(searchParams.name)
    console.log(data)
    console.log(searchParams)

    return (
        <div className="page-container-0topside">
            <h1>Search Page</h1>

            {data.data.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

