import Link from "next/link";
import Image from "next/image";

const MovieCard = ({ movie }) => {

    return (
        <div className='w-full bg-transparent px-2 md:px-[10px]'>

            {/* ------ Movie Card container ------ */}
            <Link href={`/phim/${movie.slug}`} className="group">

                {/* ------ Thumbnail wrapper ------ */}
                <div className="overflow-hidden rounded-lg lg:rounded-xl relative">
                    <div className="relative aspect-[9/13.5] group-hover:blur-sm group-hover:brightness-50
                                scale-100 group-hover:scale-125 ease-in duration-200">
                        <div className="w-full h-full rounded-lg bg-gray-700 flex justify-center items-center">
                            <div className="skeleton"></div>
                        </div>

                        <Image
                            src={movie.thumb_url}
                            alt={movie.name}
                            fill={true}
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 896px) 25vw, (max-width: 1024px) 20vw, 17vw"
                            style={{
                                objectFit: 'cover',
                            }}
                            loading="lazy"
                            quality={40}
                        />

                    </div>

                    <svg className='absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/3 w-12 h-12 text-white opacity-0
                                group-hover:opacity-100 ease-in duration-200'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>

                {/* ------ Title wrapper ------ */}
                <div className="h-20 mt-2">
                    <h2 className="text-heading px-1 line-clamp-2 text-base font-medium mb-[6px]">
                        {movie.name}
                    </h2>
                    <p className="text-subheading px-1 line-clamp-1 text-sm">
                        {movie.origin_name}
                    </p>
                </div>

            </Link>
        </div>
    );
};

export default MovieCard;