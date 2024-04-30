import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import icon from '@/assets/about/gameController.png'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image';

const Services = ({servicesData}) => {
    return (
        <Box sx={{ paddingTop: { xs: 8, md: 25 }, textAlign: 'center', mb: 10 }}>
            <Typography variant='h2' color='secondary' sx={{ fontWeight: 900, textShadow: '0 0 10px rgba(175,124,226,0.5) !important' }}>
                درباره ما
            </Typography>
            <Box sx={{ mt: { xs: 5, md: 10 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ mb: 2.5 }}>
                    <Typography variant='h5' color='secondary' fontWeight={500}>خدمات</Typography>
                    <Typography variant='subtitle1' color='white' fontWeight={200}>برخی از خدماتی که ما به شما ارائه میکنیم</Typography>
                </Box>
                <Grid container columnSpacing={{ sm: 3, md: 4, lg: 7 }} width={1} position='relative'>
                    {servicesData.map((item, index) => (
                        <Grid xs={12} smAfter={4} key={index} sx={{ mb: { xs: 2, smAfter: 0 } }}>
                            <Box sx={{ backgroundColor: '#192531', boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)', color: 'white', px: { xs: 2, lg: 4 }, py: 4, borderRadius: 2.5 }}>
                                <Avatar variant='square' sx={{ height: { xs: 80, lg: 100 }, width: { xs: 80, lg: 100 }, backgroundColor: 'transparent', mx: 'auto' }}>
                                    <Image src={icon} fill style={{ objectFit: 'contain' }} />
                                </Avatar>
                                <Typography variant='h5' color='secondary' sx={{ my: 2.7, fontWeight: 700 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                    <Box sx={{ position: 'absolute', width: 9 / 10, height: '3px', backgroundColor: '#af7ce2', top: '50%', zIndex: -1, right: '5%', display: { xs: 'none', smAfter: 'block' } }} />

                </Grid>
            </Box>
        </Box>
    );
};

export default Services;