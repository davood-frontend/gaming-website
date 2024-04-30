import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Link from 'next/link';
import SingleCard from './SingleCard';
import { fetchAllBlogs } from '@/app/services/requests';

const Cards = async () => {
    const data = await fetchAllBlogs()
    return (
        <Box sx={{ pt: { xs: 5, md: 25 }, pb: 15 }}>
            <Typography variant='h2' color='secondary' sx={{ textAlign: 'center', fontWeight: 800, textShadow: '0 0 10px rgba(175,124,226,0.5)' }}>وبلاگ</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container width={1} columnSpacing={{ xs: 1.5, sm: 3 }}>
                    {data.map((item, index) => (
                        <Grid key={index} xs={12} smBefore={6} smAfter={4} sx={{ mt: 3 }}>
                            <Link href={`blogs/${item._id}`}>
                                <SingleCard item={item} />
                            </Link>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </Box>
    );
};

export default Cards;