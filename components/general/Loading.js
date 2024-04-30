import React from 'react';
import loading from '@/assets/loading.gif'
import { Box, Typography, Avatar } from '@mui/material';
import Image from 'next/image';
const Loading = ({ pt }) => {
    return (
        <Box sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', pt: pt, mb: 20 }}>
            <Avatar variant='rounded' sx={{ width: 1 / 2, height: 300, backgroundColor: 'transparent' }}>
                <Image src={loading} fill style={{ objectFit: "contain" }} />
            </Avatar>
            <Typography color='white' variant='h5'>
                ... LOADING
            </Typography>
        </Box>
    );
};

export default Loading;