
import Link from 'next/link'
import Carousel3 from '../Carousel3/Carousel3'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CarouselThumbnails.css'
import CarouselSaveBtn from '../CarouselSaveBtn/CarouselSaveBtn'

const slideItems = [
    {
        id: 2,
        name: "Người Kiến Và Chiến Binh Ong: Thế Giới Lượng Tử",
        original_name: 'Ant-Man and the Wasp: Quantumania',
        slug: "nguoi-kien-va-chien-binh-ong-the-gioi-luong-tu",
        poster_url: '/thumbnails/carousel1.webp',
        thumb_url: 'https://img.ophim9.cc/uploads/movies/nguoi-kien-va-chien-binh-ong-the-gioi-luong-tu-thumb.jpg',
        lazy: 'eager',
    },
    {
        id: 3,
        name: "Xứ Sở Các Nguyên Tố",
        original_name: 'Elemental',
        slug: "xu-so-cac-nguyen-to",
        poster_url: '/thumbnails/carousel2.webp',
        thumb_url: 'https://img.ophim9.cc/uploads/movies/xu-so-cac-nguyen-to-thumb.jpg',
        lazy: 'lazy',
    },
    {
        id: 4,
        name: "Người Nhện: Du Hành Vũ Trụ Nhện",
        original_name: 'Spider-Man: Across the Spider-Verse',
        slug: "nguoi-nhen-du-hanh-vu-tru-nhen",
        poster_url: '/thumbnails/carousel3.webp',
        thumb_url: 'https://img.ophim9.cc/uploads/movies/nguoi-nhen-du-hanh-vu-tru-nhen-thumb.jpg',
        lazy: 'lazy',
    },
    {
        id: 6,
        name: "Anh Em Super Mario",
        original_name: 'The Super Mario Bros. Movie',
        slug: "anh-em-super-mario",
        poster_url: '/thumbnails/carousel4.webp',
        thumb_url: 'https://img.ophim9.cc/uploads/movies/anh-em-super-mario-thumb.jpg',
        lazy: 'lazy',
    }

]

const CarouselThumbnails = () => {

    return (
        <>

            {/* ------ Carousel wrapper ------ */}
            <Carousel3 showArrows={false}
                showIndicators={false}
                stopOnHover={false}
                swipeable={true}
                autoPlay={true}
                dynamicHeight={false}
                infiniteLoop={true}
                thumbWidth='23%'
                transitionTime={800}
                interval={4000}
            >
                {
                    slideItems.map((item) => (
                        <div key={item.id}>

                            {/* ------ Carousel Thumbnail Image ------ */}
                            <img src={item.poster_url} alt={item.name} loading={item.lazy} className='w-full h-full object-cover' />

                            {/* ------ Carousel Legend Text ------ */}
                            <div className='carousel-texts '>
                                {/* ------ Title (Name) ------ */}
                                <h1 className='block text-center md:text-left text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold text-heading uppercase'>{item.name}</h1>

                                {/* ------ 'Play' Button & 'Add to Watch List' Button ------ */}
                                <div className='flex space-x-3 sm:space-x-4 md:space-x-6 mt-2 md:mt-3'>
                                    <Link href={`/phim/${item.slug}`}
                                        className='play-button-color text-heading
                                                text-sm min-[896px]:text-base min-[945px]:text-lg
                                                px-2 py-2 sm:px-3 md:px-4 md:py-3 flex items-center'>
                                        <svg className='mr-1 w-5 h-5 '
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                        Xem Phim
                                    </Link>

                                    <CarouselSaveBtn item={item}/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel3>
        </>


    );
};

export default CarouselThumbnails;
