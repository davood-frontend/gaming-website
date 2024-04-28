import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
const Error = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: { xs: '50vh', md: '100vh' } }}>
            <Alert severity='error' variant='outlined' sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' fontSize={{ xs: 14, md: 22 }}>
                    مشکلی در ارتباط با سرور رخ داد. لطفا مجددا تلاش کنید
                </Typography>
            </Alert>
        </Box>
    );
};

export default Error;