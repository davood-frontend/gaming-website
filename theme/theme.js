'use client'
import { Vazirmatn } from 'next/font/google'
import localFont from 'next/font/local'
// const vazir = localFont({
//     src: '../app/Vazir.woff2',
//     display: 'swap'
// })
const vazir = Vazirmatn({
    subsets: ['arabic', 'latin'],
    display: 'swap',
})
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const cacheRTL = createCache({
    key: 'muirtl',
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin]
})
const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'dark',
        warning: {
            main: '#fee715'
        },
        secondary: {
            main: '#af7ce2'
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
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}
