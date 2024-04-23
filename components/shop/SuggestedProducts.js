import React from 'react';
import Box from '@mui/material/Box';
import { randomDataPicker } from '@/constants/functions';
const fetchAllGames = async () => {
    const res = await fetch(`http://localhost:3000/api/games`)
    const data = await res.json()
    return data
}
import SwiperSlider from '@/components/SwiperSlider';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
const SuggestedProducts = async () => {
    const allGames = await fetchAllGames()
    const suggestionSwiper = randomDataPicker(allGames)
    return (
        <Box sx={{ mt: 12 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
                <Typography color='secondary' variant='h5' fontWeight={600}>
                    محصولات پیشنهادی
                </Typography>
                <Typography color={grey[400]}>
                    محصولاتی که ما به شما پیشنهاد میکنیم
                </Typography>
            </Box>
            <SwiperSlider data={suggestionSwiper} delay={4000} SliderInfo={{ title: '', desc: '' }} noTitle={true} />
        </Box>
    );
};

export default SuggestedProducts;