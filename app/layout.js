import { MainTheme } from '@/theme/theme'
import './globals.css'
import { Vazirmatn } from 'next/font/google'
import { MainContext } from '@/context/mainContext'
import DesktopHeader from '@/components/homePage/DesktopHeader'
import MobileHeader from '@/components/homePage/MobileHeader'
import { Box } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import SideBar from '@/components/general/SideBar'
import BackToTop from '@/components/general/BackToTop'
const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
})
export const metadata = {
  title: {
    default: 'فروشگاه گیمینگ',
    template: 'فروشگاه گیمینگ  | %s',
  },
  description: 'قالب ری اکتی فروشگاه گیمینگ',
}


export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir='rtl' className={vazir.className}>
      <body>
        <AppRouterCacheProvider>
          <StyledEngineProvider injectFirst>
            <MainTheme>
              <MainContext>
                <BackToTop />
                <SideBar />
                <DesktopHeader />
                <MobileHeader />
                <Box sx={{ backgroundColor: '#101820', zIndex: 0, position: 'relative' }}>
                  {children}
                </Box>
              </MainContext>
            </MainTheme>
          </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html >
  )
}
