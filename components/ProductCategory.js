import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import styles from '@/styles/homePage/ProductCategory.module.css'
const ProductCategory = ({ href, children }) => {
    return (
        <Grid xs={6} md={3} sx={{ zIndex: 0, px: { xs: 1, md: 2 }, py: 3 }} >
            <Link href={href} style={{ color: 'black', textDecoration: 'none' }}>
                <Box className={styles.itemsContainer}>
                    {children}
                </Box>
            </Link>
        </Grid>
    )
}

export default ProductCategory;