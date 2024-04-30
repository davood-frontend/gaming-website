import React from 'react';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import styles from '@/styles/homePage/Blogs.module.css'
import Image from 'next/image';
import { ArrowBack, ArrowBackIos } from '@mui/icons-material';
import Link from 'next/link';
import { fetchAllBlogs } from '@/app/services/requests';

const Blogs = async () => {
    const data = await fetchAllBlogs()
    const bigBlog = data[5]
    const smallBlogs = data.slice(0, 4)
    return (
        <Box sx={{ my: 20, px: { xs: '15px', sm: '30px', md: '10%' } }}>
            <Grid container width={1}>
                <Grid xs={12} md={8} sx={{ paddingRight: { xs: 'none', md: 4 }, mb: { xs: 4, md: 0 } }}>
                    <Link href={`blogs/${bigBlog._id}`}>
                        <Avatar className={styles.avatarContainer} variant='square'>
                            <Image fill src={bigBlog.img} style={{ borderRadius: 10, objectFit: 'cover' }} />
                            <Box sx={{ zIndex: 2, color: 'white', p: 2 }}>
                                <Typography sx={{ typography: { xs: 'caption', sm: 'body1' } }} color='warning.main'>15 مهر 1399 / توسط مدیریت</Typography>
                                <Typography sx={{ typography: { xs: 'subtitle2', sm: 'h6', md: 'h5' }, my: 1 }}>{bigBlog.title}</Typography>
                                <Typography sx={{ typography: { xs: 'caption', sm: 'subtitle2' }, display: 'flex', alignItems: 'center' }}>بیشتر بخوانید <ArrowBack sx={{ mr: 0.5 }} /></Typography>
                            </Box>
                        </Avatar>
                    </Link>
                </Grid>
                <Grid xs={12} md={4} sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, justifyContent: 'space-around' }} container spacing={2}>
                    {smallBlogs.map((item, index) => {

                        return (
                            <Grid xs={12} sm={6} md={12} key={index}>
                                <Link href={`blogs/${item._id}`}>


                                    <Card className={styles.cardContainer}>
                                        <CardMedia className={styles.cardMedia}>
                                            <Avatar sx={{ width: 1, height: 1 }} variant='square'>
                                                <Image fill src={item.img} style={{ objectFit: 'cover' }} />
                                            </Avatar>
                                        </CardMedia>
                                        <CardContent className={styles.cardContent} sx={{ '&.MuiCardContent-root': { padding: { xs: 2, lg: 1 } } }}>
                                            <Typography sx={{ typography: { xs: 'subtitle2', md: 'h6' }, width: { sm: '560px' }, animation: { xs: 'none', sm: `transform ${18}s linear infinite` } }}>{item.title}</Typography>
                                            <Typography variant='subtitle2' sx={{ display: { xs: 'none', lg: 'block' } }}>مدیریت</Typography>
                                            <Typography variant='caption' color='secondary'>1 شهریور 1399</Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
                    <Link href='blogs'>
                        <Grid xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: { xs: 2, lg: 'none' } }}>
                            <Typography color='white'>مشاهده همه پست ها</Typography>
                            <ArrowBackIos color='warning' />
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Blogs;