'use client'
import React from 'react';
import { AppBar, Toolbar, Box, Divider, IconButton, TextField, InputAdornment } from '@mui/material'
import { PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined, Menu } from '@mui/icons-material';
import styles from '@/styles/homePage/Header.module.css'
import Image from 'next/image';
import Logo from '@/assets/headerLogo.png'
import Grid from '@mui/material/Unstable_Grid2'
const CostumIconButton = ({ Icon, color, size }) => {
    return (
        <IconButton size={size || 'small'} color={color || 'default'}>
            <Icon sx={{ fontSize: '18px' }} />
        </IconButton>
    )
}


const MobileHeader = () => {
    return (

        <AppBar className={styles.mobileHeader}>
            <Toolbar>
                <Box sx={{ width: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1, alignItems: 'center', py: 1.5 }}>
                        <CostumIconButton Icon={Menu} size='medium' />

                        <Image src={Logo} style={{ width: '65px', height: '40px' }} alt='لوگو وبسایت' />
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

export default MobileHeader;