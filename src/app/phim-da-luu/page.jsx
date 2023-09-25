
'use client'

import { useContext } from "react";
import { saveContext } from "@/contexts/saveContext";
import useTitle from "@/hooks/useTitle";
import MovieCard from "@/components/MovieCard/MovieCard";

export default function Page() {
    const context = useContext(saveContext)

    useTitle(`Phim đã lưu (${context.saveList.length}) - JoyFilm`)


    return (
        <div className="page-container-0topside">
            <div className="section-container">
                <h1 className="section-title-no-up">Phim đã lưu ({context.saveList.length})</h1>

                {/* ------ Movies Grid ------ */}
                <div className="mt-6 movies-grid">
                    {context.saveList.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>

            </div>
        </div >
    );
};

