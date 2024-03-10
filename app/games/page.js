'use client'
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Filter from '@/components/games/Filter';
import Games from '@/components/games/Games';
import BackGround from '@/components/games/BackGround';
import PaginationComponent from '@/components/games/PaginationComponent';
import { games } from '@/constants/games';
import useSWR from 'swr';
import Loading from '@/components/general/Loading';
import Error from '@/components/general/Error';
const GamesPage = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/games', fetcher)
    const [filteredData, setFilteredData] = useState()
    const [currentItems, setCurrentItems] = useState()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [currentItems])
    useEffect(() => {
        if (!isLoading) {
            setCurrentItems(data)
            setFilteredData(data)
        }
    }, [isLoading])

    if (error) {
        return <Error />
    }

    return (
        <Box>
            <Box sx={{ position: 'relative' }}>
                <BackGround />
                <Filter data={data} setData={setFilteredData} />
                {
                    !currentItems ? (
                        <Loading pt={10} />
                    ) : (
                        <>
                            <Games data={currentItems} />
                            <PaginationComponent data={filteredData} itemsPerPage={8} setCurrentItems={setCurrentItems} />
                        </>
                    )
                }
            </Box>
        </Box >
    );
};

export default GamesPage;
