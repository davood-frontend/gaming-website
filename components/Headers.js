import React from 'react';
import { AppBar, Toolbar, Container, Typography, Box, Divider, IconButton, TextField, InputAdornment } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Logo from '@/assets/headerLogo.png'
import Image from 'next/image';
import { PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined, Instagram, Telegram, LinkedIn, Facebook, Twitter, HeadsetMicOutlined, AutoStoriesOutlined, HomeOutlined, Menu } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const CostumNextLink = ({ href, children }) => {
    return (
        <Link href={href} style={{ color: 'white', textDecoration: 'none', fontWeight: 300 ,fontSize : '14px'}}>
            {children}
        </Link>
    )
}
const CostumIconButton = ({ Icon, color, size }) => {
    return (
        <IconButton size={size || 'small'} color={color || 'default'}>
            <Icon sx={{ fontSize: '18px' }} />
        </IconButton>
    )
}


export const DesktopHeader = () => {
    const theme = useTheme()
    return (

        <AppBar sx={{ mt: 6.5, backgroundColor: 'transparent', boxShadow: 'none', position: 'absolute', backgroundImage: 'none' }}>
            <Container maxWidth={false}>
                <Toolbar sx={{ '&.MuiToolbar-root': { paddingX: { sm: '20px', md: '30px', lg: '10%' } } }}>
                    <Grid container sx={{ width: 1 }}>

                        <Grid xs={2}>
                            <Image src={Logo} style={{ width: '80px', height: '50px' }} alt="لوگو وبسایت" />
                            <Typography>
                                دنـیـای بــازی
                            </Typography>
                        </Grid>

                        <Grid xs={10} >

                            <Grid sx={{ display: 'flex', justifyContent: 'left' }}>

                                <Box sx={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 5, py: 0.3, alignItems: 'center', marginLeft: 2, columnGap: 3, px: 2 }}>
                                    <CostumIconButton Icon={Twitter} />
                                    <CostumIconButton Icon={Facebook} />
                                    <CostumIconButton Icon={LinkedIn} />
                                    <CostumIconButton Icon={Telegram} />
                                    <CostumIconButton Icon={Instagram} />
                                </Box>
                                <Box sx={{ display: 'flex', backgroundColor: theme.palette.secondary.main, borderRadius: 5, py: 0.3, alignItems: 'center', columnGap: 2, px: 2 }}>
                                    <CostumIconButton Icon={SearchOutlined} color='dark' />
                                    <Divider orientation='vertical' color={grey[900]} variant='middle' flexItem />
                                    <CostumIconButton Icon={ShoppingCartOutlined} color='dark' />
                                    <Divider orientation='vertical' color={grey[900]} variant='middle' flexItem />
                                    <CostumIconButton Icon={PersonOutlineOutlined} color='dark' />
                                </Box>
                            </Grid>


                            <Grid sx={{ display: 'flex', justifyContent: 'left', mt: 1.2 }}>
                                <Box >
                                    <CostumIconButton Icon={HomeOutlined} size='medium' color='secondary' />
                                </Box>
                                <Box sx={{ display: 'flex', marginRight: 3, gap: 4, alignItems: 'center' }}>
                                    <CostumNextLink href='shop'>
                                        فروشگاه
                                    </CostumNextLink>

                                    <CostumNextLink href='consols'>
                                        کنسول ها
                                    </CostumNextLink>
                                    <CostumNextLink href='game'>
                                        بازی
                                    </CostumNextLink>
                                    <CostumNextLink href='equipments'>
                                        لوازم جانبی
                                    </CostumNextLink>
                                    <CostumNextLink href='about'>
                                        درباره ما
                                    </CostumNextLink>
                                </Box>
                                <Box sx={{ color: 'white', marginRight: 2 }}>
                                    <CostumIconButton Icon={AutoStoriesOutlined} size='medium' color='secondary' />

                                    <CostumIconButton Icon={HeadsetMicOutlined} size='medium' color='secondary' />

                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export const MobileHeader = () => {
    return (

        <AppBar sx={{ backgroundImage: 'none', backgroundColor: '#192531' }} position='sticky'>
            <Toolbar>
                <Box sx={{ width: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1, alignItems: 'center', py: 1.5 }}>
                        <CostumIconButton Icon={Menu} size='medium' />

                        <Image src={Logo} style={{ width: '65px', height: '40px' }} />
                        <CostumIconButton Icon={PersonOutlineOutlined} size='medium' />

                    </Box>
                    <Divider color='#040200' />
                    <Grid container columnSpacing={1}>
                        <Grid xs={11} sx={{ py: 1 }}>
                            <TextField placeholder='جستجوی محصول' fullWidth size='small' variant='standard' sx={{ backgroundColor: '#101820', borderRadius: 1, py: 0.6, paddingRight: 1, height: 1 }} InputProps={{ endAdornment: <InputAdornment position='end'> <SearchOutlined /> </InputAdornment>, disableUnderline: true }} />
                        </Grid>
                        <Grid xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CostumIconButton Icon={ShoppingCartOutlined} size='medium' />
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};