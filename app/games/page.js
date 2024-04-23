import React from 'react';
import Box from '@mui/material/Box';
import GamesPage from '@/components/games/GamesPage';
import BackGround from '@/components/products/BackGround';

const page = () => {
    return (
        <Box sx={{ paddingTop: { xs: 5, md: 22 } ,position:'relative'}}>
            <BackGround />
            <GamesPage scrollLocation={0} />
        </Box>
    );
};

export default page;