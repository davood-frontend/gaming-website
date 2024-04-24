import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2'
import fixPhone from '@/assets/contact/fixPhone.svg'
import mail from '@/assets/contact/mail.svg'
import phone from '@/assets/contact/phone.svg'
import send from '@/assets/contact/send.svg'
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Line = ({ pos }) => {
    if (pos === 'top') {
        return (
            <>
                <Box sx={{ position: 'absolute', width: '3px', height: { xs: '10px', md: '30px' }, top: '10px', right: '10px', background: '#fee715', boxShadow: '0 0 10px rgba(254, 231, 21, 0.5)', borderRadius: '50px' }}></Box>
                <Box sx={{ position: 'absolute', width: { xs: '10px', md: '30px' }, height: '3px', top: '10px', right: '10px', background: '#fee715', boxShadow: '0 0 10px rgba(254, 231, 21, 0.5)', borderRadius: '50px' }}></Box>
            </>
        )
    } else {
        return (
            <>
                <Box sx={{ position: 'absolute', width: '3px', height: { xs: '10px', md: '30px' }, bottom: '10px', left: '10px', background: '#fee715', boxShadow: '0 0 10px rgba(254, 231, 21, 0.5)', borderRadius: '50px' }}></Box>
                <Box sx={{ position: 'absolute', width: { xs: '10px', md: '30px' }, height: '3px', bottom: '10px', left: '10px', background: '#fee715', boxShadow: '0 0 10px rgba(254, 231, 21, 0.5)', borderRadius: '50px' }}></Box>
            </>
        )
    }
}
const data = [
    {
        img: phone,
        text: '211230123'
    },
    {
        img: fixPhone,
        text: '09101234567'
    },
    {
        img: mail,
        text: 'INFO@GAMEPLUS.IR'
    },
    {
        img: send,
        text: 'ارسال تیکت'
    },
]
const ContactWays = () => {
    return (
        <Box sx={{ pt: { xs: 5, md: 25 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h2' color='secondary' fontSize={{ xs: 35, sm: 45, md: 55 }} fontWeight={{ xs: 600, sm: 700, md: 900 }} sx={{ textShadow: '0 0 10px rgba(175,124,226,0.5)', mb: 3 }}>
                    راه های ارتباطی
                </Typography>
                <Typography variant='h5' fontWeight={200} color='white' fontSize={{ xs: 15, sm: 18, md: 22 }}>
                    CONTACT WAYS
                </Typography>
            </Box>
            <Grid container columnSpacing={{ xs: 2, lg: 4 }} rowSpacing={{ xs: 2, md: 0 }} sx={{ pt: 7 }}>
                {data.map((item, index) => (
                    <Grid xs={6} sm={3} key={index}>
                        <Box sx={{ backgroundColor: '#101820', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)', borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4, position: 'relative', }}>
                            <Line pos='top' />
                            <Avatar variant='square' sx={{ backgroundColor: 'transparent', height: { xs: 50, smAfter: 60, md: 70, lg: 80 }, width: { xs: 50, smAfter: 60, md: 70, lg: 80 }, mb: 2 }}>
                                <Image fill src={item.img} style={{ objectFit: 'cover' }} />
                            </Avatar>
                            <Typography sx={{ color: 'white', fontWeight: 200, fontSize: { xs: 12, smAfter: 14, md: 16, lg: 18 } }} variant='h6'>
                                {item.text}
                            </Typography>
                            <Line pos='bottom' />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ background: '#101820', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)', display: 'flex', p: 2, alignItems: 'center', mt: 4 }}>
                <Box color='warning.main' sx={{ display: 'flex' }}>
                    <LocationOnIcon sx={{ fontSize: { xs: 15, sm: 20 } }} />
                    <Typography sx={{ mx: 1, whiteSpace: 'nowrap' }} fontSize={{ xs: 12, sm: 15 }}>
                        آدرس :
                    </Typography>
                </Box>
                <Box color='white'>
                    <Typography fontSize={{ xs: 12, sm: 15 }} fontWeight={300}>
                        ایران، تهران، خیابان شماره 71، کوچه شماره 4، پلاک 7
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactWays;