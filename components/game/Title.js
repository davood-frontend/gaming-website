import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
const Title = () => {
    return (
        <Box>
            <Box color='white'>
                <Typography variant='h5'>خدای جنگ</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'start', width: 1, my: 2 }}>
                    <Box sx={{ display: 'flex', marginRight: 3 }}>
                        <AppsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                        <Typography sx={{ fontWeight: 200 }}>دسته بندی : گیفت کارد</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <SportsEsportsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                        <Typography sx={{ fontWeight: 200 }}>پلتفرم : پلی استیشن</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Title;