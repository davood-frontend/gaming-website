'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2'
const Title = ({ data }) => {
    const path = usePathname()
    const isGamePage = path.includes('games')
    const platformsData = () => {
        //translates the platforms into persian
        const platforms = data.platforms && data.platforms.join(', ')
        let translated = platforms.replace(/xbox/g, 'ایکس باکس')
        translated = translated.replace(/pc/g, 'کامپیوتر')
        translated = translated.replace(/ps/g, 'پلی استیشن')
        translated = translated.replace(/nintendo/g, 'نینتندو سوییچ')
        return translated
    }

    return (
        <Box>
            <Box color='white'>
                <Typography variant='h5' >{data.title}</Typography>
                <Box sx={{ display: 'flex', width: 1, my: 2 }}>
                    <Grid width={1} container sx={{ alignItems: 'center' }}>
                        <Grid xs={12} md={4} lg={3}>
                            <Box sx={{ display: 'flex', marginRight: 3 }}>
                                <AppsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                                <Typography sx={{ fontWeight: 200 }} variant='subtitle1'>دسته بندی :  {data.type || data.category}</Typography>
                            </Box>
                        </Grid>
                        <Grid sx={{ mt: { xs: 1, md: 0 } }} xs={12} md={8} lg={9}>
                            <Box sx={{ display: 'flex' }}>
                                <SportsEsportsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                                {
                                    isGamePage ? (
                                        <Typography sx={{ fontWeight: 200 }} variant='subtitle1'>پلتفرم : {platformsData()} </Typography>
                                    ) : (
                                        <Typography sx={{ fontWeight: 200 }} variant='subtitle1'>سازنده : {data.company} </Typography>
                                    )
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Title;
// {platforms}