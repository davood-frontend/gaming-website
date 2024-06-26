import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Avatar from '@mui/material/Avatar';
import Image from 'next/legacy/image';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fetchHeroData } from '@/app/services/requests';
const ItemContainer = ({ children, href, desc }) => {
    return (
        <Link href={`/games/${href}`}>
            <Avatar variant='square' sx={{ height: 1, width: 1, borderRadius: 1.5, position: 'relative' }}>
                <Box sx={{ position: 'relative', width: 1, height: 1, bottom: 0, left: 0, zIndex: 1, transition: '0.4s', opacity: 0, ":hover": { opacity: 1 }, display: { xs: 'none', md: 'block' } }}>
                    <Typography sx={{ position: 'absolute', height: 'auto', width: '90%', top: '5%', left: '50%', transform: 'translateX(-50%)', color: 'white', fontWeight: 300, backgroundColor: 'rgba(0,0,0,0.6)', padding: { xs: 1, md: 2 }, borderRadius: 2, fontSize: { md: 11, md: 13 } }}>
                        {desc}
                    </Typography>
                </Box>
                {children}
            </Avatar>
        </Link>
    )
}



const HeroContainer = async () => {
    const data = await fetchHeroData()
    const [homeHeroData, shopHeroData] = data
    const { shopHero } = shopHeroData
    const smallImages = shopHero.filter(item => item.type == 'small')
    const mainItem = shopHero.find(item => item.type == 'main')
    const secondaryItem = shopHero.find(item => item.type == 'secondary')
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: { xs: 2, sm: 5, md: 20 } }}>
            <Grid container columns={20} height={{ xs: 300, md: 400, lg: 500 }} width={1} spacing={{ xs: 0.8, md: 1.5 }}>
                <Grid xs={0} sm={6} display={{ xs: 'none', sm: 'block' }}>
                    <ItemContainer href={secondaryItem.slug} desc={secondaryItem.desc}>
                        <Image priority layout='fill' objectFit='cover' placeholder='blur' blurDataURL={secondaryItem.img} src={secondaryItem.img} alt='عکس بنر' />
                    </ItemContainer>
                </Grid>
                <Grid container xs={20} sm={14} direction='column'>
                    <Grid height={3 / 5}>
                        <ItemContainer href={mainItem.slug} desc={mainItem.desc}>
                            <Image priority layout='fill' objectFit='cover' placeholder='blur' blurDataURL={mainItem.img} src={mainItem.img} alt='عکس بنر' />
                        </ItemContainer>
                    </Grid>
                    <Grid height={2 / 5} container columns={12} rowSpacing={0}>
                        {smallImages.map((item, index) => (
                            <Grid xs={4} key={index}>
                                <ItemContainer href={item.slug} desc={item.desc}>
                                    <Image priority layout='fill' objectFit='cover' placeholder='blur' blurDataURL={item.img} src={item.img} alt='عکس بنر' />
                                </ItemContainer>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
            </Grid>
        </Box>


    );
};

export default HeroContainer;
