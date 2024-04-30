import Services from '@/components/about/Services';
import Box from '@mui/material/Box';
import React from 'react';
import BackGround from '@/components/general/Background';
import AboutUs from '@/components/about/AboutUs';
import Costumers from '@/components/about/Costumers';
import OurStory from '@/components/about/OurStory';
import bg from '@/assets/aboutBG.jpg'
import { aboutData } from '@/constants/AboutData';
const { OurStoryData, aboutUsData, costumersData, servicesData } = aboutData
export const metadata = {
    title: 'درباره ما'
}
const page = () => {
    return (
        <Box sx={{ px: { xs: '3%', md: '10%' } }}>
            <BackGround img={bg} />
            <Services servicesData={servicesData} />
            <AboutUs aboutUsData={aboutUsData} />
            <Costumers costumersData={costumersData} />
            <OurStory OurStoryData={OurStoryData} />
        </Box>
    );
};

export default page;