import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

const AboutUs = ({ aboutUsData }) => {
    return (
        <Box textAlign='center' color='white'>
            <Box marginBottom={6}>
                <Typography color='secondary' variant='h5' fontWeight={700}>درباره ما</Typography>
                <Typography variant='subtitle2' fontWeight={300}>کمی بیشتر درمورد ما بدانید</Typography>
            </Box>
            <Box sx={{ px: 1, lineHeight: 1.8 }}>
                {aboutUsData.map((item, index) => (
                    <Typography variant='body2' fontWeight={200} key={item.index}>
                        {item.text}
                    </Typography>

                ))}
            </Box>

        </Box>
    );
};

export default AboutUs;