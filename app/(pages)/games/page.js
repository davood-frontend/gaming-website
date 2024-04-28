import React from 'react';
import Box from '@mui/material/Box';
import GamesPage from '@/components/games/GamesPage';
import BackGround from '@/components/general/Background';
import bg from '@/assets/assassinsCreedBG.jpg'
export const metadata = {
    title: 'بازی ها'
}

const page = () => {
    return (
        <Box sx={{ paddingTop: { xs: 5, md: 22 }, position: 'relative' }}>
            <BackGround img={bg} top={true} />
            <GamesPage scrollLocation={0} />
        </Box>
    );
};

export default page;