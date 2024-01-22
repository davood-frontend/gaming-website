'use client'
import { createContext, useEffect, useState } from "react";
import assassinsCreed from '@/assets/assassinsCreed.jpg'
import watchDogs from '@/assets/watchDogs.jpg'
import devilMayCry from '@/assets/devilMayCry.jpg'
import devilMayCrySmall from '@/assets/devilMayCrySmall.jpg'
export const Context = createContext({
    homePageHero: '',
    setHomePageHero: () => { },
    homePageHandler: () => { },
})

const watchDogsData = {
    id: 0,
    background: assassinsCreed,
    biggerHalf: assassinsCreed,
    smallerHalf: watchDogs,
    class: 'assassin'
}
const DevilMAyCryData = {
    id: 1,
    background: devilMayCry,
    biggerHalf: devilMayCry,
    smallerHalf: devilMayCrySmall,
    class: 'devil'
}
export const MainContext = ({ children }) => {

    const [homePageHero, setHomePageHero] = useState({
        id: 0,
        background: assassinsCreed,
        biggerHalf: assassinsCreed,
        smallerHalf: watchDogs
    })

    const homePageHandler = (game) => {
        if (game === 'watchDogs') {
            setHomePageHero(watchDogsData)
        }
        else if (game === 'devilMayCry') {
            setHomePageHero(DevilMAyCryData)
        }
    }
    return (
        <Context.Provider value={{ homePageHero, setHomePageHero, homePageHandler }}>
            {children}
        </Context.Provider>
    )
}
