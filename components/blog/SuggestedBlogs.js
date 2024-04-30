'use client'
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import SingleCard from '../blogs/SingleCard';
import Link from 'next/link';
import Loading from '../general/Loading';
const SuggestedBlogs = ({ id }) => {

    const [blogs, setBlogs] = useState()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/blogs', fetcher)

    useEffect(() => {
        if (!isLoading) {
            //removing the blog that we already are inside of it
            const filteredData = data.filter(item => item._id !== id)
            setBlogs(filteredData)
        }
    }, [isLoading])

    if (isLoading) return <Loading />
    return (
        <Box sx={{ my: 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant='h5' color='warning.main'>
                    بیشتر بخوانید
                </Typography>
                <Typography color='gray' variant='subtitle2'>
                    جدید ترین مقالات ما
                </Typography>
            </Box>
            <Box>
                <Swiper slidesPerView='auto' speed={3000} spaceBetween={30} loop={true} modules={[Autoplay]} autoplay={{ delay: 4000, disableOnInteraction: false }}>
                    {blogs && blogs.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: '390px' }}>
                            <Box sx={{ py: 2.5 }}>
                                <Link href={`/blogs/${item._id}`}>
                                    <SingleCard item={item} />
                                </Link>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Box>
        </Box>
    );
};

export default SuggestedBlogs;