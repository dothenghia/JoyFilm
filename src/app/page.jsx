
import getHomePageMovies from "@/functions/getHomePageMovies";

import MovieSlide from "@/components/MovieSlide/MovieSlide"
import CarouselThumbnails from "@/components/CarouselThumbnails/CarouselThumbnails";

export default async function Page() {
    const data = await getHomePageMovies()

    return (
        <div className="bg-background pb-10">
            
            <CarouselThumbnails />



            <h3>Phim mới cập nhật</h3>
            {
                data && data.data.newMovies &&
                <MovieSlide movies={data.data.newMovies} />
            }

            <h3>Phim chiếu rạp</h3>
            {
                data && data.data.theaterMovies &&
                <MovieSlide movies={data.data.theaterMovies} />
            }

            <h3>Phim lẻ</h3>
            {
                data && data.data.singleMovies &&
                <MovieSlide movies={data.data.singleMovies} />
            }

            <h3>Phim bộ</h3>
            {
                data && data.data.seriesMovies &&
                <MovieSlide movies={data.data.seriesMovies} />
            }

            <h3>Hoạt hình</h3>
            {
                data && data.data.cartoonMovies &&
                <MovieSlide movies={data.data.cartoonMovies} />
            }
        </div>
    );
};

