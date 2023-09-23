'use client'

import { useContext } from "react";
import { saveContext } from "@/contexts/saveContext";
import Link from "next/link";
import BlurBox from "../BlurBox/BlurBox";

const SavedButton = () => {
    const context = useContext(saveContext)

    return (
        <div className="relative group">
            <Link href='/phim-da-luu'
                className="block rounded-full overflow-hidden">
                <BlurBox>
                    <div className="p-4 group-hover:bg-gradient-to-br from-red-600 to-indigo-500">
                        <img src='/bookmark.svg' className="w-5 h-5" alt="Bookmark" />
                    </div>
                </BlurBox>
            </Link>
            <div className="absolute -top-1 -right-1 px-[7px] rounded-full bg-primary/50 group-hover:bg-primary text-heading">
                {context.saveList.length}
            </div>
        </div>
    );
};

export default SavedButton;

