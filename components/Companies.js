import React from 'react';
import { Box, Typography, Avatar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import { companiesData } from '@/constants/slidersData';
import styles from '@/styles/homePage/Companies.module.css'
const Companies = () => {
    return (
        <Box className={styles.mainContainer}>
            <Box className={styles.infoContainer}>
                <Typography variant='h6'>کمپانی ها</Typography>
                <Typography variant='subtitle2' sx={{ color: grey[600] }}>آرشیو محصولات کمپانی های معروف</Typography>
            </Box>
            <Grid container sx={{ width: 1, px: 1 }}>
                {companiesData.map((item, index) => (
                    <Grid key={index} xs={6} sm={4} sx={{ px: { xs: 1, md: 2 }, position: 'relative', mt: 3 }} >
                        <Box className={styles.hoverToTop}>
                            <Box className={styles.itemBg} />
                            <Box className={styles.itemsContainer} >
                                <Avatar className={styles.avatarContainer}>
                                    <Image style={{ objectFit: 'contain', width: '80%', height: '80%' }} src={item.image} alt={item.title} />
                                </Avatar>
                                <Typography className={styles.title}>
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