import React from 'react';
import { Box, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image';
import { Circle, ShoppingCartOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import styles from '@/styles/homePage/HeroSection.module.css'

const HomePageHero = ({ homePageHandler, homePageHero }) => {


    return (
        <>
            <Grid xs={0} sm={4} md={5} lg={4} className={styles.smallerHalfContainer}>
                <Box variant='square' className={styles.smallerHalfAvatar}>
                    <Image src={homePageHero.smallerHalf} fill alt='واتچ داگز' className={homePageHero.class} />
                    <Box className={styles.smallerHalfOverlay} />
                </Box>
                <Box className={styles.smallerHalfDescContainer}>
                    <Box className={styles.smallerHalfDesc}>
                        <Box className={styles.smallerHalfNameContainer}>
                            <Typography variant='subtitle2'>
                                واچ داگز 2
                            </Typography>
                        </Box>
                        <Typography variant='subtitle2' className={styles.smallerHalfInfo}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متو
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1 }}>
                            <ShoppingCartOutlined color='secondary' />
                            <Typography color='secondary' >
                                150,000 تومان
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={12} sm={8} md={7} lg={8} className={styles.biggerHalfContainer}>

                <Grid sx={{ p: 0 }} className={styles.biggerHalfAvatar}>
                    <Box className={styles.biggerHalfOverlay} />
                    <Image src={homePageHero.biggerHalf} fill alt='عکس اسلایدر' className={homePageHero.class} />
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
                        <Box sx={{ color: !homePageHero.id ? grey[600] : 'white' }} onClick={() => homePageHandler('devilMayCry')} className={styles.SliderController}>
                            <Circle />
                            <Typography>
                                دویل می کرای
                            </Typography>
                        </Box>
                        <Box sx={{ color: homePageHero.id ? grey[600] : 'white' }} onClick={() => homePageHandler('watchDogs')} className={styles.SliderController}>
                            <Circle />
                            <Typography>
                                واچ داگز
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Grid>
        </>
    );
};

export default HomePageHero;