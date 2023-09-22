'use client'

import getMovie from "@/functions/getMovie";

import MovieInfoSection from "@/components/MovieInfoSection/MovieInfoSection";
import MovieMediaSection from "@/components/MovieMediaSection/MovieMediaSection";

export default async function Page({ params, searchParams }) {
    const data = await getMovie(params.slug)
    let tap = searchParams.tap // index
    let sv = searchParams.sv // index

    console.log(tap, sv)

    return (
        <div className="bg-background h-fit min-h-screen">

            {/* ------ Information Section ------ */}
            {!tap && !sv && <MovieInfoSection info={data.movie} media={data.episodes} />}

            {/* ------ Media Section ------ */}
            {tap && sv && <MovieMediaSection info={data.movie} media={data.episodes} epIndex={tap} svIndex={sv} />}


        </div>

    );
};

