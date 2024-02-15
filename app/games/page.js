'use client'
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Filter from '@/components/games/Filter';
import Games from '@/components/games/Games';
import BackGround from '@/components/games/BackGround';
import PaginationComponent from '@/components/games/PaginationComponent';
import { games } from '@/constants/games';
const page = () => {
    const [filteredData, setFilteredData] = useState(games)
    const [currentItems, setCurrentItems] = useState(games)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [currentItems])
    return (
        <Box>
            <Box sx={{ position: 'relative' }}>
                <BackGround />
                <Filter data={games} setData={setFilteredData} />
                <Games data={currentItems} />
                <PaginationComponent data={filteredData} itemsPerPage={8} setCurrentItems={setCurrentItems} />
            </Box>
        </Box >
    );
};

export default page;
