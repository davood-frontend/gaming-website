'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { grey } from '@mui/material/colors';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import styles from '@/styles/homePage/Sliders.module.css'

const SwiperSlider = ({ data, delay }) => {
    const { sliderItems, SliderInfo } = data
  
    return (
        <Box sx={{ marginTop: 13 }}>
            <Box className={styles.titleHolder}>
                <Box className={styles.animatedDotContainer}>
                    <Box className={styles.animatedDot} />
                </Box>
                <Box>
                    <Typography variant='h6' sx={{ color: 'white' }}>{SliderInfo.title}</Typography>
                    <Typography sx={{ color: grey[500] }} variant='subtitle2'>{SliderInfo.desc}</Typography>
                </Box>
            </Box>
            <Swiper slidesPerView='auto' speed={1000} spaceBetween={30} pagination={{ clickable: true }} loop={true} modules={[Autoplay]} autoplay={{ delay }}>
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide} >
                        <Box className={styles.swiperSlideBox}>
                            <Image src={item.image} fill className={styles.swiperSlideImage} alt={item.name} />
                            <Box className={styles.overLay}>
                                <Box sx={{ width: 1, my: 1, mx: 1.5 }}>
                                    <Box className={styles.swiperSlideType}>
                                        <Typography variant='subtitle2' sx={{ p: 0.4 }}>
                                            {item.type}
                                        </Typography>
                                    </Box>
                                    <Box className={styles.swiperSlideInfo}>
                                        <Typography variant='h7' color='secondary'>{item.name}</Typography>
                                        <Typography variant='caption' color='white'>{item.price ? item.price + ' تومان' : 'رایگان'}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box >
    );
};

export default SwiperSlider;