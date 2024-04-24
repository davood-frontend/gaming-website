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
import Link from 'next/link';
import { numberFormatter } from '@/constants/functions';
const SwiperSlider = ({ data, delay, SliderInfo, group, noTitle }) => {
    return (
        <Box sx={{ marginTop: noTitle ? 0 : 13 }}>
            <Box className={styles.titleHolder} sx={{ display: noTitle ? 'none' : 'flex' }}>
                <Box className={styles.animatedDotContainer}>
                    <Box className={styles.animatedDot} />
                </Box>
                <Box >
                    <Typography variant='h6' sx={{ color: 'white' }}>{SliderInfo.title}</Typography>
                    <Typography sx={{ color: grey[500] }} variant='subtitle2'>{SliderInfo.desc}</Typography>
                </Box>
            </Box>
            <Swiper slidesPerView='auto' speed={1000} spaceBetween={30} pagination={{ clickable: true }} loop={true} modules={[Autoplay]} autoplay={{ delay }}>
                {data && data.map((item, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide} >
                        <Box className={styles.swiperSlideBox}>
                            <Link href={group == 'consoles' ? `/consoles/${item.slug}` : `/games/${item.slug}`}>
                                <Image src={item.image} fill className={styles.swiperSlideImage} alt={item.title} />
                                <Box className={styles.overLay}>
                                    <Box sx={{ width: 1, my: 1, mx: 1.5 }}>
                                        <Box className={styles.swiperSlideType}>
                                            <Typography variant='subtitle2' sx={{ p: 0.4, color: 'black' }}>
                                                {item.type || item.company}
                                            </Typography>
                                        </Box>
                                        <Box className={styles.swiperSlideInfo}>
                                            <Typography color='secondary'>{item.title}</Typography>
                                            <Typography variant='caption' color='white'>{item.price ? numberFormatter(item.price) + ' تومان' : 'رایگان'}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box >
    );
};

export default SwiperSlider;