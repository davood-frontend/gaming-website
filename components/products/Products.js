import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Alert } from '@mui/material';
import Product from './Product';
const Products = ({ data, group }) => {
    return (
        <Box sx={{ px: { xs: '5px', md: '5%', display: 'flex', justifyContent: 'center' } }}>
            <Grid container width={1} spacing={{ xs: 2, sm: 1, md: 3 }}>
                {data.length == 0 && <Box sx={{px:9}}><Alert severity='info'>هیچ محصولی یافت نشد</Alert></Box>}
                {data.map((item, index) => <Product data={item} key={index} id={index} group={group} />)}
            </Grid>
        </Box>
    );
};

export default Products;