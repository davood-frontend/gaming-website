import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
const ProductFeatures = () => {
    return (
        <Box sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: 3, p: 3, my: 4, color: '#dfdfdf' }}>
            <Typography variant='h5' color='secondary' sx={{ mb: 4 }} className='beforeTitle'>
                مشخصات محصول
            </Typography>
            <Grid container columnSpacing={1}>
                <Grid xs={12} sm={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #192531', py: 1.5, px: 2, borderRadius: 1 }}>
                        <Typography>ویژگی : </Typography>
                        <Typography>ویژگی 1 </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={4} sx={{mt:{xs:2,sm:0}}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #192531', py: 1.5, px: 2, borderRadius: 1 }}>
                        <Typography>ویژگی : </Typography>
                        <Typography>ویژگی 2 </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={4} sx={{mt:{xs:2,sm:0}}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #192531', py: 1.5, px: 2, borderRadius: 1 }}>
                        <Typography>ویژگی : </Typography>
                        <Typography>ویژگی 3 </Typography>
                    </Box>
                </Grid>



            </Grid>
        </Box>
    );
};

export default ProductFeatures;