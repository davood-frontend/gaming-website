'use client'
import { Box } from '@mui/material';
import React from 'react';
import Filter from '@/components/games/Filter';
import Games from '@/components/games/Games';
import BackGround from '@/components/games/BackGround';
import PaginationComponent from '@/components/games/PaginationComponent';

const page = () => {
    return (
        <Box>
            <Box sx={{ position: 'relative' }}>
                <BackGround />
                <Filter />
                <Games />
                {/* <PaginationComponent /> */}
            </Box>
        </Box >
    );
};

export default page;
