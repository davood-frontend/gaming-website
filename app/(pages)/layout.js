import Footer from "@/components/homePage/Footer"
import { envURl } from "../services/requests"
export default function CostumLayout({ children }) {
    if (!envURl) {
        return null
    }
    return (

        <>
            {children}
            <Footer />
        </>
    )
}
