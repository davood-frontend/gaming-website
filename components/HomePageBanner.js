import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import banner from '@/assets/banner.jpg'
import bannerImage from '@/assets/bannerImage.png'
import styles from '@/styles/homePage/Banner.module.css'
const OverLay = ({ backGround }) => {
    return (
        <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: backGround }} />
    )
}
const HomePageBanner = () => {
    return (
        <Box className={styles.mainContainer}>
            <Avatar variant='square' sx={{ height: 1, width: 1, position: 'absolute' }}>
                <Image src={banner} fill style={{ filter: 'blur(3px)', objectFit: 'cover', objectPosition: 'top center' }} alt='عکس پس زمینه' />
            </Avatar>
            <OverLay backGround='linear-gradient(to bottom, #101820 90%, rgba(16, 24, 32, 0.5))' />
            <Box className={styles.actionContainer}>
                <Box sx={{ zIndex: 2, my: 'auto' }}>
                    <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }} className={styles.animatedTextShadow}>فیفا 2020</Typography>
                    <Typography variant='subtitle1' className={styles.animatedLine}>تجربه لذت واقعی فوتبال را بچشید</Typography>
                    <Button variant='outlined' color='secondary' sx={{ borderRadius: '50px', px: 3 }}>
                        خرید
                    </Button>
                </Box>
                <Avatar className={styles.smallAvatarContainer} variant='square'>
                    <Image src={bannerImage} fill style={{ objectFit: 'contain', objectPosition: 'center top' }} />
                </Avatar>
                <OverLay backGround='linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' />

            </Box>
        </Box>

    );
};

export default HomePageBanner; 