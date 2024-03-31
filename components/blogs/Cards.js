import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import batman from '@/assets/batmanArkham.jpg'
import Grid from '@mui/material/Unstable_Grid2'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '@/styles/blog/Style.module.css'
const sample = [{}, {}, {}, {}, {}]
const fetchData = async () => {
    const res = await fetch('http://localhost:3000/api/blogs')
    const data = await res.json()
    return data
}
const Cards = async () => {
    const data = await fetchData()

    return (
        <Box sx={{ pt: { xs: 5, md: 25 }, pb: 15 }}>
            <Typography variant='h2' color='secondary' sx={{ textAlign: 'center', fontWeight: 800, textShadow: '0 0 10px rgba(175,124,226,0.5)' }}>وبلاگ</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container width={1} columnSpacing={3}>
                    {data.map((item, index) => (
                        <Grid key={index} xs={12} smBefore={6} smAfter={4} sx={{ mt: 3 }}>
                            <Card sx={{ borderRadius: 2.5, boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }} className={styles.hoverTop}>
                                <CardActionArea>
                                    <CardMedia className={styles.overLay}>
                                        <Avatar sx={{ height: { xs: '200px', md: '150px', lg: '250px' }, width: 1 }} variant='rounded'>
                                            <Image fill src={item.img} style={{ objectFit: 'cover' }} />
                                        </Avatar>
                                    </CardMedia>
                                    <CardContent sx={{ backgroundColor: '#192531', '&.MuiCardContent-root': { p: 1.5 } }}>
                                        <Breadcrumbs>
                                            <Typography variant='caption' color='warning.main'>1 شهریور</Typography>
                                            <Typography variant='caption' color='warning.main'>توسط مدیریت</Typography>
                                        </Breadcrumbs>
                                        <Typography className={styles.floatingText} sx={{ typography: { xs: 'body1', md: 'h6' } }}>
                                            <span className={styles.insideText}>
                                                {item.title}
                                            </span>
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                            <Typography sx={{ typography: { xs: 'caption', md: 'subtitle2' }, marginRight: 1 }} className={styles.coloredText}>
                                                بیشتر بخوانید
                                            </Typography>
                                            <ArrowBackIcon fontSize='small' />
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </Box>
    );
};

export default Cards;