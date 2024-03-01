'use client'
import React from 'react';
import Image from 'next/image';
import backGround from '@/assets/assassinsCreed/assassinsCreedSyndicateBg.jpg'
import { Box, Avatar } from '@mui/material';

const BackGround = ({ data }) => {
    return (
        <Avatar sx={{ height: 500, width: 1, position: 'absolute', top: 0, right: 0, backgroundColor: '#101820', zIndex: -1 }} variant='square'>
            <Image src={data ? data.image : backGround} fill style={{ objectFit: 'cover', objectPosition: data ? 'center center' : 'top center', filter: 'grayscale(1) blur(3px)', opacity: '0.3' }} />
            <Box sx={{ position: 'absolute', top: 0, right: 0, width: 1, height: 1, background: 'linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' }} />
        </Avatar>
    );
};

export default BackGround;