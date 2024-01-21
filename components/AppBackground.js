import React from 'react';
import Image from 'next/image';
import assassinsCreed from '@/assets/assassinsCreed.jpg'
import { Box, Avatar } from '@mui/material'
const AppBackground = ({ children }) => {
    return (
        <Box sx={{ position: 'relative', height: { xs: '400px', sm: '450px', md: '700px', lg: '800px' } }}>
            <Avatar variant='square' sx={{ height: 1, width: 1, position: 'absolute' }}>
                <Image src={assassinsCreed} fill style={{ filter: 'grayscale(1) blur(3px)', objectFit: 'cover'}} />
            </Avatar>
            <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: 'linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' }} />
            {children}
        </Box>

    );
};

export default AppBackground;