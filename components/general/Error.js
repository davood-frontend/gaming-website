import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import bg from '@/assets/error.jpg'
import BackGround from '@/components/general/Background';

const Error = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: { xs: '80vh', md: '100vh' }, px: 2 }}>
            <Alert severity='error' variant='outlined' sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography fontSize={{ xs: 13, sm: 18, md: 22 }} fontWeight={400}>
                    مشکلی در ارتباط با سرور رخ داد. لطفا اتصال خود را به اینترنت چک و مجددا تلاش کنید
                </Typography>
            </Alert>
            <BackGround img={bg} />
        </Box>
    );
};

export default Error;