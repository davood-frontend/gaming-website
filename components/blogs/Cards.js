import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Link from 'next/link';
import SingleCard from './SingleCard';
const fetchData = async () => {
    const res = await fetch('http://localhost:3000/api/blogs')
    if (!res.ok) {
        throw new Error('failed to fetch API data')
    }
    const data = await res.json()
    return data
}
const Cards = async () => {
    const data = await fetchData()
    return (
        <Box sx={{ pt: { xs: 5, md: 25 }, pb: 15 }}>
            <Typography variant='h2' color='secondary'  sx={{ textAlign: 'center', fontWeight: 800, textShadow: '0 0 10px rgba(175,124,226,0.5)' }}>وبلاگ</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container width={1} columnSpacing={3}>
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