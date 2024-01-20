'use client'
import { Vazirmatn } from 'next/font/google'
const vazir = Vazirmatn({
    subsets: ['arabic', 'latin'],
    display: 'swap',
})

import { createTheme, ThemeProvider } from '@mui/material/styles'
const theme = createTheme({
    palette: {
        mode: 'dark',
        warning: {
            main: '#fee715' //changed
        },
        secondary: {
            main: '#af7ce2' //changed
        },
        primary: {
            main: '#080811'
        },
        error: {
            main: '#f44336'
        },
        success: {
            main: '#2bd964'
        },
        dark : {
            main : '#000000'
        }
    },
    typography: {
        fontSize: 13,
        fontFamily: vazir.style.fontFamily,
        fontWeightRegular: 200,
        
    },
})

export const MainTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
//#c4c4c4
//0d0e1b the background of video part