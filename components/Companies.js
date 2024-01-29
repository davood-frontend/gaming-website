import React from 'react';
import { Box, Typography, Avatar, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import eaSports from '@/assets/companies/eaSports.png'
import epicGames from '@/assets/companies/epicGames.png'
import rockStar from '@/assets/companies/rockStar.png'
import ubisoft from '@/assets/companies/ubisoft.png'
import atari from '@/assets/companies/atari.png'
import nintendo from '@/assets/companies/nintendo.png'
import { useTheme } from '@mui/material/styles';

const Companies = () => {
    const theme = useTheme()
    const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm')) //false by default

    const data = [
        {
            image: atari,
            title: 'آتاری'
        },
        {
            image: epicGames,
            title: 'اپیک گیمز'
        },
        {
            image: eaSports,
            title: 'الکترونیک آرتز'
        },
        {
            image: rockStar,
            title: 'راکستار'
        },
        {
            image: nintendo,
            title: 'نینتندو'
        },
        {
            image: ubisoft,
            title: 'یوبیسافت'
        },

    ]
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', px: { xs: '1%', md: '7%', lg: '10%' }, mt: 15 }}>
            <Box sx={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 1, mb: 1, px: 1 }}>
                <Typography variant='h6'>کمپانی ها</Typography>
                <Typography variant='subtitle2' sx={{ color: grey[600] }}>آرشیو محصولات کمپانی های معروف</Typography>
            </Box>
            <Grid container sx={{ width: 1, px: 1 }}>
                {data.map((item, index) => (
                    <Grid xs={6} sm={4} sx={{ px: { xs: 1, md: 2 }, position: 'relative', mt: 3 }} >
                        <Box className='companies-hover-to-top'>
                            <Box className='bg' />
                            <Box sx={{ color: 'white', position: 'absolute', height: 1, width: 1, top: 0, right: 0, justifyContent: 'space-evenly', alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
                                <Avatar sx={{ backgroundColor: theme.palette.secondary.main, width: { xs: '60px', md: '90px' }, height: { xs: '60px', md: '90px' } }}>
                                    <Image style={{ objectFit: 'contain', width: '80%', height: '80%' }} src={item.image} />
                                </Avatar>
                                <Typography sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '80%', py: 0.5, textAlign: 'center', borderRadius: 5, color: theme.palette.secondary.main }} variant={smallerThanSm ? 'subtitle2' : 'h7'}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}


            </Grid>
        </Box>
    );
};

export default Companies;