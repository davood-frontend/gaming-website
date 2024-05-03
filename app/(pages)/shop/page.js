import React from 'react';
import Box from '@mui/material/Box';
import BackGround from '@/components/general/Background';
import bg from '@/assets/assassinsCreedBG.jpg'
import HeroContainer from '@/components/shop/HeroContainer';
import SuggestedProducts from '@/components/shop/SuggestedProducts';
import Games from '@/components/shop/Games';
import Consoles from '@/components/shop/Consoles';
import { envURl } from '@/app/services/requests';
export const metadata = {
    title: 'فروشگاه'
}
const page = () => {
    if (!envURl) {
        return null
    }
    return (
        <Box sx={{ paddingX: { xs: '10px', sm: '20px', md: '10%' } }}>
            <BackGround img={bg} />
            <HeroContainer />
            <SuggestedProducts />
            <Games />
            <Consoles />
        </Box>
    );
};

export default page;