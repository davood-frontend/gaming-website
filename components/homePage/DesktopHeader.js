'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Box, Divider, IconButton, Tooltip } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Logo from '@/assets/headerLogo.png'
import Image from 'next/image';
import { PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined, Instagram, Telegram, LinkedIn, Facebook, Twitter, HeadsetMicOutlined, AutoStoriesOutlined, HomeOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import styles from '@/styles/homePage/Header.module.css'
import SnackBar from '../general/SnackBar';

const CostumNextLink = ({ href, children }) => {
    return (
        <Link href={href} style={{ color: 'white', textDecoration: 'none', fontWeight: 300, fontSize: '14px' }}>
            {children}
        </Link>
    )
}

const CostumIconButton = ({ Icon, color, size, href, desc, ...props }) => {
    return (
        <Link href={href || ''}>
            <Tooltip title={desc} arrow>
                <IconButton size={size || 'small'} color={color || 'default'} {...props}>
                    <Icon sx={{ fontSize: '18px' }} />
                </IconButton>
            </Tooltip>
        </Link>
    )
}


const DesktopHeader = () => {
    const [snackBar, setSnackBar] = useState({
        open: false,
        message: '',
        severity: '',
    })
    const commingSoon = () => {
        setSnackBar({
            open: true,
            message: 'این قسمت به زودی به وبسایت اضافه خواهد شد',
            severity: 'success',

        })
    }

    return (

        <AppBar className={styles.desktopHeader}>
            <Container maxWidth={false}>
                <Toolbar sx={{ '&.MuiToolbar-root': { paddingX: { sm: '20px', md: '30px', lg: '10%' } } }}>
                    <SnackBar setSnackBar={setSnackBar} snackBar={snackBar} />

                    <Grid container sx={{ width: 1 }}>

                        <Grid xs={2}>
                            <Image src={Logo} style={{ width: '80px', height: '50px' }} alt="لوگو وبسایت" />
                            <Typography>
                                دنـیـای بــازی
                            </Typography>
                        </Grid>

                        <Grid xs={10} >

                            <Grid sx={{ display: 'flex', justifyContent: 'end' }}>

                                <Box className={styles.socialMediaContainer}>
                                    <CostumIconButton Icon={Twitter} />
                                    <CostumIconButton Icon={Facebook} />
                                    <CostumIconButton Icon={LinkedIn} />
                                    <CostumIconButton Icon={Telegram} />
                                    <CostumIconButton Icon={Instagram} />
                                </Box>
                                <Box className={styles.actionContainer} >
                                    <CostumIconButton Icon={SearchOutlined} color='dark' desc='جستجو' onClick={commingSoon} />
                                    <Divider orientation='vertical' color={grey[900]} variant='middle' flexItem />
                                    <CostumIconButton Icon={ShoppingCartOutlined} color='dark' desc='سبد خرید' onClick={commingSoon} />
                                    <Divider orientation='vertical' color={grey[900]} variant='middle' flexItem />
                                    <CostumIconButton Icon={PersonOutlineOutlined} color='dark' desc='پروفایل' onClick={commingSoon} />
                                </Box>
                            </Grid>


                            <Grid sx={{ display: 'flex', justifyContent: 'end', mt: 1.2 }}>
                                <Box >
                                    <CostumIconButton href='/' Icon={HomeOutlined} size='medium' color='secondary' desc='خانه' />
                                </Box>
                                <Box sx={{ display: 'flex', marginLeft: 3, gap: 4, alignItems: 'center' }}>
                                    <CostumNextLink href='/shop'>
                                        فروشگاه
                                    </CostumNextLink>

                                    <CostumNextLink href='/consoles'>
                                        کنسول ها
                                    </CostumNextLink>
                                    <CostumNextLink href='/games'>
                                        بازی ها
                                    </CostumNextLink>
                                    <CostumNextLink href='/about'>
                                        درباره ما
                                    </CostumNextLink>
                                </Box>
                                <Box sx={{ color: 'white', marginLeft: 2 }}>
                                    <CostumIconButton Icon={AutoStoriesOutlined} href='/blogs' size='medium' color='secondary' desc='وبلاگ' />

                                    <CostumIconButton Icon={HeadsetMicOutlined} href='/contact' size='medium' color='secondary' desc='تماس' />
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