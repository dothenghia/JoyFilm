
'use client'

import { useState, useEffect } from "react";
import getMovie from "@/functions/getMovie";

import MovieInfoSection from "@/components/MovieInfoSection/MovieInfoSection";
import MovieMediaSection from "@/components/MovieMediaSection/MovieMediaSection";

export default function Page({ params, searchParams }) {
    // ------ Get Search Parameters ------
    let tap = searchParams.tap // index
    let sv = searchParams.sv // index
    
    // ------ Fetching Data
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            let data = await getMovie(params.slug)
            setMovie(data)
        }
        fetchData()
    }, [])
    
    return (
        <div className="bg-background h-fit min-h-screen">

            {/* ------ Information Section ------ */}
            {movie && !tap && !sv && <MovieInfoSection info={movie.movie} media={movie.episodes} />}

            {/* ------ Media Section ------ */}
            {movie && tap && sv && <MovieMediaSection info={movie.movie} media={movie.episodes} epIndex={tap} svIndex={sv} />}


        </div>

    );
};

