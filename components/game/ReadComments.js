import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const ReadComments = ({ data }) => {

    return (
        <Box sx={{ mt: 4, mb: 1 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant='h6' color='secondary'>دیدگاه مشتریان</Typography>
            </Box>
            {
                data.length == 0 ? (
                    <Typography >
                        هنوز هیچ دیدگاهی ثبت نشده است
                    </Typography>
                ) : (
                    data.map((item, index) => (
                        <Box key={index} sx={{ border: '1px dashed #af7ce2', borderRadius: 1, p: 1.5, mt: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant='subtitle1'>{item.writer}</Typography>
                                <Rating sx={{ ml: 1, '& .MuiRating-iconFilled': { color: '#af7ce2' } }} defaultValue={item.rating} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} readOnly />
                            </Box>
                            <Box sx={{ px: { xs: 0.5, sm: 1.5 }, pb: 1 }}>
                                <Typography variant='subtitle2' sx={{ color: grey[500] }}>{item.comment}</Typography>
                            </Box>
                        </Box>
                    ))
                )
            }
        </Box>
    );
};

export default ReadComments; 