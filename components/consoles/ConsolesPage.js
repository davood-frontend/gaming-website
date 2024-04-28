'use client'
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Filter from '@/components/consoles/Filter';
import Error from '@/components/general/Error';
import Loading from '@/components/general/Loading';
import useSWR from 'swr';
import PaginationComponent from '@/components/products/PaginationComponent';
import Products from '@/components/products/Products';
const ConsolesPage = ({ scrollLocation }) => {
    const [filteredData, setFilteredData] = useState()
    const [currentItems, setCurrentItems] = useState()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`/api/consoles`, fetcher)

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
            <Filter data={data} setData={setFilteredData} />
            {
                !currentItems ? (
                    <Loading />
                ) : (
                    <>
                        <Products data={currentItems} group='consoles' />
                        <PaginationComponent data={filteredData} itemsPerPage={8} setCurrentItems={setCurrentItems} scrollLocation={scrollLocation} />
                    </>
                )
            }
        </Box>
    );
};

export default ConsolesPage;