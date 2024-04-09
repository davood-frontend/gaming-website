'use client'
import { Box } from '@mui/material';
import React from 'react';
import BackGround from '@/components/products/BackGround';
import Hero from '@/components/product/Hero';
import AddToChart from '@/components/product/AddToChart';
import Title from '@/components/product/Title';
import AboutProduct from '@/components/product/AboutProduct';
import ProductFeatures from '@/components/product/ProductFeatures';
import Comments from '@/components/product/Comments';
import SwiperSlider from '@/components/SwiperSlider';
import { suggestionSwiper } from '@/constants/slidersData';
import useSWR from 'swr';
import Loading from '@/components/general/Loading';
import Error from '@/components/general/Error';

const GamePage = ({ params }) => {
    const { slug } = params
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, isLoading, error } = useSWR(`/api/games/${slug}`, fetcher)

    if (error) {
        return <Error />
    }
    return (
        <Box >
            <BackGround data={data} />
            {isLoading ? (
                <Loading pt={30} />
            ) : (
                <>
                    <Hero data={data} />
                    <Box sx={{ px: { xs: '3%', sm: '5%', md: '10%' }, my: 5 }}>
                        <Title data={data} />
                        <AddToChart data={data} />
                        <AboutProduct data={data} />
                        <ProductFeatures data={data} />
                        <Comments data={data} />
                    </Box>
                </>
            )
            }
            <Box sx={{ mb: 10 }}>
                <SwiperSlider delay={4000} data={suggestionSwiper} />
            </Box>

        </Box >
    );
};

export default GamePage; 