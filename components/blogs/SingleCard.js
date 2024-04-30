import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { CardActionArea } from '@mui/material';
import styles from '@/styles/blog/Style.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SingleCard = ({ item }) => {
    return (
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
                    <Typography className={styles.floatingText} sx={{ typography: { xs: 'body1', md: 'h6' } }} >
                        <span className={styles.insideText}>
                            {item.title}
                        </span>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <Typography sx={{ typography: { xs: 'caption', md: 'subtitle2' }, marginRight: 1 }}  className={styles.coloredText}>
                            بیشتر بخوانید
                        </Typography>
                        <ArrowBackIcon fontSize='small' />
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default SingleCard;