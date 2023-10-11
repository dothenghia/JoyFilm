
import Link from "next/link";
import getHomePageMovies from "@/functions/getHomePageMovies";

import CarouselThumbnails from "@/components/CarouselThumbnails/CarouselThumbnails";
import MovieSlide from "@/components/MovieSlide/MovieSlide"

const MovieSlideSection = ({ title, type, movieData, divider, topSection }) => {
    return (
        <div className={`section-container ${topSection && 'mt-3 md:-mt-6 lg:-mt-8'}`}>
            <Link aria-label={title} href={`/${type}/1`} className="section-title-link">{title}</Link>
            <MovieSlide movies={movieData} />
            {
                divider && <div className="section-divider"></div>
            }
        </div>
    )
}

export const metadata = {
    title: 'Trang chủ | JoyFilm',
}

export default async function Page() {

    // ------ Fetching Data ------
    const data = await getHomePageMovies()

    return (
        <div className="bg-background pb-10">

            {/* ------ Carousel of 4 Top Movies ------ */}
            <CarouselThumbnails />

            <div>
                <div>
                    {/* ------ NEW Movies Section ------ */}
                    <MovieSlideSection title='Phim mới cập nhật' type='phim-moi' movieData={data.data.newMovies} divider={true} topSection={true} />

                    {/* ------ THEATER Movies Section ------ */}
                    <MovieSlideSection title='Phim chiếu rạp' type='chieu-rap' movieData={data.data.theaterMovies} divider={true} topSection={false} />

                    {/* ------ SINGLE Movies Section ------ */}
                    <MovieSlideSection title='Phim lẻ' type='phim-le' movieData={data.data.singleMovies} divider={true} topSection={false} />

                    {/* ------ SERIES Movies Section ------ */}
                    <MovieSlideSection title='Phim bộ' type='phim-bo' movieData={data.data.seriesMovies} divider={true} topSection={false} />

                    {/* ------ CARTOON Movies Section ------ */}
                    <MovieSlideSection title='Hoạt hình' type='hoat-hinh' movieData={data.data.cartoonMovies} divider={false} topSection={false} />
                </div>

                <div>
                    
                </div>
            </div>

        </div>
    );
};

