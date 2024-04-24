'use client'
import { createContext, useState } from "react";

export const Context = createContext({
    sideBar: false,
    toggleSideBar: () => { },
})


export const MainContext = ({ children }) => {


    const [sideBar, setSideBar] = useState(false)
    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <Context.Provider value={{ sideBar, toggleSideBar }}>
            {children}
        </Context.Provider>
    )
}
