import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Avatar, Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/games/Main.module.css'
import Link from 'next/link';
const Product = ({ data, group }) => {

    //if the number is 0 it returns free and if its more, it returns the number 3 by 3 formatted with ","
    const priceFormatter = (num) => {
        if (num === 0) {
            return 'رایگان'
        } else {
            num = parseInt(num)
            let formatted = num.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 3 })
            return formatted + ' هزار تومان'
        }
    }
    let { price, type, image, title, slug } = data
    price = priceFormatter(price)

    return (
        <Grid xs={12} smBefore={6} smAfter={4} lg={3}>
            <Card sx={{ borderRadius: 3 }} className={styles.gameCard}>
                <CardMedia sx={{ p: { xs: 1, sm: 2 } }}>
                    <Avatar variant='square' sx={{ height: { xs: 200, sm: 250 }, width: 1, borderRadius: 3 }}>
                        <Image src={image} fill style={{ objectFit: 'cover' }} />
                    </Avatar>
                </CardMedia>
                <CardContent sx={{ py: 1 }}>
                    <Typography textAlign='center' variant='h6' fontSize={{ xs: 14, sm: 18 }}>
                        {title}
                    </Typography>
                    <Divider sx={{ height: 4, my: 2, borderRadius: 2 }} className={styles.bgHover} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant='subtitle2' fontSize={{ xs: 11, sm: 13 }}>{type}</Typography>
                        <Typography variant='subtitle2' fontSize={{ xs: 11, sm: 13 }}>{price}</Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{ p: 1.5 }}>
                    {/* if the argument is "games" the link navigates to the games page otherwise it navigates to the consoles page, in both case the title is sent for metaData */}
                    <Link href={group === 'games' ? { pathname: `games/${slug}`, query: { name: title } } : { pathname: `consoles/${slug}`, query: { name: title } }} style={{ width: '100%' }}>
                        <Button variant='contained' fullWidth className={styles.bgHover}>مشاهده محصول</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Product;