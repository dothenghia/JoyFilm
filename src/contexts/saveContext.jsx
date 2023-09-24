'use client'

import { useState, createContext, useEffect } from 'react';

const saveContext = createContext()

function SaveProvider({ children }) {

    const [saveList, setSaveList] = useState([])

    useEffect(() => {
        let localSaveList = JSON.parse(localStorage.getItem('saveList'))
        setSaveList(localSaveList || [])
    }, [])

    const isSaved = (movie) => {
        const exists = saveList.some((savedMovie) => savedMovie.name === movie.name);
        return exists
    }

    const toggleSaveMovie = (movie) => {
        const exists = isSaved(movie);

        if (exists) {
            const updatedList = saveList.filter((savedMovie) => savedMovie.name !== movie.name);
            setSaveList(updatedList);
            localStorage.setItem('saveList', JSON.stringify(updatedList));
        } else {
            const updatedList = [...saveList, movie];
            setSaveList(updatedList);
            localStorage.setItem('saveList', JSON.stringify(updatedList));
        }
    }

    const value = {
        saveList,
        setSaveList,
        isSaved,
        toggleSaveMovie
    }

    return (
        <saveContext.Provider value={value}>
            {children}
        </saveContext.Provider>
    )
}

export { saveContext, SaveProvider }