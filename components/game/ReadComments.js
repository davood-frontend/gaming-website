import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const ReadComments = () => {
    return (
        <Box sx={{ mt: 4, mb: 1 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant='h6' color='secondary'>دیدگاه مشتریان</Typography>
            </Box>
            {/* <Typography >
                هنوز هیچ دیدگاهی ثبت نشده است
            </Typography> */}
            <Box sx={{ border: '1px dashed #af7ce2', borderRadius: 1, p: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant='subtitle1'>علی نادری</Typography>
                    <Rating sx={{ ml: 1, '& .MuiRating-iconFilled': { color: '#af7ce2' } }} defaultValue={3} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} readOnly />
                </Box>
                <Box sx={{ px: { xs: 0.5, sm: 1.5 }, pb: 1 }}>
                    <Typography variant='subtitle2' sx={{ color: grey[500] }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،</Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px dashed #af7ce2', borderRadius: 1, p: 1, mt: 1 }}>
                <Typography variant='subtitle1'>داود رضایی</Typography>
                <Box sx={{ px: { xs: 0.5, sm: 1.5 }, pb: 1 }}>
                    <Typography variant='subtitle2' sx={{ color: grey[500] }}>عالی بود واقعا</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ReadComments; 