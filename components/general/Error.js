import React from 'react';
import { Box, Typography } from '@mui/material';
const Error = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography variant='h5' color='error'>
                مشکلی در ارتباط با سرور رخ داد. لطفا مجددا تلاش کنید
            </Typography>
        </Box>
    );
};

export default Error;