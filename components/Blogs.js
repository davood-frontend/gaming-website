import React, { useMemo } from 'react';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import cyberPunk from '@/assets/bannerCyberPunk.jpg'
import styles from '@/styles/homePage/Blogs.module.css'
import Image from 'next/image';
import { ArrowBack, ArrowBackIos } from '@mui/icons-material';
import { BlogsData } from '@/constants/slidersData';
const Blogs = () => {
    return (
        <Box sx={{ my: 20, px: { xs: '15px', sm: '30px', md: '10%' } }}>
            <Grid container width={1}>
                <Grid xs={12} md={8} sx={{ paddingRight: { xs: 'none', md: 4 }, mb: { xs: 4, md: 0 } }}>
                    <Avatar className={styles.avatarContainer} variant='square'>
                        <Image fill src={cyberPunk} style={{ borderRadius: 10, objectFit: 'cover' }} />
                        <Box sx={{ zIndex: 2, color: 'white', p: 2 }}>
                            <Typography sx={{ typography: { xs: 'caption', sm: 'body1' } }} color='warning.main'>15 مهر 1399 / توسط مدیریت</Typography>
                            <Typography sx={{ typography: { xs: 'subtitle2', sm: 'h6', md: 'h5' }, my: 1 }}>انتشار بازی Cyberpunk 2077 دیگر عقب نخواهد افتاد</Typography>
                            <Typography sx={{ typography: { xs: 'caption', sm: 'subtitle2' }, display: 'flex', alignItems: 'center' }}>بیشتر بخوانید <ArrowBack sx={{ mr: 0.5 }} /></Typography>
                        </Box>
                    </Avatar>
                </Grid>
                <Grid xs={12} md={4} sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, justifyContent: 'space-around' }} container spacing={2}>
                    {BlogsData.map((item, index) => {
                        const randomNumber = useMemo(() => Math.floor(Math.random() * (13 - 8 + 1) + 9), [])
                        return (
                            <Grid xs={12} sm={6} md={12} key={index}>
                                <Card className={styles.cardContainer}>
                                    <CardMedia className={styles.cardMedia}>
                                        <Avatar sx={{ width: 1, height: 1 }} variant='square'>
                                            <Image fill src={item.image} style={{ objectFit: 'cover' }} />
                                        </Avatar>
                                    </CardMedia>
                                    <CardContent className={styles.cardContent} sx={{ '&.MuiCardContent-root': { padding: { xs: 2, lg: 1 } } }}>
                                        <Typography sx={{ typography: { xs: 'subtitle2', md: 'h6' }, width: { sm: '560px' }, animation: { xs: 'none', sm: `transform ${randomNumber}s linear infinite` } }}>{item.data}</Typography>
                                        <Typography variant='subtitle2' sx={{ display: { xs: 'none', lg: 'block' } }}>{item.creator}</Typography>
                                        <Typography variant='caption' color='secondary'>{item.date}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                    <Grid xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: { xs: 2, lg: 'none' } }}>
                        <Typography color='white'>مشاهده همه پست ها</Typography>
                        <ArrowBackIos color='warning' />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Blogs;