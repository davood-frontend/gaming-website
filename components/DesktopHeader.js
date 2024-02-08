'use client'
import React from 'react';
import { AppBar, Toolbar, Container, Typography, Box, Divider, IconButton, TextField, InputAdornment } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Logo from '@/assets/headerLogo.png'
import Image from 'next/image';
import { PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined, Instagram, Telegram, LinkedIn, Facebook, Twitter, HeadsetMicOutlined, AutoStoriesOutlined, HomeOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import styles from '@/styles/homePage/Header.module.css'

const CostumNextLink = ({ href, children }) => {
    return (
        <Link href={href} style={{ color: 'white', textDecoration: 'none', fontWeight: 300, fontSize: '14px' }}>
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


const DesktopHeader = () => {
    return (

        <AppBar className={styles.desktopHeader}>
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

                                <Box className={styles.socialMediaContainer}>
                                    <CostumIconButton Icon={Twitter} />
                                    <CostumIconButton Icon={Facebook} />
                                    <CostumIconButton Icon={LinkedIn} />
                                    <CostumIconButton Icon={Telegram} />
                                    <CostumIconButton Icon={Instagram} />
                                </Box>
                                <Box className={styles.actionContainer} >
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
                                    <CostumNextLink href='games'>
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
export default DesktopHeader;