import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import guarente from '@/assets/icons/guarante.png'
import support from '@/assets/icons/support.png'
import delivery from '@/assets/icons/delivery.png'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image';
const infoData = [
    {
        title: 'ضمانت',
        caption: 'تضمین محصولات',
        icon: guarente
    },
    {
        title: 'تحویل سریع',
        caption: 'تحویل 24 ساعته',
        icon: delivery
    },
    {
        title: 'پشتیبانی',
        caption: 'پاسخگویی 24/7',
        icon: support
    },
]
const numberFormatter = (num) => {
    num = parseInt(num)
    let formatted = num.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 3 })
    return formatted
}
const AddToChart = ({ data }) => {
    const price = numberFormatter(data.price)
    return (
        <Grid sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: 3, p: 2, my: 4, color: 'white' }} container>
            <Grid xs={12} md={9} container>
                {infoData.map((item, index) => (
                    <Grid sx={{ display: 'flex', py: 2 }} xs={12} sm={4} key={index}>
                        <Avatar variant='rounded' sx={{ backgroundColor: 'transparent', height: 50, width: 50, marginRight: 2 }}>
                            <Image fill style={{ objectFit: 'contain' }} src={item.icon} />
                        </Avatar>
                        <Box>
                            <Typography variant='subtitle' sx={{ fontWeight: 600 }}>
                                {item.title}
                            </Typography>
                            <Typography variant='subtitle2' sx={{ fontWeight: 300, mt: 0.5 }}>
                                {item.caption}
                            </Typography>
                        </Box>
                    </Grid>
                ))}


            </Grid>
            <Divider orientation='vertical' flexItem sx={{ mr: "-1px", display: { xs: 'none', md: 'block' } }} />
            <Grid xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingLeft: { xs: 0, md: 4 }, paddingTop: { xs: 3, md: 0 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 2, md: 0 } }}>
                    <Typography>قیمت : </Typography>
                    <Typography>{price == 0 ? 'رایگان' : `${price} تومان`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField defaultValue={1} size='small' variant='standard' sx={{ backgroundColor: '#192531', borderRadius: 1, pt: 0.5, px: 1, flexBasis: '20%', '&.MuiFormControl-root': { my: 'auto' } }} InputProps={{ disableUnderline: true, inputProps: { min: 1, max: 10 } }} />
                    <Button variant='contained' color='secondary' sx={{ flexBasis: '75%', boxShadow: '0 0 10px rgba(254, 231, 21, 0.5)' }}>خرید</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AddToChart;
