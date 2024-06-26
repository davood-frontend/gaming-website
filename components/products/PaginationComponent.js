import React, { useEffect, useState } from 'react';
import { Box, Pagination } from '@mui/material';

const PaginationComponent = ({ data, itemsPerPage, setCurrentItems, scrollLocation }) => {

    const [currentPage, setCurrentPage] = useState(1)

    //calculates the total pages taht must be shown in pagination
    const totalPages = Math.ceil(data.length / itemsPerPage)

    const pageHandler = (event, pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({
            top: scrollLocation,
            left: 0,
            behavior: "smooth"
        });
    }
    //finds the current items by calculating the start index and the end index 
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentitems = data.slice(startIndex, endIndex)

    useEffect(() => {
        setCurrentItems(currentitems)
    }, [currentPage, data])
    useEffect(() => {
        setCurrentPage(1)
    }, [data])
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
            <Pagination page={currentPage} size='large' count={totalPages} color='secondary' onChange={(event, pageNumber) => pageHandler(event, pageNumber)} shape='rounded' />
        </Box>
    );
};

export default PaginationComponent;