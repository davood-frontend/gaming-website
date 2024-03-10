'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import pfp from '@/assets/pfp.jpg'
const data = [
    {
        name: 'کیان رحیمی',
        pfp: pfp,
        position: 'کارمند'
    },
    {
        name: 'کیان رحیمی',
        pfp: pfp,
        position: 'مدیرعامل'
    },
    {
        name: 'کیان رحیمی',
        pfp: pfp,
        position: 'مدیر'
    },
]
const Costumers = () => {

    return (
        <Box sx={{ my: 10, px: 1 }}>
            <Box color='white' textAlign='center'>
                <Typography color='secondary' variant='h6' fontWeight={700}>مشتریان ما چه میگویند؟</Typography>
                <Typography variant='body2' fontWeight={200}>نظر برخی از مشتریان درباره ما</Typography>
            </Box>
            <Swiper style={{ overflow: 'visible' }} dir='rtl' spaceBetween={30} effect='fade' fadeEffect={{ crossFade: true }} navigation={true} pagination={{ clickable: true }} modules={[EffectFade, Navigation, Pagination]} >
                {data.map((item, index) => (
                    <SwiperSlide key={index} style={{ overflow: 'visible' }}>
                        <Box color='white' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6 }}>
                            <Avatar sx={{ height: 100, width: 100, mb: { xs: 4, md: 2 }, border: '5px solid #af7ce2', boxShadow: '0 0 10px rgba(254, 231, 21, 0.4)' }}>
                                <Image src={item.pfp} fill style={{ objectFit: 'cover' }} />
                            </Avatar>
                            <Typography sx={{ mb: 0.3 }} variant='h6' >{item.name}</Typography>
                            <Typography sx={{ mb: 4 }}>{item.position}</Typography>
                            <Typography sx={{ fontWeight: 200, maxWidth: 400, textAlign: 'center' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
                        </Box>
                    </SwiperSlide>
                ))}

            </Swiper>

        </Box>
    );
};

export default Costumers;
