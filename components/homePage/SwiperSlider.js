'use client' 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { grey } from '@mui/material/colors';
import { Avatar, Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/legacy/image';

import styles from '@/styles/homePage/Sliders.module.css'
import Link from 'next/link';
import { numberFormatter } from '@/app/utils/functions';

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


const SwiperSlider = ({ data, delay, SliderInfo, group, noTitle }) => {
    const theme = useTheme();
    const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ marginTop: noTitle ? 0 : { xs: 8, md: 13 } }}>
            <Box className={styles.titleHolder} sx={{ display: noTitle ? 'none' : 'flex', px: '10%', alignItems: 'center', mb: { xs: 2, sm: 5 } }}>
                <Box className={styles.animatedDotContainer}>
                    <Box className={styles.animatedDot} />
                </Box>
                <Box >
                    <Typography gutterBottom variant='h6' sx={{ color: 'white' }}>{SliderInfo.title}</Typography>
                    <Typography sx={{ color: grey[500] }} variant='subtitle2'>{SliderInfo.desc}</Typography>
                </Box>
            </Box>
            <Swiper slidesPerView='auto' speed={1000} spaceBetween={smallerThanSm ? 15 : 30} pagination={{ clickable: true }} loop={true} modules={[Autoplay]} autoplay={{ delay }}>
                {data && data.map((item, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        < Box className={styles.swiperSlideBox} >
                            <Link href={group == 'consoles' ? `/consoles/${item.slug}` : `/games/${item.slug}`}>
                                <Avatar sx={{ height: 1, width: 1, borderRadius: 2, boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)' }} variant='square'>
                                    <Image priority layout='fill' objectFit='cover' placeholder='blur' blurDataURL={item.image} src={item.image} alt={item.title} />
                                </Avatar>
                                <Box className={styles.overLay}>
                                    <Box sx={{ width: 1, my: 1, mx: 1.5 }}>
                                        <Box className={styles.swiperSlideType} sx={{ backgroundColor: '#af7ce2', display: 'inline-block', mb: 1, borderRadius: 1.5 }}>
                                            <Typography variant='subtitle2' sx={{ py: 0.4, px: 0.6, color: 'black', fontWeight: 400 }}>
                                                {item.type || item.company}
                                            </Typography>
                                        </Box>
                                        <Box className={styles.swiperSlideInfo} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography color='secondary' fontSize={{ xs: 12, sm: 15 }}>{item.title}</Typography>
                                            <Typography variant='caption' color='white'>{item.price ? numberFormatter(item.price) + ' تومان' : 'رایگان'}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    </SwiperSlide >
                ))}
            </Swiper >
        </Box >
    );
};

export default SwiperSlider;