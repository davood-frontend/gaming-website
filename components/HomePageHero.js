import React from 'react';
import { Box, Avatar, Typography, } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image';
import { Circle, ShoppingCartOutlined } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const OverLay = ({ backGround }) => {
    return (
        <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: backGround, zIndex: 1 }} />
    )
}
const HomePageHero = ({ homePageHandler, homePageHero }) => {

    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <Grid xs={0} sm={4} md={5} lg={4} sx={{ position: 'relative', display: { xs: 'none', sm: 'block' } }}>
                <Avatar variant='square' sx={{ width: 1, height: { sm: '300px', md: '400px', lg: '500px' }, borderRadius: { xs: 2, md: 4 }, position: 'relative', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                    <Image src={homePageHero.smallerHalf} fill style={{ objectFit: 'cover', zIndex: 0, objectPosition: 'center center' }} alt='واتچ داگز' className={homePageHero.class} />
                    <OverLay backGround='linear-gradient(to top, rgba(16, 24, 32, 0.9), rgba(16, 24, 32, 0) 80%)' />
                </Avatar>
                <Box sx={{ position: 'absolute', px: 3, pb: 3, height: 1, width: 1, top: 0, right: 0, zIndex: 2, display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: 1 }}>
                        <Box sx={{ backgroundColor: theme.palette.secondary.main, p: 1, borderRadius: 1.5, marginBottom: 2 }}>
                            <Typography variant={smallerThanMd ? 'subtitle2' : 'h6'}>
                                واچ داگز 2
                            </Typography>
                        </Box>
                        <Typography variant='subtitle2' sx={{ color: 'white', fontWeight: 300, mb: 1, display: smallerThanMd ? 'none' : 'block' }}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متو
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1 }}>
                            <ShoppingCartOutlined sx={{ color: theme.palette.secondary.main }} />
                            <Typography sx={{ color: theme.palette.secondary.main }}>
                                150,000 تومان
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={12} sm={8} md={7} lg={8} sx={{ position: 'relative', gridTemplateRows: { xs: '250px 50px', md: '350px 50px', lg: '450px 50px' }, display: 'grid' }}>

                <Grid sx={{ p: 0 }}>
                    <Avatar variant='square' sx={{ width: 1, borderRadius: { xs: 2, md: 4 }, height: 1, position: 'relative', display: 'grid', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                        <OverLay backGround='linear-gradient(to left, rgba(16, 24, 32, 0.8), rgba(16, 24, 32, 0) 80%)' />
                        <Image src={homePageHero.biggerHalf} fill style={{ objectFit: 'cover', zIndex: 0, objectPosition: 'center center' }} alt='اساسینز کرید' className={homePageHero.class} />
                    </Avatar>
                </Grid>


                <Grid sx={{ width: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', mt: 'auto', px: 3, py: 1, borderRadius: 1, color: grey[700], justifyContent: 'space-between', display: 'flex' }}>
                    <Typography sx={{ fontWeight: 400 }}>
                        ضمانت
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }}>
                        تحویل سریع
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }}>
                        پشتیبانی
                    </Typography>
                </Grid>

                <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'start', paddingRight: 3 }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 1, color: !homePageHero.id ? grey[600] : 'white' }} onClick={() => homePageHandler('devilMayCry')} className='HomePageSliderController'>
                            <Circle sx={{ fontSize: '10px' }} />
                            <Typography sx={{ fontWeight: 500 }}>
                                دویل می کرای
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: homePageHero.id ? grey[600] : 'white' }} onClick={() => homePageHandler('watchDogs')} className='HomePageSliderController'>
                            <Circle sx={{ fontSize: '10px' }} />
                            <Typography sx={{ fontWeight: 500 }}>
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