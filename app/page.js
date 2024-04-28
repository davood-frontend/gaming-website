import React from 'react';
import Box from '@mui/material/Box'
import AppBackground from '@/components/homePage/AppBackground';
import HomePageHero from '@/components/homePage/HomePageHero';
import ProductCategories from '@/components/homePage/ProductCategories';
import SwiperSlider from '@/components/homePage/SwiperSlider';
import HomePageBanner from '@/components/homePage/HomePageBanner';
import Companies from '@/components/homePage/Companies';
import Blogs from '@/components/homePage/Blogs';
import { latestItemsPicker, randomDataPicker, firstItemsPicker } from '@/app/utils/functions'


const fetchAllGames = async () => {
  const res = await fetch(`http://localhost:3000/api/games`)
  const data = await res.json()
  return data
}
const fetchAllConsoles = async () => {
  const res = await fetch(`http://localhost:3000/api/consoles `)
  const data = await res.json()
  return data
}
const fetchHeroData = async () => {
  const res = await fetch('http://localhost:3000/api/heroData', { cache: 'no-cache' })
  const data = await res.json()
  return data;
}
const fetchBannerData = async () => {
  const res = await fetch('http://localhost:3000/api/bannerData', { cache: 'no-cache' })
  const data = await res.json()
  return data;
}
const Home = async () => {
  const AllGames = await fetchAllGames()
  const AllConsoles = await fetchAllConsoles()
  const suggestionSwiper = randomDataPicker(AllGames)
  const latestSwiper = latestItemsPicker(AllGames)
  const consolsSwiper = AllConsoles
  const gamesSwiper = firstItemsPicker(AllGames)
  const heroData = await fetchHeroData()
  const bannerData = await fetchBannerData()
  const [hero] = heroData
  const [banner] = bannerData
  return (
    <Box>
      <AppBackground data={hero}>
        <HomePageHero />
      </AppBackground>
      <ProductCategories />
      <SwiperSlider data={latestSwiper} delay={3000} SliderInfo={{ title: 'آخرین محصولات ', desc: 'آخرین محصولات ارائه شده در فروشگاه' }} />
      <SwiperSlider data={gamesSwiper} delay={4000} SliderInfo={{ title: 'بازی ها', desc: 'بهترین بازی های روز دنیا' }} />
      <SwiperSlider data={consolsSwiper} delay={5000} SliderInfo={{ title: 'کنسول و لوازم جانبی', desc: 'بهترین کنسول ها و لوازم جانبی' }} group='consoles' />
      <HomePageBanner data={banner} />
      <Companies />
      <SwiperSlider data={suggestionSwiper} delay={3000} SliderInfo={{ title: 'محصولات پیشنهادی', desc: 'محصولاتی که ما به شما پیشنهاد میکنیم' }} />
      <Blogs />

    </Box >
  );
};

export default Home;
