import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import { usePathname } from 'next/navigation';
const Title = ({ data }) => {
    const path = usePathname()
    const isGamePage = path.includes('games')
    const platformsData = () => {
        const platforms = data.platforms && data.platforms.join(', ')
        let translated = platforms.replace(/xbox/g, 'ایکس باکس')
        translated = translated.replace(/pc/g, 'کامپیوتر')
        translated = translated.replace(/ps/g, 'پلی استیشن')
        return translated
    }

    return (
        <Box>
            <Box color='white'>
                <Typography variant='h5'>{data.title}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'start', width: 1, my: 2 }}>
                    <Box sx={{ display: 'flex', marginRight: 3 }}>
                        <AppsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                        <Typography sx={{ fontWeight: 200 }}>دسته بندی :  {data.type || data.category}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <SportsEsportsIcon sx={{ marginRight: 0.5 }} color='secondary' />
                        {
                            isGamePage ? (
                                <Typography sx={{ fontWeight: 200 }}>پلتفرم : {platformsData()} </Typography>
                            ) : (
                                <Typography sx={{ fontWeight: 200 }}>سازنده : {data.company} </Typography>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Title;
// {platforms}