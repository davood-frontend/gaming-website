'use client'
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { Context } from '@/context/mainContext';
const SideBar = () => {
    const { sideBar, toggleSideBar } = useContext(Context)
    return (
        <Drawer open={sideBar} onClose={toggleSideBar}>
            <Typography sx={{ mx: 4 }}>
                hallo hallo
            </Typography>
        </Drawer>
    );
};

export default SideBar;