'use client'
import { Vazirmatn } from 'next/font/google'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
const cacheRTL = createCache({
    key: 'muirtl',
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin]
})
const vazir = Vazirmatn({
    subsets: ['arabic', 'latin'],
    display: 'swap',
})
let theme = createTheme({
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
    },

})
theme.typography.h6 = {
    fontSize: '18px',
    '@media (max-width:900px)': {
        fontSize: '15px',
    },
}
theme.typography.h5 = {
    fontSize: '22px',
    '@media (max-width:1200px)': {
        fontSize: '20px',
    },
    '@media (max-width:900px)': {
        fontSize: '18px',
    },

}
theme.typography.h2 = {
    fontSize: '55px',
    '@media (max-width:900px)': {
        fontSize: '45px',
    },
    '@media (max-width:600px)': {
        fontSize: '35px',
    },

}
theme.typography.subtitle2 = {
    fontSize: '13px',
    fontWeight: '300',
    '@media (max-width:900px)': {
        fontSize: '11px',
    },
}
theme.typography.subtitle1 = {
    fontSize: '15px',
    fontWeight: '300',
    '@media (max-width:900px)': {
        fontSize: '13px',
    },
}
theme.typography.body2 = {
    fontSize: '16px',
    fontWeight: '300',
    '@media (max-width:900px)': {
        fontSize: '14px',
    },
}
export const MainTheme = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}
