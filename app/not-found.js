import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import bg from '@/assets/notFound.jpg'
import BackGround from '@/components/general/Background';
const notFound = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', alignItems: { xs: 'start', sm: 'center' }, justifyContent: 'center', px: 2 }}>
            <Alert severity='warning' variant='outlined' sx={{ display: 'flex', alignItems: 'center', mt: { xs: 15, sm: 0 } }}>
                <Typography fontSize={{ xs: 13, sm: 18, md: 22 }} fontWeight={400} >
                    صفحه مورد نظر پیدا نشد. لطفا از درستی آدرس وارد شده مطمئن شوید
                </Typography>
            </Alert>
            <BackGround img={bg} opacity='0.4' />
        </Box>
    );
};

export default notFound;