import React from 'react';
import Image from 'next/image';
import { Box, Avatar, Button, Typography } from '@mui/material'
import banner from '@/assets/banner.jpg'
import bannerImage from '@/assets/bannerImage.png'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
const OverLay = ({ backGround }) => {
    return (
        <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: backGround, zIndex: 1 }} />
    )
}
const HomePageBanner = () => {
    const theme = useTheme()
    const largerThanMd = useMediaQuery(theme.breakpoints.up('md')) //false by default
    const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm')) //false by default

    return (
        <Box sx={{ position: 'relative', height: { xs: '200px', sm: '300px', md: '460px' }, mt: 8 }} className='container'>
            <Avatar variant='square' sx={{ height: 1, width: 1, position: 'absolute' }}>
                <Image src={banner} fill style={{ filter: 'blur(3px)', objectFit: 'cover', objectPosition: 'top center' }} alt='عکس پس زمینه' />
            </Avatar>
            <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: 'linear-gradient(to bottom, #101820 10%, rgba(16, 24, 32, 0.5))' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: '7%', md: '10%' }, height: 1, alignItems: 'end' }}>
                <Box sx={{ zIndex: 2, my: 'auto' }}>
                    <Typography sx={{ color: theme.palette.secondary.main, fontWeight: 500, mb: 2 }} variant={largerThanMd ? 'h4' : 'h5'} className='banner-animated-textShadow'>فیفا 2020</Typography>
                    <Typography variant='subtitle1' sx={{ color: 'white', fontSize: { xs: '15px', md: '18px' }, mb: 4.5, position: 'relative', display: { xs: 'none', sm: 'block' } }} className='banner-animated-line'>تجربه لذت واقعی فوتبال را بچشید</Typography>
                    <Button variant='outlined' color='secondary' sx={{ borderRadius: '50px', px: 3 }} size={smallerThanSm ? 'small' : 'medium'}>
                        خرید
                    </Button>
                </Box>
                <Avatar sx={{ height: { xs: '200px', sm: '250px', md: '400px' }, width: { xs: '200px', sm: '300px' }, backgroundColor: 'transparent' }} variant='square'>
                    <Image src={bannerImage} fill style={{ objectFit: 'contain', objectPosition: 'center top' }} />
                </Avatar>
                <OverLay backGround='linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' />

            </Box>
        </Box>

    );
};

export default HomePageBanner; 