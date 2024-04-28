import Services from '@/components/about/Services';
import Box from '@mui/material/Box';
import React from 'react';
import BackGround from '@/components/general/Background';
import AboutUs from '@/components/about/AboutUs';
import Costumers from '@/components/about/Costumers';
import OurStory from '@/components/about/OurStory';
import bg from '@/assets/aboutBG.jpg'
export const metadata = {
    title: 'درباره ما'
}
const page = () => {
    return (
        <Box sx={{ px: { xs: '3%', md: '10%' } }}>
            <BackGround img={bg} />
            <Services />
            <AboutUs />
            <Costumers />
            <OurStory />
        </Box>
    );
};

export default page;