import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
const Title = ({ data }) => {
    return (
        <Box>
            <Box color='white'>
                <Typography variant='h5'>{data.title}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'start', width: 1, my: 2 }}>
                    <Box sx={{ display: 'flex', marginRight: 3 }}>
                        <AppsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                        <Typography sx={{ fontWeight: 200 }}>دسته بندی :  {data.type}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <SportsEsportsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                        <Typography sx={{ fontWeight: 200 }}>پلتفرم : کامپیوتر </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Title;