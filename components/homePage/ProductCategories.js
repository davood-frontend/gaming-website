import React from 'react';
import ProductCategory from './ProductCategory';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
const ProductCategories = () => {
    return (
        <Grid container sx={{ width: 1, px: { xs: '10px', md: '20px', lg: '10%' } }} >
            <ProductCategory>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>دیسک</Typography>
                <Typography variant='subtitle2' fontWeight={600}>Disk</Typography>
            </ProductCategory>
            <ProductCategory>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>سی دی کی</Typography>
                <Typography variant='subtitle2' fontWeight={600}>CD key</Typography>
            </ProductCategory>
            <ProductCategory>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>گیفت کارت</Typography>
                <Typography variant='subtitle2' fontWeight={600}>Gift Card</Typography>
            </ProductCategory>
            <ProductCategory>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>کنسول ها</Typography>
                <Typography variant='subtitle2' fontWeight={600}>Console</Typography>
            </ProductCategory>
        </Grid>
    );
};

export default ProductCategories;