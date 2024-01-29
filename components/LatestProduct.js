import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import { Avatar, Box, Typography } from '@mui/material';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { grey } from '@mui/material/colors';

const OverLay = ({ backGround, children }) => {
    return (
        <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: backGround, display: 'flex', alignItems: 'end', borderRadius: '11px' }}>
            {children}
        </Box>
    )
}

const LatestProduct = ({ data ,delay}) => {
    const { sliderItems, SliderInfo } = data

    return (
        <Box sx={{ marginTop: 13 }}>
            <Box sx={{ paddingX: { sm: '20px', md: '30px', lg: '10%' },mr:{xs:2,sm:'none'}, display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <Box sx={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center' }}>
                    <Box className="animated-dot" />
                </Box>
                <Box>
                    <Typography variant='h6' sx={{ color: 'white' }}>{SliderInfo.title}</Typography>
                    <Typography sx={{ color: grey[500] }} variant='subtitle2'>{SliderInfo.desc}</Typography>
                </Box>
            </Box>
            <Swiper slidesPerView={'auto'} speed={1000} spaceBetween={30} pagination={{ clickable: true }} loop={true} modules={[Autoplay]} autoplay={{delay}}>
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', width: '290px', paddingTop: '15px', paddingBottom: '15px' }} >
                        <Box sx={{ width: 1, height: '280px', position: 'relative', backgroundColor: 'transparent' }} className='mySwiper'>
                            <Image src={item.image} fill style={{ height: '100%', width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)' }} />
                            <OverLay backGround='linear-gradient(to top, rgba(16, 24, 32, 0.9), rgba(16, 24, 32, 0) 80%)'>
                                <Box sx={{ width: 1, my: 1, mx: 1.5 }}>
                                    <Box sx={{ backgroundColor: '#af7ce2', display: 'inline-block', mb: 0.8, borderRadius: 1 }}>
                                        <Typography variant='subtitle2' sx={{ p: 0.4 }}>
                                            {item.type}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='h7' color='secondary'>{item.name}</Typography>
                                        <Typography variant='caption' color='white'>{item.price ? item.price + ' تومان' : 'رایگان'}</Typography>
                                    </Box>
                                </Box>
                            </OverLay>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default LatestProduct;