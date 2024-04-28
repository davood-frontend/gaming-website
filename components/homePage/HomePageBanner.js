import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from '@/styles/homePage/Banner.module.css'
import Link from 'next/link';
const OverLay = ({ backGround }) => {
    return (
        <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: backGround }} />
    )
}
const HomePageBanner = ({ data }) => {
    const { bannerData } = data;
    console.log(bannerData)
    return (
        <Box className={styles.mainContainer}>
            <Avatar variant='square' sx={{ height: 1, width: 1, position: 'absolute' }}>
                <Image src={bannerData.bg} fill style={{ filter: 'blur(3px)', objectFit: 'cover', objectPosition: 'top center' }} alt='عکس پس زمینه' />
            </Avatar>
            <OverLay backGround='linear-gradient(to bottom, #101820 90%, rgba(16, 24, 32, 0.5))' />
            <Box className={styles.actionContainer}>
                <Box sx={{ zIndex: 2, my: 'auto' }}>
                    <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }} className={styles.animatedTextShadow}>{bannerData.title}</Typography>
                    <Typography variant='subtitle1' className={styles.animatedLine}>{bannerData.desc}</Typography>
                    <Link href={`games/${bannerData.slug}`}>
                        <Button variant='outlined' color='secondary' sx={{ borderRadius: '50px', px: 3 }}>
                            خرید
                        </Button>
                    </Link>
                </Box>
                <Avatar className={styles.smallAvatarContainer} variant='square'>
                    <Image src={bannerData.cover} fill style={{ objectFit: 'contain', objectPosition: 'center top' }} />
                </Avatar>
                <OverLay backGround='linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' />

            </Box>
        </Box>

    );
};

export default HomePageBanner; 