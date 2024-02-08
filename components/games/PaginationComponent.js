import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Pagination, PaginationItem } from '@mui/material';
const test = (event, pageNumber) => {
    console.log(pageNumber);
}
const PaginationComponent = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
            <Pagination count={2} color='secondary' onChange={(event, pageNumber) => test(event, pageNumber)} renderItem={item => (<PaginationItem components={{ previous: ArrowForwardIosIcon, next: ArrowBackIosNewIcon }} {...item} />)} />
        </Box>
    );
};

export default PaginationComponent;