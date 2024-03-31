import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const BackGround = ({ img }) => {
    return (
        <Avatar sx={{ height: 700, width: 1, position: 'absolute', top: 0, right: 0, backgroundColor: '#101820', zIndex: -1 }} variant='square'>
            <Image src={img} fill style={{ objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(1) blur(3px)', opacity: '0.3' }} />
            <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 1, height: 1, background: 'linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' }} />
        </Avatar>
    );
};

export default BackGround;