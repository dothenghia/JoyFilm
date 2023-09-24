'use client'

import { useContext } from "react";
import { saveContext } from "@/contexts/saveContext";


const CarouselSaveBtn = ({ item }) => {
    const context = useContext(saveContext)

    const addToSaveList = (movie) => {
        context.toggleSaveMovie(movie)
    }

    return (
        <button
            aria-label="Lưu phim"
            onClick={() => { addToSaveList(item) }}
            className='add-button-color text-heading
                        text-sm min-[896px]:text-base min-[945px]:text-lg
                        px-2 py-2 sm:px-3 md:px-4 md:py-3 flex items-center'>
            {
                (context.isSaved(item) ? (
                    <>
                        <div className='h-full flex items-center'>
                            <img src='/bookmark-fill.svg' className="md:mt-[2px] lg:mt-1 mr-1 w-[18px] h-[18px]" alt="Bookmark" />
                        </div>
                        Đã lưu
                    </>
                ) : (
                    <>
                        <div className='h-full flex items-center'>
                            <img src='/bookmark.svg' className="md:mt-[2px] lg:mt-1 mr-1 w-[18px] h-[18px]" alt="Bookmark" />
                        </div>
                        Lưu vào Danh sách
                    </>
                ))
            }

        </button>
    );
};

export default CarouselSaveBtn;
