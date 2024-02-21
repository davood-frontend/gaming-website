import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import ReadComments from './ReadComments';
import SetComment from './SetComment';
import Divider from '@mui/material/Divider';

const Comments = () => {
    return (
        <Box sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: 3, p: { xs: 1, sm: 3 }, my: 4, color: '#dfdfdf' }}>
            <SetComment />
            <Divider sx={{ mt: 5, borderBottomWidth: 2 }}></Divider>
            <ReadComments />
        </Box>

    );
};

export default Comments; 