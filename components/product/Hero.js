'use client'
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/legacy/image';
import { Avatar, Box } from '@mui/material';
const Hero = ({ data }) => {
    const [currentPic, setCurrentPic] = useState(data.subImages[0])

    return (
        <>
            <Box sx={{ pt: { xs: 3, sm: 5, md: 22 }, px: { xs: '5px', sm: '10px', md: '30px', lg: '10%' } }}>
                <Box sx={{ height: { xs: 500, sm: 300, md: 500 }, gridTemplateColumns: "repeat(13,auto)", gridTemplateRows: 'repeat(13,auto)', display: 'grid' }} gap={{ xs: 1, md: 2 }}>

                    <Box sx={{ display: { xs: 'none', sm: 'block' }, gridColumn: { xs: '1/ span 13', sm: '1/  span 4' }, gridRow: { xs: '1/ span 4', sm: '1/ span 8' } }}>
                        <Avatar variant='rounded' sx={{ height: 1, width: 1, borderRadius: 4, boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}>
                            <Image layout='fill' objectFit='cover' src={data.image} />
                        </Avatar>
                    </Box>

                    <Grid container sx={{ gridColumn: { xs: '1/ span 13', sm: '1/  span 4' }, gridRow: { xs: '10/ span 3', sm: '9/ span 4' } }} spacing={1}>
                        {data.subImages.map((item, index) => (
                            <Grid xs={4} key={index}>
                                <Avatar variant='rounded' sx={{ height: 1, width: 1, cursor: 'pointer', borderRadius: 2, boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }} key={index}>
                                    <Image priority layout='fill' objectFit='cover' placeholder='blur' blurDataURL={item} src={item} onClick={() => setCurrentPic(item)} alt='game img' />
                                </Avatar>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ gridColumn: { xs: '1/ span 13', sm: '5/  span 9' }, gridRow: { xs: '1/ span 9', sm: '1/ span 12' } }}>
                        <Avatar variant='rounded' sx={{ height: 1, width: 1, borderRadius: 4, boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}>
                            <Image priority layout='fill' objectFit='cover' placeholder='blur' blurDataURL={currentPic} src={currentPic} alt={data.title} />
                        </Avatar>
                    </Box>

                </Box>
            </Box>

        </>
    );
};

export default Hero;