
import getPageMovies from "@/functions/getPageMovies";

import MovieCard from "@/components/MovieCard/MovieCard";
import PageButtons from "@/components/PageButtons/PageButtons";

export async function generateMetadata({ params }) {
    return {
        title: `Phim bộ - Trang ${params.page} | JoyFilm`,
    }
}

export default async function Page({ params }) {

    // ------ Fetching Data ------
    const data = await getPageMovies('series', params.page)

    return (
        <div className="page-container-0topside">
            <div className="section-container">
                <h1 className="section-title-no-up">Phim bộ - Trang {params.page}</h1>

                {/* ------ Movies Grid ------ */}
                <div className="mt-6 movies-grid">
                    {data.data.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>

                {/* ------ Pagination Buttons ------ */}
                <div className="mt-6 flex flex-row flex-wrap justify-center">
                    <PageButtons curr={params.page} total={data.totalPages} url={'phim-bo'} />
                </div>

            </div>
        </div>
    );
};

