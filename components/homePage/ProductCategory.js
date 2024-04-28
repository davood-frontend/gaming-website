import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import styles from '@/styles/homePage/ProductCategory.module.css'
const ProductCategory = ({ children }) => {
    return (
        <Grid xs={6} md={3} sx={{ px: { xs: 2, md: 1, lg: 2 }, py: 3 }} >
            <Box className={styles.itemsContainer}>
                {children}
            </Box>
        </Grid>
    )
}

export default ProductCategory;