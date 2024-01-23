import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'

const ProductCategory = ({ href, children }) => {
    return (
        <Grid xs={6} md={3} sx={{ zIndex: 1, px: { xs: 1, md: 2 }, py: 3 }} >
            <Link href={href} style={{ color: 'black', textDecoration: 'none' }}>
                <Box sx={{ backgroundColor: '#af7ce2', py: 5, borderRadius: 2, textAlign: 'center' }} className='hover-to-top'>
                    {children}
                </Box>
            </Link>
        </Grid>
    )
}

export default ProductCategory;