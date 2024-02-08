'use client'
import { Vazirmatn } from 'next/font/google'
const vazir = Vazirmatn({
    subsets: ['arabic', 'latin'],
    display: 'swap',
})
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from "@mui/material"
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
        dark: {
            main: '#000000'
        }
    },
    typography: {
        fontSize: 13,
        fontFamily: vazir.style.fontFamily,
        fontWeightRegular: 400,
    },
    breakpoints: {
        keys: ['xs', 'smBefore', 'sm', 'smAfter', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            smBefore: 500,
            sm: 600,
            smAfter: 700,
            md: 900,
            lg: 1200,
            xl: 1900
        }
    }


})

export const MainTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
