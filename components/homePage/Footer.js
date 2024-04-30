'use client'
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import Link from 'next/link';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { grey } from '@mui/material/colors';
import styles from '@/styles/homePage/Footer.module.css'
import BackGround from '../footer/BackGround';

const TitleCaption = ({ children }) => {
    return (
        <Typography variant='subtitle1' sx={{ fontWeight: 200, mb: { xs: 2, md: 5 }, mt: 1, color: 'white', color: grey[500] }}>
            {children}
        </Typography>
    )
}
const CostumLink = ({ children }) => {
    return (
        <Typography  sx={{ mb: 1.5 }} variant='subtitle1'>
            <Link href='' style={{ textDecoration: 'none', color: 'white' }}>
                {children}
            </Link>
        </Typography>
    )
}
const ContactItem = ({ Icon, text }) => {
    return (
        <Box sx={{ color: 'white', display: 'flex', mb: 3 }}>
            <Icon color='secondary' />
            <Typography sx={{ ml: 2 }} variant='subtitle1'>{text}</Typography>
        </Box>
    )
}

const Footer = () => {


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <BackGround />
            <Grid container width={1} sx={{ px: { sm: '2%', md: '4%', lg: '10%' } }} columnSpacing={5}>
                <Grid xs={12} md={5} sx={{ mb: { xs: 5, md: 0 } }}>
                    <Typography variant='h6' color='secondary'>دمو قالب گیم پلاس</Typography>
                    <TitleCaption>دنیای بازی</TitleCaption>
                    <Typography variant='subtitle1' color='white' sx={{ wordSpacing: 4 }} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان اساسا مورد استفاده قرار گیرد.</Typography>
                </Grid>
                <Grid xs={12} sm={6} md={3.5} sx={{ mb: { xs: 5, sm: 0 } }}>
                    <Typography variant='h6' color='secondary'>لینک های مفید</Typography>
                    <TitleCaption>دسترسی آسان به تمامی بخش های فروشگاه</TitleCaption>
                    <Box>
                        <CostumLink>خانه</CostumLink>
                        <CostumLink>فروشگاه</CostumLink>
                        <CostumLink>وبلاگ</CostumLink>
                        <CostumLink>درباره ما</CostumLink>
                        <CostumLink>تماس با ما</CostumLink>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6} md={3.5} sx={{ mb: { xs: 5, sm: 0 } }}>
                    <Typography variant='h6' color='secondary'>ارتباط با ما</Typography>
                    <TitleCaption>سوالات و پیشنهادات خود را مطرح کنید</TitleCaption>
                    <Box>
                        <ContactItem Icon={EmailOutlinedIcon} text={'name@template.com'} />
                        <ContactItem Icon={LocalPhoneIcon} text={'211230123'} />
                        <ContactItem Icon={LocalPhoneIcon} text={'09012345678'} />
                        <ContactItem Icon={SupportAgentIcon} text={'ارسال تیکت'} />
                    </Box>
                </Grid>
            </Grid>
            <Box className={styles.topFadeBorder} sx={{ mt: 3 }}>
                <Typography color='white'>تمامی حقوق محفوظ میباشد</Typography>
            </Box>
        </Box>
    );
};

export default Footer;