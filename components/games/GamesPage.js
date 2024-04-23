'use client'
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Filter from '@/components/products/Filter';
import BackGround from '@/components/products/BackGround';
import PaginationComponent from '@/components/products/PaginationComponent';
import useSWR from 'swr';
import Loading from '@/components/general/Loading';
import Error from '@/components/general/Error';
import Products from '@/components/products/Products';
const GamesPage = ({ scrollLocation }) => {


    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`/api/games`, fetcher)
    const [filteredData, setFilteredData] = useState()
    const [currentItems, setCurrentItems] = useState()

    useEffect(() => {
        if (!isLoading) {
            setCurrentItems(data)
            setFilteredData(data)
            console.log(data);
        }
    }, [isLoading])

    if (error) {
        console.log(error);
        return <Error />
    }

    return (
        <Box>
            {/* <BackGround /> */}
            <Filter data={data} setData={setFilteredData} />
            {
                !currentItems ? (
                    <Loading pt={10} />
                ) : (
                    <>
                        <Products data={currentItems} group='games' />
                        <PaginationComponent data={filteredData} itemsPerPage={8} setCurrentItems={setCurrentItems} scrollLocation={scrollLocation} />
                    </>
                )
            }
        </Box >
    );
};

export default GamesPage;
