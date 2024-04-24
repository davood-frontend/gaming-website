import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import ConsolesPage from '../consoles/ConsolesPage';
const Consoles = () => {
    return (
        <Box sx={{ mt: 15,pb:8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
                <Typography color='secondary' variant='h5' fontWeight={600}>
                    کنسول ها
                </Typography>
                <Typography color={grey[400]}>
                    مدرن ترین کنسول های بازی
                </Typography>
            </Box>
            <ConsolesPage scrollLocation={2550} />
        </Box>
    );
};

export default Consoles;