import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import FilterContainer from '../general/filter/FilterContainer';
import FilterRow from '../general/filter/FilterRow';
import { consoleFilterData } from '@/constants/consolesFilterData';
const { category, priceSorting, generation } = consoleFilterData
import FilterSlider from '../general/filter/FilterSlider';
const Filter = ({ data, setData }) => {
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))
    const [selectedData, setSelectedData] = useState({
        category: 'all',
        generation: 'all',
        priceSorting: 'default'
    })
    const [sliderValue, setSliderValue] = useState([0, 20000000])

    const checkOption = (data) => {
        setSelectedData({ ...selectedData, [data.name]: data.value })
    }
    const filterData = () => {

        const filteredCategory = data.filter(item => selectedData.category == 'all' ? item : item.category == selectedData.category)
        const filteredGeneration = filteredCategory.filter(item => selectedData.generation == 'all' ? item : item.generation == selectedData.generation)
        const filteredPriceRange = filteredGeneration.filter(item => item.price >= sliderValue[0] && item.price <= sliderValue[1])

        if (selectedData.priceSorting == 'default') {
            setData(filteredPriceRange)
        } else if (selectedData.priceSorting == 'cheapest') {
            const cheapest = filteredPriceRange.sort((a, b) => a.price - b.price)
            setData(cheapest)
        } else if (selectedData.priceSorting == 'mostExpensive') {
            const mostExpensive = filteredPriceRange.sort((a, b) => b.price - a.price)
            setData(mostExpensive)
        }
    }

    return (
        <FilterContainer>
            <FilterRow data={category} selectedData={selectedData.category} checkOption={checkOption} />
            <FilterRow data={generation} selectedData={selectedData.generation} checkOption={checkOption} />
            <FilterSlider sliderValue={sliderValue} setSliderValue={setSliderValue} page='consoles' />
            <FilterRow data={priceSorting} selectedData={selectedData.priceSorting} checkOption={checkOption} />
            <Box>
                <Button color='secondary' variant='contained' sx={{ color: 'black', px: 3.5, boxShadow: '0 0 10px rgba(254, 231, 21, 0.3)' }} size={smallerThanMd ? 'small' : 'medium'} onClick={filterData}>فیلتر</Button>
            </Box>
        </FilterContainer>
    );
};

export default Filter;