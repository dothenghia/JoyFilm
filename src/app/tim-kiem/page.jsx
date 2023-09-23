
'use client'

import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import searchMovies from "@/functions/searchMovies";
import useTitle from '@/hooks/useTitle';

import MovieCard from "@/components/MovieCard/MovieCard";

export default function Page({ searchParams }) {

    // ------ Get params and Set title ------
    let name = searchParams.name

    if (!name) {
        useTitle(`Tìm kiếm | JoyFilm`)
    } else {
        useTitle(`Tìm kiếm - "${name}" | JoyFilm`)
    }

    // ------ Data State ------
    const [searchInput, setSearchInput] = useState((name || ""))
    const searchInputDOM = useRef(null)
    const router = useRouter()
    const [movies, setMovies] = useState(null)

    // ------ Fetching Data
    useEffect(() => {
        const fetchData = async () => {
            setMovies(null)
            let data = await searchMovies(name)
            setMovies(data)
        }

        fetchData()
    }, [name])

    // ------ Event Handlers ------
    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            router.push(`/tim-kiem?name=${searchInput}`)
        }
    }

    return (
        <div className="page-container-0topside">
            <div className="section-container">
                <h1 className="section-title-no-up">Tìm kiếm : "{name}"</h1>

                {/* ------ Search input field ------ */}
                <div className="relative flex mt-4">
                    <Link
                        href={`/tim-kiem?name=${searchInput}`}
                        className="absolute inset-y-0 right-0 flex items-center px-3"
                    >
                        <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /> </svg>
                    </Link>

                    <input type="text"
                        className="block w-full p-2 pl-4 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading"
                        placeholder="Nhập tên phim..."
                        value={searchInput}
                        onChange={(e) => { setSearchInput(e.target.value) }}
                        onKeyDown={keyDownHandler}
                        required
                        autoComplete="true"
                        ref={searchInputDOM}
                    />
                </div>

                {/* ------ Movies grid ------ */}
                {
                    (!movies) ?
                        (
                            <div className="w-full mt-20 flex justify-center items-center">
                                <div className="loader"></div>
                            </div>
                        ) :

                        (movies.data.length == 0) ?
                            (
                                <div className="mt-6">
                                    <p className="text-lg text-text">Không tìm thấy phim tương ứng</p>
                                    <p className="text-text mt-2">Mẹo: Hãy tìm tên phim bằng tiếng anh hoặc có đầy đủ dấu</p>
                                </div>
                            ) : (
                                <div className="mt-6 movies-grid">
                                    {movies && movies.data.map((movie, index) => (
                                        <MovieCard key={index} movie={movie} />
                                    ))}
                                </div>
                            )
                }
            </div>

        </div >
    );
};

