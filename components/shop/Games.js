import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import GamesPage from '../games/GamesPage';
const Games = () => {
    return (
        <Box sx={{ mt: 12 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
                <Typography color='secondary' variant='h5' fontWeight={600}>
                    بازی ها
                </Typography>
                <Typography color={grey[400]}>
                    بازی های منتشر شده در فروشگاه
                </Typography>
            </Box>
            <GamesPage scrollLocation={1200} />
        </Box>
    );
};

export default Games;