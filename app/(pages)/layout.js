import Footer from "@/components/homePage/Footer"
import { Box } from "@mui/material"
import Loading from "@/components/general/Loading"
export default function CostumLayout({ children }) {
    return (

        <>
            {children}
            <Footer />
           
        </>
    )
}
