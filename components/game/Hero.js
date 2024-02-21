'use client'
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image';
import first from '@/assets/genshinImpact/first.webp'
import second from '@/assets/genshinImpact/second.webp'
import third from '@/assets/genshinImpact/third.webp'
import fourth from '@/assets/genshinImpact/fourth.webp'
import fifth from '@/assets/genshinImpact/fifth.webp'
import genshinImpact from '@/assets/genshinImpact/genshinImpact.webp'
import { Avatar, Box } from '@mui/material';
const data = {
    name: 'اساسینز کرید سیندیکیت',
    price: 100000,
    type: 'بازی',
    image: genshinImpact,
    subImages: [first, second, third, fourth, fifth],
    category: 'game',
    style: 'historical',
    platforms: ['ps', 'xbox', 'pc'],
    company: 'ubisoft',
    englishName: 'assassinsCreedSyndicate',
}
const Hero = () => {
    const [currentPic, setCurrentPic] = useState(first)

    return (
        <Box sx={{ pt: { xs: 5, md: 22 }, pb: 5, px: { xs: '5px', sm: '10px', md: '30px', lg: '10%' }, display: 'flex', justifyContent: 'center' }}>
            <Grid direction='column' container width={1} columnSpacing={{ xs: 1, md: 2 }} rowSpacing={{ xs: 2, sm: 0 }} sx={{ height: { xs: 'auto', sm: 300, md: 500 } }}>
                <Grid xs={12} sm={4} container height={{ xs: '400px', md: 1 }}>
                    <Grid xs={12} sx={{ height: 2 / 3, pb: { xs: 0.5, md: 1 } }}>
                        <Avatar variant='rounded' sx={{ height: 1, width: 1, borderRadius: 4, boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}>
                            <Image fill style={{ objectFit: 'cover' }} src={genshinImpact} />
                        </Avatar>
                    </Grid>
                    <Grid xs={12} sx={{ height: 1 / 3, pt: { xs: 0.5, md: 1 } }} container spacing={1}>
                        {data.subImages.map((item, index) => (
                            <Grid xs={4}>
                                <Avatar variant='rounded' sx={{ height: 1, width: 1, cursor: 'pointer', borderRadius: 2, boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }} key={index}>
                                    <Image fill style={{ objectFit: 'cover' }} src={item} onClick={() => setCurrentPic(item)} />
                                </Avatar>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid xs={12} sm={8} height={{ xs: '300px', md: 1 }}>
                    <Avatar variant='rounded' sx={{ height: 1, width: 1, borderRadius: 4, boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}>
                        <Image fill style={{ objectFit: 'cover' }} src={currentPic} />
                    </Avatar>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;