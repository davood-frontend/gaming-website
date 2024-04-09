import React, { useState } from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import FilterRow from '@/components/general/filter/FilterRow';
import { rowData } from '@/constants/filterData';
import FilterSlider from '@/components/general/filter/FilterSlider';
import { useTheme } from '@mui/material'
const { category, companies, styles, platforms, priceSorting } = rowData
import FilterContainer from '../general/filter/FilterContainer';
const Filter = ({ data, setData }) => {
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))

    const [selectedData, setSelectedData] = useState({
        category: 'all',
        company: 'all',
        style: 'all',
        platform: 'all',
        priceSorting: 'default',
    })

    const [sliderValue, setSliderValue] = useState([0, 2000000])

    //changes the state according to the radios inside of "FilterRow" component
    const checkOption = (data) => {
        setSelectedData({ ...selectedData, [data.name]: data.value })
    }

    //filters the datas according to the keys inside of "selectedData" state
    const filterData = () => {
        const filteredCategory = data.filter(item => selectedData.category == 'all' ? item : item.category == selectedData.category)
        const filteredStyle = filteredCategory.filter(item => selectedData.style == 'all' ? item : item.style == selectedData.style)
        const filteredPlatform = filteredStyle.filter(item => selectedData.platform == 'all' ? item : item.platforms.includes(selectedData.platform))
        const filteredCompany = filteredPlatform.filter(item => selectedData.company == 'all' ? item : item.company == selectedData.company)
        const filteredPriceRange = filteredCompany.filter(item => item.price >= sliderValue[0] && item.price <= sliderValue[1])

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
            <FilterRow data={styles} selectedData={selectedData.style} checkOption={checkOption} />
            <FilterRow data={platforms} selectedData={selectedData.platform} checkOption={checkOption} />
            <FilterRow data={companies} selectedData={selectedData.company} checkOption={checkOption} />
            <FilterSlider sliderValue={sliderValue} setSliderValue={setSliderValue} page='games' />
            <FilterRow data={priceSorting} selectedData={selectedData.priceSorting} checkOption={checkOption} />
            <Box>
                <Button color='secondary' variant='contained' sx={{ color: 'black', px: 3.5, boxShadow: '0 0 10px rgba(254, 231, 21, 0.3)' }} size={smallerThanMd ? 'small' : 'medium'} onClick={filterData}>فیلتر</Button>
            </Box>
        </FilterContainer>

    );
};

export default Filter;
