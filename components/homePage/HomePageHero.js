'use client'
import React from 'react';
import { Avatar, Box, IconButton, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image';
import { Circle, ShoppingCartOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import styles from '@/styles/homePage/HeroSection.module.css'
import Link from 'next/link';
import { numberFormatter } from '@/app/utils/functions';
const HomePageHero = ({ homePageHandler, homePageHero, items }) => {
    const [item1, item2] = items
    return (
        <>
            <Grid xs={0} sm={4} md={5} lg={4} sx={{ position: 'relative', display: { xs: 'none', sm: 'block' } }}>
                <Box variant='square' sx={{ height: { xs: 300, sm: 350, md: 400, lg: 500 }, }}>
                    <Avatar sx={{ height: 1, width: 1, borderRadius: 2, position: 'relative', boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)' }} variant='square'>
                        <Image priority src={homePageHero.smallImage} fill alt='واتچ داگز' style={{ objectFit: 'cover' }} />
                        <Box sx={{ position: 'absolute', height: 1, width: 1, right: 0, top: 0, background: 'linear-gradient(to top, rgba(16, 24, 32, 0.9), rgba(16, 24, 32, 0) 80%)' }} />
                    </Avatar>
                </Box>
                <Box className={styles.smallerHalfDescContainer}>
                    <Box className={styles.smallerHalfDesc}>
                        <Box sx={{ backgroundColor: '#af7ce2', padding: 1, borderRadius: 1.5, marginBottom: 2 }}>
                            <Typography variant='subtitle2' fontWeight={500}>
                                {homePageHero.title}
                            </Typography>
                        </Box>
                        <Typography variant='subtitle2' sx={{ color: 'white', fontWeight: 300, marginBottom: 1, display: { xs: 'none', md: 'block' } }}>
                            {homePageHero.desc}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1, alignItems: 'center' }}>
                            <Link href={`games/${homePageHero.slug}`}>
                                <IconButton >
                                    <ShoppingCartOutlined color='secondary' />
                                </IconButton>
                            </Link>
                            <Typography color='secondary' >
                                {numberFormatter(homePageHero.price)} تومان
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={12} sm={8} md={7} lg={8} className={styles.biggerHalfContainer}>

                <Grid sx={{ p: 0 }}>
                    <Avatar sx={{ width: 1, height: 1, borderRadius: 2, position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} variant='square'>
                        <Image priority src={homePageHero.bigImage} fill alt='عکس اسلایدر' className={homePageHero.slug} />
                        <Box sx={{ position: 'absolute', height: 1, width: 1, right: 0, top: 0, background: 'linear-gradient(to right, rgba(16, 24, 32, 0.8), rgba(16, 24, 32, 0) 80%)' }} />
                    </Avatar>
                </Grid>


                <Grid className={styles.heroInformation}>
                    <Typography>
                        ضمانت
                    </Typography>
                    <Typography>
                        تحویل سریع
                    </Typography>
                    <Typography>
                        پشتیبانی
                    </Typography>
                </Grid>

                <Box className={styles.switchContainer}>
                    <Box>
                        <Box sx={{ color: homePageHero.slug == item1.slug ? 'white' : grey[600] }} onClick={() => homePageHandler(item1)} className={styles.SliderController}>
                            <Circle />
                            <Typography>
                                {item1.title}
                            </Typography>
                        </Box>
                        <Box sx={{ color: homePageHero.slug == item2.slug ? 'white' : grey[600] }} onClick={() => homePageHandler(item2)} className={styles.SliderController}>
                            <Circle />
                            <Typography>
                                {item2.title}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Grid>
        </>
    );
};

export default HomePageHero;