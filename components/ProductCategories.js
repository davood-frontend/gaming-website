import React from 'react';
import ProductCategory from './ProductCategory';
import Grid from '@mui/material/Unstable_Grid2'
import {Typography} from '@mui/material'
const ProductCategories = () => {
    return (
        <Grid container sx={{ width: 1, px: { xs: '10px', md: '20px', lg: '10%' } }} >
            <ProductCategory href='disk'>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>دیسک</Typography>
                <Typography variant='subtitle2'>Disk</Typography>
            </ProductCategory>
            <ProductCategory href='cd'>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>سی دی کی</Typography>
                <Typography variant='subtitle2'>CD key</Typography>
            </ProductCategory>
            <ProductCategory href='giftcard'>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>گیفت کارت</Typography>
                <Typography variant='subtitle2'>Gift Card</Typography>
            </ProductCategory>
            <ProductCategory href='consoles'>
                <Typography variant='h5' sx={{ fontWeight: 500 }}>کنسول ها</Typography>
                <Typography variant='subtitle2'>Console</Typography>
            </ProductCategory>
        </Grid>
    );
};

export default ProductCategories;